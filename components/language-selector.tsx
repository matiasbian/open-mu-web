"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <div className="relative group">
      <button
        onClick={toggleLanguage}
        className="flex items-center bg-gradient-to-b from-[#1a1a24] to-[#0c0c14] text-white px-3 py-1 rounded border border-[#333] hover:border-[#444]"
      >
        <span className="mr-1">{language === "es" ? "ES" : "EN"}</span>
        <ChevronDown className="h-4 w-4 text-white" />
      </button>
      <div className="absolute hidden group-hover:block bg-[#1a1a24] border border-[#333] rounded shadow-lg p-2 right-0 w-24">
        <button
          onClick={() => setLanguage("es")}
          className={`flex items-center px-4 py-2 text-white hover:text-yellow-400 w-full text-left ${language === "es" ? "text-yellow-400" : ""}`}
        >
          Español
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`flex items-center px-4 py-2 text-white hover:text-yellow-400 w-full text-left ${language === "en" ? "text-yellow-400" : ""}`}
        >
          English
        </button>
      </div>
    </div>
  )
}

