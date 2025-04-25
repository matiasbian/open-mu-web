"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import DiscordIcon from "@/public/img/logo.png"

export default function HeroSection() {
  const { t } = useLanguage()
  function daysSinceDate(date:Date) {
    const startDate = new Date(date);
    const today = new Date();
  
    const timeDifference = today.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
    return daysDifference;
  }

  return (
    <section className="relative pt-8 pb-16">
      <div className="container mx-auto px-4 flex">
        <div className="w-full lg:w-2/3 relative">
          <div className="h-[400px] flex items-center justify-center">
            <div className="w-[1792px] h-[400px] bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={DiscordIcon}
                alt="MU Online Character"
                width={1792}
                height={1024}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <p className="text-white text-lg">{t.server.timeonline}</p>
            <p className="text-yellow-400 text-5xl font-bold">{daysSinceDate(new Date('2025-03-21'))}</p>
          </div>
          <Link
            href="/downloads"
            className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-8 py-3 rounded-md border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
          >
            <div className="text-center">
              <p className="text-white uppercase font-bold">{t.hero.download}</p>
              <p className="text-gray-300 text-xs">{t.hero.client}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

