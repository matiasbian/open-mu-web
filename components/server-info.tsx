"use client"

import { useLanguage } from "@/contexts/language-context"

export default function ServerInfo() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="bg-[#0c0c14]/80 border border-[#333] rounded">
        <div className="border-b border-[#333] p-4">
          <h2 className="text-xl uppercase font-semibold tracking-wider">{t.server.title}</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-300">{t.server.version}</div>
            <div className="text-yellow-400">Season VI</div>

            <div className="text-gray-300">{t.server.experience}</div>
            <div className="text-yellow-400">20x</div>

            <div className="text-gray-300">{t.server.drop}</div>
            <div className="text-yellow-400">30% ~ 50%</div>

            <div className="text-gray-300">{t.server.zendrop}</div>
            <div className="text-yellow-400">50%</div>

            <div className="text-gray-300">{t.server.maxlevel}</div>
            <div className="text-yellow-400">400</div>

            <div className="text-gray-300">{t.server.pointsperreset}</div>
            <div className="text-yellow-400">1000</div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
            <div className="w-6 h-6 bg-orange-400 rounded-sm"></div>
            <div className="w-6 h-6 bg-orange-300 rounded-sm"></div>
            <div className="w-6 h-6 bg-orange-200 rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#2a2a3a] to-[#1a1a24] rounded h-[200px] flex items-end justify-end p-4">
        <div className="text-right">
          <h3 className="text-2xl font-bold uppercase">{t.castle.title}</h3>
          <p className="text-sm text-gray-300">{t.castle.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

