"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl uppercase font-semibold tracking-wider mb-4">{t.footer.best}</h2>
        <p className="text-gray-400 text-sm">{t.footer.rights}</p>
      </div>
    </footer>
  )
}

