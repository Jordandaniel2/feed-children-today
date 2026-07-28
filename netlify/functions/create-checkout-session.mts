import type { Config } from '@netlify/functions'
import Stripe from 'stripe'

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const secretKey = Netlify.env.get('STRIPE_SECRET_KEY')
  if (!secretKey) {
    return Response.json(
      { error: 'Payments are not configured yet. Add STRIPE_SECRET_KEY in Netlify environment variables to enable donations.' },
      { status: 503 },
    )
  }

  let amount: number
  try {
    const body = await req.json()
    amount = Number(body?.amount)
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return Response.json({ error: 'Enter a donation amount between $1 and $100,000' }, { status: 400 })
  }

  const origin = req.headers.get('origin') ?? new URL(req.url).origin
  const stripe = new Stripe(secretKey)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to FEED the CHILDREN TODAY',
              description: 'Helping provide meals to hungry children across the USA',
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?donation=success`,
      cancel_url: `${origin}/?donation=cancelled`,
    })

    return Response.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    return Response.json({ error: 'Unable to start checkout. Please try again shortly.' }, { status: 502 })
  }
}

export const config: Config = {
  path: '/api/create-checkout-session',
  method: 'POST',
}
