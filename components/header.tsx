"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "./language-selector"

// Update the header component to link to the new pages
export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="relative z-10 border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.home}
          </Link>
          <Link href="/registro" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.register}
          </Link>
          <Link href="/rankings" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.rankings}
          </Link>
          <Link href="/downloads" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.downloads}
          </Link>
          <Link href="/infos" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.info}
          </Link>
          <Link href="/vips" className="text-white hover:text-yellow-400 uppercase font-semibold">
            {t.nav.vip}
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-yellow-400 uppercase font-semibold">
              {t.nav.more} <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-[#1a1a24] border border-[#333] rounded shadow-lg p-2 w-40">
              <Link href="/social" className="block px-4 py-2 text-white hover:text-yellow-400">
                {t.nav.social}
              </Link>
              <Link href="/soporte" className="block px-4 py-2 text-white hover:text-yellow-400">
                {t.nav.support}
              </Link>
              <Link href="/doacion" className="block px-4 py-2 text-white hover:text-yellow-400">
                {t.nav.donation}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href="/cuenta"
            className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-2 rounded-md border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433] mr-2"
          >
            <div className="text-center">
              <p className="text-white uppercase font-bold">{t.nav.login}</p>
            </div>
          </Link>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  )
}

