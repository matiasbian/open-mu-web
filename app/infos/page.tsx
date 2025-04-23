"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Info, Calendar, Shield, Sword, Scroll, Gem, Zap, Award, Crown, Users, Sparkles } from "lucide-react"

function InfosContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Info className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.infosPage.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.infosPage.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Server Information */}
          <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
            <div className="border-b border-[#333] p-4 flex items-center">
              <Shield className="h-5 w-5 text-yellow-400 mr-2" />
              <h2 className="text-xl uppercase font-semibold tracking-wider">{t.infosPage.serverInfo}</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-300">{t.infosPage.version}</div>
                <div className="text-yellow-400">Season VI</div>

                <div className="text-gray-300">{t.infosPage.experience}</div>
                <div className="text-yellow-400">20x</div>

                <div className="text-gray-300">{t.infosPage.drop}</div>
                <div className="text-yellow-400">30% ~ 50%</div>

                <div className="text-gray-300">{t.infosPage.zen}</div>
                <div className="text-yellow-400">20x</div>

                <div className="text-gray-300">{t.infosPage.maxStats}</div>
                <div className="text-yellow-400">65000</div>

                <div className="text-gray-300">{t.infosPage.maxLevel}</div>
                <div className="text-yellow-400">400</div>

                <div className="text-gray-300">{t.infosPage.maxReset}</div>
                <div className="text-yellow-400">100</div>

                <div className="text-gray-300">{t.infosPage.resetLevel}</div>
                <div className="text-yellow-400">400</div>

                <div className="text-gray-300">{t.infosPage.masterResetLevel}</div>
                <div className="text-yellow-400">400</div>

                <div className="text-gray-300">{t.infosPage.masterResetReq}</div>
                <div className="text-yellow-400">50 Resets</div>
              </div>
            </div>
          </div>

          {/* Server Features */}
          <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
            <div className="border-b border-[#333] p-4 flex items-center">
              <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
              <h2 className="text-xl uppercase font-semibold tracking-wider">{t.infosPage.features}</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Gem className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.customItems}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.balancedClasses}</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.weeklyEvents}</span>
                </li>
                <li className="flex items-start">
                  <Crown className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.vipSystem}</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.guildSystem}</span>
                </li>
                <li className="flex items-start">
                  <Sword className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.pvpSystem}</span>
                </li>
                <li className="flex items-start">
                  <Scroll className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t.infosPage.featuresList.questSystem}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Events Schedule */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-12">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Calendar className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.infosPage.eventsSchedule}</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 uppercase text-xs border-b border-[#333]">
                  <th className="py-3 px-4 text-left">{t.infosPage.day}</th>
                  <th className="py-3 px-4 text-left">{t.infosPage.time}</th>
                  <th className="py-3 px-4 text-left">{t.infosPage.event}</th>
                  <th className="py-3 px-4 text-left">{t.infosPage.rewards}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                <tr>
                  <td className="py-3 px-4">{t.infosPage.monday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Blood Castle</td>
                  <td className="py-3 px-4">{t.infosPage.bloodCastleRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.tuesday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Devil Square</td>
                  <td className="py-3 px-4">{t.infosPage.devilSquareRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.wednesday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Chaos Castle</td>
                  <td className="py-3 px-4">{t.infosPage.chaosCastleRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.thursday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Illusion Temple</td>
                  <td className="py-3 px-4">{t.infosPage.illusionTempleRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.friday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Castle Siege</td>
                  <td className="py-3 px-4">{t.infosPage.castleSiegeRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.saturday}</td>
                  <td className="py-3 px-4">16:00</td>
                  <td className="py-3 px-4 text-yellow-400">Crywolf</td>
                  <td className="py-3 px-4">{t.infosPage.crywolfRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.saturday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Kanturu</td>
                  <td className="py-3 px-4">{t.infosPage.kanturuRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.sunday}</td>
                  <td className="py-3 px-4">16:00</td>
                  <td className="py-3 px-4 text-yellow-400">Raklion</td>
                  <td className="py-3 px-4">{t.infosPage.raklionRewards}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t.infosPage.sunday}</td>
                  <td className="py-3 px-4">20:00</td>
                  <td className="py-3 px-4 text-yellow-400">Fortress</td>
                  <td className="py-3 px-4">{t.infosPage.fortressRewards}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Server Rules */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
          <div className="border-b border-[#333] p-4 flex items-center">
            <Scroll className="h-5 w-5 text-yellow-400 mr-2" />
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.infosPage.serverRules}</h2>
          </div>
          <div className="p-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>{t.infosPage.rules.noHacking}</li>
              <li>{t.infosPage.rules.noInsulting}</li>
              <li>{t.infosPage.rules.noSpamming}</li>
              <li>{t.infosPage.rules.noMultiClient}</li>
              <li>{t.infosPage.rules.noExploiting}</li>
              <li>{t.infosPage.rules.respectGMs}</li>
              <li>{t.infosPage.rules.reportBugs}</li>
              <li>{t.infosPage.rules.accountSharing}</li>
              <li>{t.infosPage.rules.itemSelling}</li>
              <li>{t.infosPage.rules.penalties}</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function InfosPage() {
  return (
    <LanguageProvider>
      <InfosContent />
    </LanguageProvider>
  )
}

