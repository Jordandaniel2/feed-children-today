import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const DonateSection = () => {
  const [activeTab, setActiveTab] = useState('gifts')
  const [amount, setAmount] = useState('50')
  const [copied, setCopied] = useState(false)

  const presetAmounts = [10, 25, 50, 100]

  const cryptoWallets = {
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    ethereum: '0x1234567890123456789012345678901234567890',
    usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDonate = () => {
    alert(`Thank you for your donation of $${amount}! This is a demo - no actual payment was processed.`)
  }

  return (
    <section id="donate" className="section bg-gradient-warm">
      <div className="container-max px-4">
        <h2 className="heading-md text-center mb-12 animate-fade-up">Make a Donation</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-glow p-8 animate-fade-up">
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Custom amount"
                className="flex-1 px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex gap-4 border-b border-muted mb-6">
              {['gifts', 'apple', 'crypto'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground/50 hover:text-foreground'
                  }`}
                >
                  {tab === 'gifts' && 'Gift Cards'}
                  {tab === 'apple' && 'Apple Pay'}
                  {tab === 'crypto' && 'Cryptocurrency'}
                </button>
              ))}
            </div>

            {/* Gift Cards Tab */}
            {activeTab === 'gifts' && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter gift card code"
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-sm text-foreground/60">Accepted: Apple, Amazon, Google Play</p>
              </div>
            )}

            {/* Apple Pay Tab */}
            {activeTab === 'apple' && (
              <div className="text-center py-6">
                <button className="btn-primary mx-auto">Pay with Apple Pay</button>
                <p className="text-sm text-foreground/60 mt-4">Click to open Apple Pay on your device</p>
              </div>
            )}

            {/* Crypto Tab */}
            {activeTab === 'crypto' && (
              <div className="space-y-4">
                {Object.entries(cryptoWallets).map(([coin, address]) => (
                  <div key={coin} className="bg-muted rounded-lg p-4">
                    <label className="block text-sm font-semibold mb-2 capitalize">{coin}</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={address}
                        readOnly
                        className="flex-1 px-3 py-2 bg-background rounded border border-background text-xs overflow-hidden"
                      />
                      <button
                        onClick={() => handleCopy(address)}
                        className="btn-primary flex items-center gap-2 text-sm px-4"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Donate Button */}
          <button onClick={handleDonate} className="btn-primary w-full text-lg py-4">
            Donate ${amount}
          </button>
          <p className="text-center text-sm text-foreground/50 mt-4">
            This is a demo. No actual payment will be processed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonateSection