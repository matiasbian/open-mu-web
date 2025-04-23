"use client"

import { useState } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DollarSign, CreditCard, Gift, Crown, Gem, Heart, ShoppingCart, CheckCircle, Shield } from "lucide-react"

function DonationContent() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<"vip" | "coins" | "donation">("vip")
  const [showThankYou, setShowThankYou] = useState(false)

  const vipPackages = [
    {
      id: "vip-bronze",
      name: t.donation.vip.bronze.name,
      price: "$10",
      duration: t.donation.vip.bronze.duration,
      color: "from-amber-700 to-amber-900",
      borderColor: "border-amber-600",
      icon: <Shield className="h-8 w-8" />,
      benefits: [t.donation.vip.bronze.benefit1, t.donation.vip.bronze.benefit2, t.donation.vip.bronze.benefit3],
    },
    {
      id: "vip-silver",
      name: t.donation.vip.silver.name,
      price: "$25",
      duration: t.donation.vip.silver.duration,
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-300",
      icon: <Shield className="h-8 w-8" />,
      benefits: [
        t.donation.vip.silver.benefit1,
        t.donation.vip.silver.benefit2,
        t.donation.vip.silver.benefit3,
        t.donation.vip.silver.benefit4,
      ],
      popular: true,
    },
    {
      id: "vip-gold",
      name: t.donation.vip.gold.name,
      price: "$50",
      duration: t.donation.vip.gold.duration,
      color: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-400",
      icon: <Crown className="h-8 w-8" />,
      benefits: [
        t.donation.vip.gold.benefit1,
        t.donation.vip.gold.benefit2,
        t.donation.vip.gold.benefit3,
        t.donation.vip.gold.benefit4,
        t.donation.vip.gold.benefit5,
      ],
    },
  ]

  const coinPackages = [
    {
      id: "coins-small",
      name: t.donation.coins.small.name,
      amount: "500",
      price: "$5",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      bonus: "",
    },
    {
      id: "coins-medium",
      name: t.donation.coins.medium.name,
      amount: "1,200",
      price: "$10",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      bonus: "+200 bonus",
      popular: true,
    },
    {
      id: "coins-large",
      name: t.donation.coins.large.name,
      amount: "2,500",
      price: "$20",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      bonus: "+500 bonus",
    },
    {
      id: "coins-xlarge",
      name: t.donation.coins.xlarge.name,
      amount: "5,500",
      price: "$40",
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      bonus: "+1,500 bonus",
    },
  ]

  const donationAmounts = [
    { id: "donation-5", amount: "$5" },
    { id: "donation-10", amount: "$10" },
    { id: "donation-20", amount: "$20" },
    { id: "donation-50", amount: "$50" },
    { id: "donation-100", amount: "$100" },
    { id: "donation-custom", amount: t.donation.custom },
  ]

  const handlePurchase = (itemId: string) => {
    console.log(`Purchasing item: ${itemId}`)
    // Here you would typically redirect to a payment gateway
    // For demo purposes, we'll just show a thank you message
    setShowThankYou(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setShowThankYou(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <DollarSign className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.donation.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.donation.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1a1a24] rounded-lg p-1">
            <button
              onClick={() => setSelectedCategory("vip")}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "vip"
                  ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center">
                <Crown className="h-4 w-4 mr-2" />
                <span>{t.donation.categories.vip}</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedCategory("coins")}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "coins"
                  ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center">
                <Gem className="h-4 w-4 mr-2" />
                <span>{t.donation.categories.coins}</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedCategory("donation")}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "donation"
                  ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                <span>{t.donation.categories.donation}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Thank You Message */}
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
            <div className="bg-[#0c0c14] border border-[#333] rounded-lg p-6 max-w-md w-full text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.donation.thankYou.title}</h3>
              <p className="text-gray-300 mb-4">{t.donation.thankYou.message}</p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-2 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
              >
                {t.donation.thankYou.close}
              </button>
            </div>
          </div>
        )}

        {/* VIP Packages */}
        {selectedCategory === "vip" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {vipPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-gradient-to-b ${pkg.color} border ${pkg.borderColor} rounded-lg overflow-hidden transform transition-transform hover:scale-105 ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 rounded-bl-lg">
                      {t.donation.popular}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-center mb-4">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="text-gray-300 ml-2">/ {pkg.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handlePurchase(pkg.id)}
                      className="block w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase text-center border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                    >
                      <div className="flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {t.donation.buyNow}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider">{t.donation.vipInfo.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t.donation.vipInfo.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1a1a24] p-4 rounded-md">
                    <h3 className="font-semibold text-yellow-400 mb-2">{t.donation.vipInfo.howToUse}</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li>{t.donation.vipInfo.step1}</li>
                      <li>{t.donation.vipInfo.step2}</li>
                      <li>{t.donation.vipInfo.step3}</li>
                    </ol>
                  </div>
                  <div className="bg-[#1a1a24] p-4 rounded-md">
                    <h3 className="font-semibold text-yellow-400 mb-2">{t.donation.vipInfo.notes}</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                      <li>{t.donation.vipInfo.note1}</li>
                      <li>{t.donation.vipInfo.note2}</li>
                      <li>{t.donation.vipInfo.note3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MU Coins Packages */}
        {selectedCategory === "coins" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coinPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-gradient-to-b ${pkg.color} border ${pkg.borderColor} rounded-lg overflow-hidden transform transition-transform hover:scale-105`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 rounded-bl-lg">
                      {t.donation.bestValue}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <Gem className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{pkg.name}</h3>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold">{pkg.amount}</div>
                      <div className="text-green-400 text-sm">{pkg.bonus}</div>
                    </div>
                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    </div>
                    <button
                      onClick={() => handlePurchase(pkg.id)}
                      className="block w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase text-center border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                    >
                      <div className="flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {t.donation.buyNow}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider">{t.donation.coinsInfo.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t.donation.coinsInfo.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1a1a24] p-4 rounded-md">
                    <h3 className="font-semibold text-yellow-400 mb-2">{t.donation.coinsInfo.whatCanBuy}</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                      <li>{t.donation.coinsInfo.item1}</li>
                      <li>{t.donation.coinsInfo.item2}</li>
                      <li>{t.donation.coinsInfo.item3}</li>
                      <li>{t.donation.coinsInfo.item4}</li>
                    </ul>
                  </div>
                  <div className="bg-[#1a1a24] p-4 rounded-md">
                    <h3 className="font-semibold text-yellow-400 mb-2">{t.donation.coinsInfo.howToUse}</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li>{t.donation.coinsInfo.step1}</li>
                      <li>{t.donation.coinsInfo.step2}</li>
                      <li>{t.donation.coinsInfo.step3}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Donation Options */}
        {selectedCategory === "donation" && (
          <div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-8">
                <div className="border-b border-[#333] p-4">
                  <h2 className="text-xl uppercase font-semibold tracking-wider">{t.donation.donationInfo.title}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{t.donation.donationInfo.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {donationAmounts.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handlePurchase(option.id)}
                        className="bg-[#1a1a24] hover:bg-[#252535] border border-[#333] rounded-lg p-4 text-center transition-colors"
                      >
                        <span className="block text-xl font-bold">{option.amount}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#1a1a24] border border-[#333] rounded-lg p-6">
                    <h3 className="font-semibold text-yellow-400 mb-4">{t.donation.donationInfo.customAmount}</h3>
                    <div className="flex">
                      <div className="flex-shrink-0 bg-[#0c0c14] border-y border-l border-[#333] rounded-l-md px-3 flex items-center">
                        <DollarSign className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="number"
                        min="1"
                        placeholder="Enter amount"
                        className="flex-grow px-3 py-2 bg-[#0c0c14] border border-[#333] focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white"
                      />
                      <button
                        onClick={() => handlePurchase("donation-custom-value")}
                        className="flex-shrink-0 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 py-2 rounded-r-md border-y border-r border-[#A67C52] text-white font-semibold"
                      >
                        {t.donation.donate}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
                <div className="border-b border-[#333] p-4">
                  <h2 className="text-xl uppercase font-semibold tracking-wider">
                    {t.donation.donationInfo.whereGoes}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#1a1a24] rounded-full p-2 mr-4">
                        <CreditCard className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t.donation.donationInfo.serverCosts.title}</h3>
                        <p className="text-gray-400 text-sm">{t.donation.donationInfo.serverCosts.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#1a1a24] rounded-full p-2 mr-4">
                        <Gift className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t.donation.donationInfo.development.title}</h3>
                        <p className="text-gray-400 text-sm">{t.donation.donationInfo.development.description}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#1a1a24] rounded-full p-2 mr-4">
                        <Heart className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t.donation.donationInfo.community.title}</h3>
                        <p className="text-gray-400 text-sm">{t.donation.donationInfo.community.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mt-12">
          <div className="border-b border-[#333] p-4">
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.donation.paymentMethods.title}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a24] border border-[#333] rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-semibold mb-2">{t.donation.paymentMethods.creditCard.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{t.donation.paymentMethods.creditCard.description}</p>
                <div className="flex justify-center space-x-2">
                  <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">VISA</div>
                  <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">MASTERCARD</div>
                  <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">AMEX</div>
                </div>
              </div>
              <div className="bg-[#1a1a24] border border-[#333] rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🅿️</div>
                <h3 className="text-xl font-semibold mb-2">{t.donation.paymentMethods.paypal.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{t.donation.paymentMethods.paypal.description}</p>
                <div className="flex justify-center">
                  <div className="bg-[#0070ba] text-white px-3 py-1 rounded text-xs font-bold">PayPal</div>
                </div>
              </div>
              <div className="bg-[#1a1a24] border border-[#333] rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">₿</div>
                <h3 className="text-xl font-semibold mb-2">{t.donation.paymentMethods.crypto.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{t.donation.paymentMethods.crypto.description}</p>
                <div className="flex justify-center space-x-2">
                  <div className="bg-[#f7931a] text-white px-2 py-1 rounded text-xs font-bold">BTC</div>
                  <div className="bg-[#627eea] text-white px-2 py-1 rounded text-xs font-bold">ETH</div>
                  <div className="bg-[#345d9d] text-white px-2 py-1 rounded text-xs font-bold">USDT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function DonationPage() {
  return (
    <LanguageProvider>
      <DonationContent />
    </LanguageProvider>
  )
}

