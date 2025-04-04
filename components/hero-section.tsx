"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-8 pb-16">
      <div className="container mx-auto px-4 flex">
        <div className="w-full lg:w-1/2 relative">
          <div className="h-[400px] flex items-center justify-center">
            <div className="w-[300px] h-[400px] bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="https://media.discordapp.net/attachments/1347593116030599179/1347594929353789440/DALLE_2025-03-07_12_LE_upscale_balanced_x4_light_ai_50.jpg?ex=67e76bd4&is=67e61a54&hm=f636630e5e99105788afc000c717157f0f8e285a9ca37de0ace00106b8ecdc4f&=&format=webp&width=648&height=648"
                alt="MU Online Character"
                width={300}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-end">
          <div className="text-right mb-4">
            <p className="text-white text-lg">{t.hero.accounts}</p>
            <p className="text-yellow-400 text-5xl font-bold">1997</p>
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

