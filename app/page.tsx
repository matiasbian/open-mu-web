"use client"

import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NewsSection from "@/components/news-section"
import ServerInfo from "@/components/server-info"
import RankingsSection from "@/components/rankings-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
        <Header />

        <main>
          <HeroSection />

          <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <NewsSection />
            <ServerInfo />
          </section>

          <RankingsSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

