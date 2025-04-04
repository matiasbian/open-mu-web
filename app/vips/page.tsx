"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Crown, Check, Gem, Clock, Shield, Zap, Award, Star } from "lucide-react"
import Link from "next/link"

function VipsContent() {
  const { t } = useLanguage()

  const vipPlans = [
    {
      name: t.vips.bronze.name,
      price: "$10",
      duration: t.vips.bronze.duration,
      color: "from-amber-700 to-amber-900",
      borderColor: "border-amber-600",
      icon: <Shield className="h-8 w-8" />,
      features: [t.vips.bronze.feature1, t.vips.bronze.feature2, t.vips.bronze.feature3, t.vips.bronze.feature4],
    },
    {
      name: t.vips.silver.name,
      price: "$25",
      duration: t.vips.silver.duration,
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-300",
      icon: <Award className="h-8 w-8" />,
      features: [
        t.vips.silver.feature1,
        t.vips.silver.feature2,
        t.vips.silver.feature3,
        t.vips.silver.feature4,
        t.vips.silver.feature5,
      ],
      popular: true,
    },
    {
      name: t.vips.gold.name,
      price: "$50",
      duration: t.vips.gold.duration,
      color: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-400",
      icon: <Crown className="h-8 w-8" />,
      features: [
        t.vips.gold.feature1,
        t.vips.gold.feature2,
        t.vips.gold.feature3,
        t.vips.gold.feature4,
        t.vips.gold.feature5,
        t.vips.gold.feature6,
      ],
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-400" />,
      title: t.vips.benefits.exp.title,
      description: t.vips.benefits.exp.description,
    },
    {
      icon: <Gem className="h-10 w-10 text-yellow-400" />,
      title: t.vips.benefits.drop.title,
      description: t.vips.benefits.drop.description,
    },
    {
      icon: <Star className="h-10 w-10 text-yellow-400" />,
      title: t.vips.benefits.items.title,
      description: t.vips.benefits.items.description,
    },
    {
      icon: <Clock className="h-10 w-10 text-yellow-400" />,
      title: t.vips.benefits.events.title,
      description: t.vips.benefits.events.description,
    },
  ]

  const paymentMethods = [
    {
      name: "PayPal",
      icon: "💳",
      description: t.vips.payment.paypal,
    },
    {
      name: "Credit Card",
      icon: "💳",
      description: t.vips.payment.creditCard,
    },
    {
      name: "Crypto",
      icon: "₿",
      description: t.vips.payment.crypto,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.vips.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.vips.subtitle}</p>
        </div>

        {/* VIP Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0c0c14]/80 border border-[#333] rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* VIP Plans */}
        <h2 className="text-2xl font-bold text-center mb-8">{t.vips.choosePlan}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {vipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b ${plan.color} border ${plan.borderColor} rounded-lg overflow-hidden transform transition-transform hover:scale-105 ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 rounded-bl-lg">
                  {t.vips.mostPopular}
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-300 ml-2">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/donation"
                  className="block w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase text-center border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                >
                  {t.vips.buyNow}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-12">
          <div className="border-b border-[#333] p-4">
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.vips.paymentMethods}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-[#1a1a24] border border-[#333] rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
          <div className="border-b border-[#333] p-4">
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.vips.faq.title}</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.vips.faq.q1}</h3>
                <p className="text-gray-400">{t.vips.faq.a1}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.vips.faq.q2}</h3>
                <p className="text-gray-400">{t.vips.faq.a2}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.vips.faq.q3}</h3>
                <p className="text-gray-400">{t.vips.faq.a3}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.vips.faq.q4}</h3>
                <p className="text-gray-400">{t.vips.faq.a4}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function VipsPage() {
  return (
    <LanguageProvider>
      <VipsContent />
    </LanguageProvider>
  )
}

