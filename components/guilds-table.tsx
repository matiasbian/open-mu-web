"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { getImage } from "@/app/_utils/characterAvatarReturn";

type RankingType = "players" | "resets" | "events"

type RankingItem = {
  position: number
  name: string
  class: string
  reset: number | string
  ranking: "novice" | "apprentice"
  highlight?: boolean
}

type RankingTableProps = {
  type: RankingType
  items: RankingItem[]
}

export default function RankingTable({ type, items }: RankingTableProps) {
  const { t } = useLanguage()

  const titles = {
    players: t.rankings.players,
    resets: t.rankings.resets,
    events: t.rankings.events,
    guilds: t.rankingsPage.topGuilds
  }

  const rankingLabels = {
    novice: t.rankings.novice,
    apprentice: t.rankings.apprentice,
  }

  return (
    <div className="bg-[#0c0c14]/80 border border-[#333] rounded">
      <div className="border-b border-[#333] p-4">
        <h2 className="text-xl uppercase font-semibold tracking-wider text-center">{titles[type]}</h2>
      </div>
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 uppercase text-xs">
              <th className="py-2 text-left">#</th>
              <th className="py-2 text-left">{t.rankingsPage.guildName}</th>
              <th className="py-2 text-left">{t.rankingsPage.score}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#333]">
            {items.map((item, i) => (
              <tr key={`${item.position}-${item.name}`}>
                <td className={`py-3 ${item.highlight ? "text-yellow-400" : ""}`}>{i}</td>
                <td className={`py-3 ${item.highlight ? "text-yellow-400" : ""}`}>{item.Name}</td>
                <td className={`py-3 ${item.highlight ? "text-yellow-400" : ""}`}>{item.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Link
            href="/rankings"
            className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-2 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
          >
            {t.rankings.more}
          </Link>
        </div>
      </div>
    </div>
  )
}

