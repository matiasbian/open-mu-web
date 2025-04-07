"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Trophy, Award, Crown, Swords, Shield, Users, Star } from "lucide-react"
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Guild } from "@prisma/client";
import { CharacterRanking } from "@/app/_models/character";
import Image from "next/image"
import { getImage } from "@/app/_utils/characterAvatarReturn";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Character } from "@prisma/client";
import { CharacterOnline } from "@/app/_models/characterOnline"

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
  const [selectedRanking, setSelectedRanking] = useState<string>('topResets')

  const [onlineCharacters, setOnlineCharacters] = useState<CharacterOnline[]>([])
  
      //call the online player api to see how many players there are on
      useEffect(() => {
          const fetchData = async () => {
            try {
              const status = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/status`);
              if(status.ok){
                const serverStatus =  await status.json();
                const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/characters/ranking/online`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(serverStatus)
                })
                const final = await result.json();
                setOnlineCharacters(final)
              } else {
                toast.error("There was a problem trying to find the online users. Try again later.")
              }    
            } catch (e) {
              toast.error("There was a problem! Try again later")
            }
          }
          fetchData()
      },[])

  const [characters, setCharacters]= useState<CharacterRanking[]>([])
  //cals the top players api
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/characters/ranking/reset`);
        const res = await response.json();
        setCharacters(res);
      }catch (e) {
        toast.error("There was a problem! Try again later")
      }
    }
    fetchData();
  }, [])

   const [killers, setKillers] = useState<Character[]>([])
  
    //calls the top killers api
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/characters/ranking/killers`);
          const res = await response.json();
          setKillers(res);
        } catch (e) {
          toast.error("There was a problem! Try again later")
        }
      }
      fetchData();
    }, [])

  const [guilds, setGuilds] = useState<Guild[]>([])
  //calls the tp guild api
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/guilds`);
          const res = await response.json();
          setGuilds(res);
        } catch (e) {
          toast.error("There was a problem! Try again later")
        }
      }
      fetchData();
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
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors" onClick={() => setSelectedRanking('topOnline')}>
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPlayers}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors" onClick={() => setSelectedRanking('topResets')}>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topResets}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors" onClick={() => setSelectedRanking('topPVP')}>
            <div className="flex items-center justify-center space-x-2">
              <Swords className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topPvP}</span>
            </div>
          </button>
          <button className="bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] p-4 rounded-lg border border-[#333] hover:border-yellow-400 transition-colors" onClick={() => setSelectedRanking('topGuilds')}>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{t.rankingsPage.topGuilds}</span>
            </div>
          </button>
        </div>

        {/* Top Players Ranking */}
        {selectedRanking === 'topOnline' && 
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
              {onlineCharacters.map((item, i) => (
                <tr key={`player-${i}`} className={i < 4 ? "bg-[#1a1a24]/50" : ""}>
                  <td className="py-3 px-2 font-semibold">{i + 1}</td>
                  <td className={`py-3 px-2 ${i < 4 ? "text-yellow-400 font-semibold" : ""}`}>
                    {item.Name}
                  </td>
                  <td className="py-3 px-2 flex items-center">
                  <Image className="inline-block mr-2 rounded-lg shadow-lg shadow-black" src={(getImage(item.CharacterClassId) as StaticImport)} width={35} alt="character_avatar"/>
                  </td>
                  <td className="py-3 px-2">{"item.level"}</td>
                  <td className="py-3 px-2 text-yellow-400">{"item.reset"}</td>
                  <td className="py-3 px-2">{"item.guild"}</td>
                  <td className={`py-3 px-2 $"{rankingColors[item.ranking]"}`}>
                    {"t.rankingsPage.rankings[item.ranking]"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        }
        

        {/* Top Resets Ranking */}
        {selectedRanking === 'topResets' &&
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
              {characters.map((item, i) => (
                <tr key={`reset-${i}`} className={i <4 ? "bg-[#1a1a24]/50" : ""}>
                  <td className="py-3 px-2 font-semibold">{i +1}</td>
                  <td className={`py-3 px-2 ${i < 4 ? "text-yellow-400 font-semibold" : ""}`}>
                    {item.Name}
                  </td>
                  <td className="py-3 px-2 flex items-center">
                  <Image className="inline-block mr-2 rounded-lg shadow-lg shadow-black" src={(getImage(item.CharacterClassId) as StaticImport)} width={35} alt="character_avatar"/>
                  </td>
                  <td className="py-3 px-2">{item.lvl}</td>
                  <td className="py-3 px-2 text-yellow-400">{item.resets}</td>
                  <td className="py-3 px-2">{item.guildName}</td>
                  <td className={`py-3 px-2 ${"rankingColors[item.ranking]"}`}>
                    {"t.rankingsPage.rankings[item.ranking]"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        }

        {/* Top PvP Ranking */}
        {selectedRanking === 'topPVP' &&
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
              {killers.map((item, i) => (
                <tr key={`pvp-${i}`} className={i < 4 ? "bg-[#1a1a24]/50" : ""}>
                  <td className="py-3 px-2 font-semibold">{i + 1}</td>
                  <td className={`py-3 px-2 ${i < 4 ? "text-yellow-400 font-semibold" : ""}`}>
                    {item.Name}
                  </td>
                  <td className="py-3 px-2 flex items-center">
                  <Image className="inline-block mr-2 rounded-lg shadow-lg shadow-black" src={(getImage(item.CharacterClassId) as StaticImport)} width={35} alt="character_avatar"/>
                  </td>
                  <td className="py-3 px-2">{"item.Id"}</td>
                  <td className="py-3 px-2 text-yellow-400">{"item.reset"}</td>
                  <td className="py-3 px-2">{"item.guild"}</td>
                  <td className={`py-3 px-2 ${"rankingColors[item.ranking]"}`}>
                    {"t.rankingsPage.rankings[item.ranking]"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        }

        {/* Top Guilds Ranking */}
        {selectedRanking === 'topGuilds' &&
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
              {guilds.map((item, i) => (
                <tr key={`guild-${i}`} className={i < 4 ? "bg-[#1a1a24]/50" : ""}>
                  <td className="py-3 px-2 font-semibold">{i + 1}</td>
                  <td className={`py-3 px-2 ${i < 4 ? "text-yellow-400 font-semibold" : ""}`}>
                    {item.Name}
                  </td>
                  <td className="py-3 px-2">{"item.members"}</td>
                  <td className="py-3 px-2 text-yellow-400">{item.Score}</td>
                  <td className="py-3 px-2">{"item.leader"}</td>
                  <td className={`py-3 px-2 ${"rankingColors[item.ranking as keyof typeof rankingColors]"}`}>
                    {"t.rankingsPage.rankings[item.ranking as keyof typeof t.rankingsPage.rankings]"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        }
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

