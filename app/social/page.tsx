"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle, Users, Share2, Globe, Youtube, Facebook, Twitter, Instagram, Twitch } from "lucide-react"

function SocialContent() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/mudinakon",
      icon: <MessageCircle className="h-8 w-8" />,
      color: "from-indigo-600 to-indigo-800",
      borderColor: "border-indigo-500",
      description: t.social.discord.description,
      buttonText: t.social.discord.join,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/mudinakon",
      icon: <Facebook className="h-8 w-8" />,
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      description: t.social.facebook.description,
      buttonText: t.social.facebook.follow,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mudinakon",
      icon: <Instagram className="h-8 w-8" />,
      color: "from-pink-600 to-purple-800",
      borderColor: "border-pink-500",
      description: t.social.instagram.description,
      buttonText: t.social.instagram.follow,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mudinakon",
      icon: <Twitter className="h-8 w-8" />,
      color: "from-sky-500 to-sky-700",
      borderColor: "border-sky-400",
      description: t.social.twitter.description,
      buttonText: t.social.twitter.follow,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/mudinakon",
      icon: <Youtube className="h-8 w-8" />,
      color: "from-red-600 to-red-800",
      borderColor: "border-red-500",
      description: t.social.youtube.description,
      buttonText: t.social.youtube.subscribe,
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/mudinakon",
      icon: <Twitch className="h-8 w-8" />,
      color: "from-purple-600 to-purple-800",
      borderColor: "border-purple-500",
      description: t.social.twitch.description,
      buttonText: t.social.twitch.follow,
    },
  ]

  const communityHighlights = [
    {
      title: t.social.community.events.title,
      description: t.social.community.events.description,
      icon: <Users className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: t.social.community.content.title,
      description: t.social.community.content.description,
      icon: <Share2 className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: t.social.community.global.title,
      description: t.social.community.global.description,
      icon: <Globe className="h-10 w-10 text-yellow-400" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <MessageCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.social.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.social.subtitle}</p>
        </div>

        {/* Discord Feature */}
        <div className="bg-gradient-to-b from-[#5865F2]/20 to-[#5865F2]/10 border border-[#5865F2]/30 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-4 text-[#5865F2]">{t.social.discordFeature.title}</h2>
              <p className="text-gray-300 mb-4">{t.social.discordFeature.description}</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#5865F2] mr-2">•</span>
                  <span>{t.social.discordFeature.feature1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5865F2] mr-2">•</span>
                  <span>{t.social.discordFeature.feature2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5865F2] mr-2">•</span>
                  <span>{t.social.discordFeature.feature3}</span>
                </li>
              </ul>
              <a
                href="https://discord.gg/mudinakon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.social.discordFeature.joinNow}
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-64 bg-[#2a2a3a] rounded-lg flex items-center justify-center">
                <MessageCircle className="h-24 w-24 text-[#5865F2]" />
              </div>
            </div>
          </div>
        </div>

        {/* Community Highlights */}
        <h2 className="text-2xl font-bold text-center mb-8">{t.social.community.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {communityHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#0c0c14]/80 border border-[#333] rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <h2 className="text-2xl font-bold text-center mb-8">{t.social.followUs}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${social.color} border ${social.borderColor} rounded-lg overflow-hidden transform transition-transform hover:scale-105`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {social.icon}
                  <h3 className="text-xl font-bold ml-3">{social.name}</h3>
                </div>
                <p className="text-gray-200 mb-6">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/20 hover:bg-white/30 px-6 py-3 rounded-md text-white font-semibold text-center transition-colors"
                >
                  {social.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
          <div className="border-b border-[#333] p-4">
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.social.guidelines.title}</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-300 mb-4">{t.social.guidelines.description}</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">1.</span>
                <span>{t.social.guidelines.rule1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">2.</span>
                <span>{t.social.guidelines.rule2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">3.</span>
                <span>{t.social.guidelines.rule3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">4.</span>
                <span>{t.social.guidelines.rule4}</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">5.</span>
                <span>{t.social.guidelines.rule5}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SocialPage() {
  return (
    <LanguageProvider>
      <SocialContent />
    </LanguageProvider>
  )
}

