"use client"

import { useState, useEffect } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import { rankingsService } from "@/services/api"
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

type GuildRanking = {
  position: number
  name: string
  members: number
  score: number
  leader: string
  ranking: "novice" | "apprentice" | "expert" | "master"
  highlight?: boolean
}

function RankingsContent() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"players" | "resets" | "pvp" | "guilds">("players")
  const [playerRankings, setPlayerRankings] = useState<RankingItem[]>([])
  const [resetRankings, setResetRankings] = useState<RankingItem[]>([])
  const [pvpRankings, setPvpRankings] = useState<RankingItem[]>([])
  const [guildRankings, setGuildRankings] = useState<GuildRanking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setLoading(true)

        // Fetch all rankings in parallel
        const [players, resets, pvp, guilds] = await Promise.all([
          rankingsService.getTopPlayers(10),
          rankingsService.getTopResets(10),
          rankingsService.getTopPvP(10),
          rankingsService.getTopGuilds(10),
        ])

        setPlayerRankings(players)
        setResetRankings(resets)
        setPvpRankings(pvp)
        setGuildRankings(guilds)
      } catch (err) {
        setError("Failed to load rankings")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRankings()
  }, [])

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
          <button
            onClick={() => setActiveTab("players")}
            className={`bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border ${activeTab === "players" ? "border-yellow-400" : "border-[#333]"} hover:border-yellow-400 transition-colors`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPlayers}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("resets")}
            className={`bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border ${activeTab === "resets" ? "border-yellow-400" : "border-[#333]"} hover:border-yellow-400 transition-colors`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topResets}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("pvp")}
            className={`bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border ${activeTab === "pvp" ? "border-yellow-400" : "border-[#333]"} hover:border-yellow-400 transition-colors`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Swords className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPvP}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("guilds")}
            className={`bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border ${activeTab === "guilds" ? "border-yellow-400" : "border-[#333]"} hover:border-yellow-400 transition-colors`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topGuilds}</span>
            </div>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded mb-6">{error}</div>
        ) : (
          <>
            {/* Top Players Ranking */}
            {activeTab === "players" && (
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
            )}

            {/* Top Resets Ranking */}
            {activeTab === "resets" && (
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
            )}

            {/* Top PvP Ranking */}
            {activeTab === "pvp" && (
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
            )}

            {/* Top Guilds Ranking */}
            {activeTab === "guilds" && (
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
            )}
          </>
        )}
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

