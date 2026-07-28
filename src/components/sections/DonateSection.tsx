import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const DonateSection = () => {
  const [amount, setAmount] = useState('50')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'success' | 'cancelled' | null>(null)

  const presetAmounts = [10, 25, 50, 100]

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const donation = params.get('donation')
    if (donation === 'success' || donation === 'cancelled') {
      setStatus(donation)
      params.delete('donation')
      const query = params.toString()
      window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}#donate`)
    }
  }, [])

  const handleDonate = async () => {
    setError('')
    const numericAmount = Number(amount)

    if (!Number.isFinite(numericAmount) || numericAmount < 1) {
      setError('Enter an amount of at least $1')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: numericAmount }),
      })
      const data = await response.json()

      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Unable to start checkout')
      }

      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <section id="donate" className="section bg-gradient-warm">
      <div className="container-max px-4">
        <h2 className="heading-md text-center mb-12 animate-fade-up">Make a Donation</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-glow p-8 animate-fade-up">
          {status === 'success' && (
            <div className="mb-8 flex items-center gap-3 bg-green-50 text-green-800 border border-green-200 rounded-lg p-4">
              <CheckCircle2 size={22} className="shrink-0" />
              <p className="text-sm font-medium">
                Thank you! Your donation was received and will help feed a child today.
              </p>
            </div>
          )}
          {status === 'cancelled' && (
            <div className="mb-8 bg-muted rounded-lg p-4">
              <p className="text-sm font-medium text-foreground/70">
                Checkout was cancelled. No payment was taken — feel free to try again whenever you're ready.
              </p>
            </div>
          )}

          {/* Amount Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">Select Amount</label>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className={`py-3 rounded-lg font-semibold transition-all ${
                    amount === preset.toString()
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'bg-muted text-foreground hover:bg-accent'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-lg font-semibold">$</span>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Custom amount"
                className="flex-1 px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 mb-4 text-center">{error}</p>
          )}

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            disabled={loading}
            className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Redirecting to secure checkout...
              </>
            ) : (
              `Donate $${amount || 0}`
            )}
          </button>
          <p className="text-center text-sm text-foreground/50 mt-4">
            Secure checkout powered by Stripe · Accepts major cards, Apple Pay & Google Pay
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonateSection
