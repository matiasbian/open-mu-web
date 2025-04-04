"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Trophy, Award, Crown, Swords, Shield, Users, Star } from "lucide-react"

type RankingItem = {
  position: number
  name: string
  class: string
  level: number
  reset: number
  guild?: string
  ranking: "novice" | "apprentice" | "expert" | "master"
  highlight?: boolean
}

function RankingsContent() {
  const { t } = useLanguage()

  // Sample data for different ranking categories
  const playerRankings: RankingItem[] = [
    { position: 1, name: "LouisMG", class: "BK", level: 400, reset: 1998, guild: "Warriors", ranking: "master" },
    {
      position: 2,
      name: "LouisMK",
      class: "BK",
      level: 400,
      reset: 1998,
      guild: "Warriors",
      ranking: "master",
      highlight: true,
    },
    { position: 3, name: "DarkLord", class: "DL", level: 400, reset: 1997, guild: "Immortals", ranking: "expert" },
    { position: 4, name: "ShadowELF", class: "ELF", level: 400, reset: 1996, guild: "Hunters", ranking: "expert" },
    { position: 5, name: "MagicWiz", class: "MG", level: 400, reset: 1995, guild: "Wizards", ranking: "expert" },
    { position: 6, name: "DarkKnight", class: "BK", level: 400, reset: 1994, guild: "Warriors", ranking: "expert" },
    {
      position: 7,
      name: "ArcherQueen",
      class: "ELF",
      level: 400,
      reset: 1993,
      guild: "Hunters",
      ranking: "apprentice",
    },
    {
      position: 8,
      name: "SummonerPro",
      class: "SUM",
      level: 400,
      reset: 1992,
      guild: "Wizards",
      ranking: "apprentice",
    },
    {
      position: 9,
      name: "LordMaster",
      class: "DL",
      level: 400,
      reset: 1991,
      guild: "Immortals",
      ranking: "apprentice",
    },
    { position: 10, name: "MagicMaster", class: "MG", level: 400, reset: 1990, guild: "Wizards", ranking: "novice" },
  ]

  const resetRankings: RankingItem[] = [
    { position: 1, name: "ResetKing", class: "MG", level: 400, reset: 78, guild: "Wizards", ranking: "master" },
    { position: 2, name: "ResetQueen", class: "BK", level: 400, reset: 75, guild: "Warriors", ranking: "master" },
    { position: 3, name: "ResetPro", class: "SUM", level: 400, reset: 72, guild: "Wizards", ranking: "expert" },
    {
      position: 4,
      name: "ResetMaster",
      class: "DL",
      level: 400,
      reset: 70,
      guild: "Immortals",
      ranking: "expert",
      highlight: true,
    },
    { position: 5, name: "ResetLord", class: "DL", level: 400, reset: 68, guild: "Immortals", ranking: "expert" },
    { position: 6, name: "ResetWizard", class: "MG", level: 400, reset: 65, guild: "Wizards", ranking: "expert" },
    { position: 7, name: "ResetArcher", class: "ELF", level: 400, reset: 62, guild: "Hunters", ranking: "apprentice" },
    { position: 8, name: "ResetKnight", class: "BK", level: 400, reset: 60, guild: "Warriors", ranking: "apprentice" },
    {
      position: 9,
      name: "ResetSummoner",
      class: "SUM",
      level: 400,
      reset: 58,
      guild: "Wizards",
      ranking: "apprentice",
    },
    { position: 10, name: "ResetElf", class: "ELF", level: 400, reset: 55, guild: "Hunters", ranking: "novice" },
  ]

  const pvpRankings: RankingItem[] = [
    { position: 1, name: "PvPKing", class: "DL", level: 400, reset: 1998, guild: "Immortals", ranking: "master" },
    { position: 2, name: "PvPQueen", class: "ELF", level: 400, reset: 1997, guild: "Hunters", ranking: "master" },
    {
      position: 3,
      name: "PvPMaster",
      class: "BK",
      level: 400,
      reset: 1996,
      guild: "Warriors",
      ranking: "expert",
      highlight: true,
    },
    { position: 4, name: "PvPWizard", class: "MG", level: 400, reset: 1995, guild: "Wizards", ranking: "expert" },
    { position: 5, name: "PvPLord", class: "DL", level: 400, reset: 1994, guild: "Immortals", ranking: "expert" },
    { position: 6, name: "PvPArcher", class: "ELF", level: 400, reset: 1993, guild: "Hunters", ranking: "expert" },
    { position: 7, name: "PvPKnight", class: "BK", level: 400, reset: 1992, guild: "Warriors", ranking: "apprentice" },
    {
      position: 8,
      name: "PvPSummoner",
      class: "SUM",
      level: 400,
      reset: 1991,
      guild: "Wizards",
      ranking: "apprentice",
    },
    { position: 9, name: "PvPElf", class: "ELF", level: 400, reset: 1990, guild: "Hunters", ranking: "apprentice" },
    { position: 10, name: "PvPMage", class: "MG", level: 400, reset: 1989, guild: "Wizards", ranking: "novice" },
  ]

  const guildRankings = [
    { position: 1, name: "Immortals", members: 30, score: 15000, leader: "LordMaster", ranking: "master" },
    { position: 2, name: "Warriors", members: 28, score: 14500, leader: "LouisMG", ranking: "master", highlight: true },
    { position: 3, name: "Wizards", members: 25, score: 14000, leader: "MagicMaster", ranking: "expert" },
    { position: 4, name: "Hunters", members: 22, score: 13500, leader: "ArcherQueen", ranking: "expert" },
    { position: 5, name: "Assassins", members: 20, score: 13000, leader: "ShadowBlade", ranking: "expert" },
    { position: 6, name: "Guardians", members: 18, score: 12500, leader: "ShieldBearer", ranking: "apprentice" },
    { position: 7, name: "Crusaders", members: 15, score: 12000, leader: "HolyCrusader", ranking: "apprentice" },
    { position: 8, name: "Avengers", members: 12, score: 11500, leader: "Avenger", ranking: "novice" },
    { position: 9, name: "Defenders", members: 10, score: 11000, leader: "Defender", ranking: "novice" },
    { position: 10, name: "Protectors", members: 8, score: 10500, leader: "Protector", ranking: "novice" },
  ]

  const rankingColors = {
    novice: "text-green-400",
    apprentice: "text-blue-400",
    expert: "text-purple-400",
    master: "text-orange-400",
  }

  const classIcons = {
    BK: <Shield className="h-4 w-4 text-red-400" />,
    DL: <Crown className="h-4 w-4 text-purple-400" />,
    ELF: <Award className="h-4 w-4 text-green-400" />,
    MG: <Star className="h-4 w-4 text-blue-400" />,
    SUM: <Swords className="h-4 w-4 text-yellow-400" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.rankingsPage.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.rankingsPage.subtitle}</p>
        </div>

        {/* Ranking Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPlayers}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topResets}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Swords className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPvP}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topGuilds}</span>
            </div>
          </button>
        </div>

        {/* Top Players Ranking */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-8">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.rankingsPage.topPlayers}</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 uppercase text-xs border-b border-[#333]">
                  <th className="py-3 px-2 text-left">#</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.name}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.class}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.level}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.reset}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.guild}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.ranking}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                {playerRankings.map((item) => (
                  <tr key={`player-${item.position}`} className={item.highlight ? "bg-[#1a1a24]/50" : ""}>
                    <td className="py-3 px-2 font-semibold">{item.position}</td>
                    <td className={`py-3 px-2 ${item.highlight ? "text-yellow-400 font-semibold" : ""}`}>
                      {item.name}
                    </td>
                    <td className="py-3 px-2 flex items-center">
                      {classIcons[item.class as keyof typeof classIcons]}
                      <span className="ml-1">{item.class}</span>
                    </td>
                    <td className="py-3 px-2">{item.level}</td>
                    <td className="py-3 px-2 text-yellow-400">{item.reset}</td>
                    <td className="py-3 px-2">{item.guild}</td>
                    <td className={`py-3 px-2 ${rankingColors[item.ranking]}`}>
                      {t.rankingsPage.rankings[item.ranking]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Resets Ranking */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-8">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Award className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.rankingsPage.topResets}</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 uppercase text-xs border-b border-[#333]">
                  <th className="py-3 px-2 text-left">#</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.name}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.class}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.level}</th>
                  <th className="py-3 px-2 text-left">MR</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.guild}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.ranking}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                {resetRankings.map((item) => (
                  <tr key={`reset-${item.position}`} className={item.highlight ? "bg-[#1a1a24]/50" : ""}>
                    <td className="py-3 px-2 font-semibold">{item.position}</td>
                    <td className={`py-3 px-2 ${item.highlight ? "text-yellow-400 font-semibold" : ""}`}>
                      {item.name}
                    </td>
                    <td className="py-3 px-2 flex items-center">
                      {classIcons[item.class as keyof typeof classIcons]}
                      <span className="ml-1">{item.class}</span>
                    </td>
                    <td className="py-3 px-2">{item.level}</td>
                    <td className="py-3 px-2 text-yellow-400">{item.reset}</td>
                    <td className="py-3 px-2">{item.guild}</td>
                    <td className={`py-3 px-2 ${rankingColors[item.ranking]}`}>
                      {t.rankingsPage.rankings[item.ranking]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top PvP Ranking */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-8">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Swords className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.rankingsPage.topPvP}</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 uppercase text-xs border-b border-[#333]">
                  <th className="py-3 px-2 text-left">#</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.name}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.class}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.level}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.reset}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.guild}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.ranking}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                {pvpRankings.map((item) => (
                  <tr key={`pvp-${item.position}`} className={item.highlight ? "bg-[#1a1a24]/50" : ""}>
                    <td className="py-3 px-2 font-semibold">{item.position}</td>
                    <td className={`py-3 px-2 ${item.highlight ? "text-yellow-400 font-semibold" : ""}`}>
                      {item.name}
                    </td>
                    <td className="py-3 px-2 flex items-center">
                      {classIcons[item.class as keyof typeof classIcons]}
                      <span className="ml-1">{item.class}</span>
                    </td>
                    <td className="py-3 px-2">{item.level}</td>
                    <td className="py-3 px-2 text-yellow-400">{item.reset}</td>
                    <td className="py-3 px-2">{item.guild}</td>
                    <td className={`py-3 px-2 ${rankingColors[item.ranking]}`}>
                      {t.rankingsPage.rankings[item.ranking]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Guilds Ranking */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Users className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.rankingsPage.topGuilds}</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 uppercase text-xs border-b border-[#333]">
                  <th className="py-3 px-2 text-left">#</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.guildName}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.members}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.score}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.leader}</th>
                  <th className="py-3 px-2 text-left">{t.rankingsPage.ranking}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                {guildRankings.map((item) => (
                  <tr key={`guild-${item.position}`} className={item.highlight ? "bg-[#1a1a24]/50" : ""}>
                    <td className="py-3 px-2 font-semibold">{item.position}</td>
                    <td className={`py-3 px-2 ${item.highlight ? "text-yellow-400 font-semibold" : ""}`}>
                      {item.name}
                    </td>
                    <td className="py-3 px-2">{item.members}</td>
                    <td className="py-3 px-2 text-yellow-400">{item.score}</td>
                    <td className="py-3 px-2">{item.leader}</td>
                    <td className={`py-3 px-2 ${rankingColors[item.ranking as keyof typeof rankingColors]}`}>
                      {t.rankingsPage.rankings[item.ranking as keyof typeof t.rankingsPage.rankings]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function RankingsPage() {
  return (
    <LanguageProvider>
      <RankingsContent />
    </LanguageProvider>
  )
}

