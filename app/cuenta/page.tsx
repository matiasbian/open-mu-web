"use client"

import { useState } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Sword, Skull, RotateCcw, Plus, Key, LogOut, User, Users, Award, Crown } from "lucide-react"
import {signOut} from "next-auth/react"
import { useRouter } from "next/navigation"

// Mock data for demonstration
type Character = {
  id: number
  name: string
  class: string
  level: number
  resets: number
  masterLevel?: number
  strength?: number
  agility?: number
  vitality?: number
  energy?: number
  isPK?: boolean
}

function AccountContent() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"characters" | "settings">("characters")
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [showAddStatsModal, setShowAddStatsModal] = useState(false)
  const [showResetConfirmModal, setShowResetConfirmModal] = useState(false)
  const [showPKClearModal, setShowPKClearModal] = useState(false)
  const [showResetStatsModal, setShowResetStatsModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  // Mock user data
  const userData = {
    username: "LouisMG",
    email: "louismg@example.com",
    lastLogin: "2024-05-26 14:30",
    characters: [
      {
        id: 1,
        name: "DarkLord",
        class: "DL",
        level: 122,
        resets: 0,
        masterLevel: 0,
        strength: 65000,
        agility: 32000,
        vitality: 20000,
        energy: 45000,
        isPK: true,
      },
      {
        id: 2,
        name: "MatiasBian",
        class: "BK",
        level: 80,
        resets: 0,
        masterLevel: 0,
        strength: 25000,
        agility: 18000,
        vitality: 15000,
        energy: 10000,
        isPK: false,
      },
      {
        id: 3,
        name: "matielfita",
        class: "ELF",
        level: 169,
        resets: 0,
        masterLevel: 0,
        strength: 18000,
        agility: 65000,
        vitality: 22000,
        energy: 30000,
        isPK: false,
      },
    ],
  }

  const classIcons = {
    BK: <Shield className="h-5 w-5 text-red-400" />,
    DL: <Crown className="h-5 w-5 text-purple-400" />,
    ELF: <Award className="h-5 w-5 text-green-400" />,
    MG: <Sword className="h-5 w-5 text-blue-400" />,
    SUM: <Skull className="h-5 w-5 text-yellow-400" />,
  }

  const handleAddStats = (character: Character) => {
    setSelectedCharacter(character)
    setShowAddStatsModal(true)
  }

  const handleReset = (character: Character) => {
    setSelectedCharacter(character)
    setShowResetConfirmModal(true)
  }

  const handlePKClear = (character: Character) => {
    setSelectedCharacter(character)
    setShowPKClearModal(true)
  }

  const handleResetStats = (character: Character) => {
    setSelectedCharacter(character)
    setShowResetStatsModal(true)
  }

  const handleChangePassword = () => {
    setShowChangePasswordModal(true)
  }

  const router = useRouter()

  const onSignOut = () => {
      localStorage.removeItem("role");
      signOut({ callbackUrl: '/'})
    }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Account Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[#333]">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a2a3a] to-[#1a1a24] rounded-full flex items-center justify-center mr-4">
                <User className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userData.username}</h1>
                <p className="text-gray-400 text-sm">{userData.email}</p>
                <p className="text-gray-400 text-sm">
                  {t.account.lastLogin}: {userData.lastLogin}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setActiveTab("characters")}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeTab === "characters"
                    ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] border border-[#A67C52]"
                    : "bg-[#1a1a24] border border-[#333] hover:border-[#444]"
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                {t.account.characters}
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeTab === "settings"
                    ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] border border-[#A67C52]"
                    : "bg-[#1a1a24] border border-[#333] hover:border-[#444]"
                }`}
              >
                <Key className="h-4 w-4 mr-2" />
                {t.account.settings}
              </button>
              <button
                onClick={() => onSignOut()}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeTab === "settings"
                    ? "bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] border border-[#A67C52]"
                    : "bg-[#1a1a24] border border-[#333] hover:border-[#444]"
                }`}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t.account.signOut}
              </button>
            </div>
          </div>

          {/* Characters Tab */}
          {activeTab === "characters" && (
            <div>
              <h2 className="text-xl uppercase font-semibold tracking-wider mb-6">{t.account.myCharacters}</h2>

              <div className="space-y-6">
                {userData.characters.map((character) => (
                  <div key={character.id} className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        {/* Character Info */}
                        <div className="flex mb-4 md:mb-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#2a2a3a] to-[#1a1a24] rounded-lg flex items-center justify-center mr-4">
                            {classIcons[character.class as keyof typeof classIcons] || (
                              <Shield className="h-10 w-10 text-yellow-400" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-yellow-400">{character.name}</h3>
                              {character.isPK && (
                                <span className="ml-2 px-2 py-0.5 bg-red-900/50 text-red-400 text-xs rounded">PK</span>
                              )}
                            </div>
                            <p className="text-gray-300">{character.class}</p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
                              <div className="text-sm">
                                <span className="text-gray-400">{t.account.level}:</span>{" "}
                                <span className="text-white">{character.level}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-400">{t.account.resets}:</span>{" "}
                                <span className="text-white">{character.resets}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-gray-400">{t.account.masterLevel}:</span>{" "}
                                <span className="text-white">{character.masterLevel}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Character Actions */}
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleReset(character)}
                            className="flex items-center px-3 py-2 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded border border-[#333] hover:border-yellow-400 transition-colors"
                          >
                            <RotateCcw className="h-4 w-4 text-yellow-400 mr-2" />
                            <span>{t.account.reset}</span>
                          </button>
                          <button
                            onClick={() => handleAddStats(character)}
                            className="flex items-center px-3 py-2 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded border border-[#333] hover:border-yellow-400 transition-colors"
                          >
                            <Plus className="h-4 w-4 text-yellow-400 mr-2" />
                            <span>{t.account.addStats}</span>
                          </button>
                          <button
                            onClick={() => handlePKClear(character)}
                            className={`flex items-center px-3 py-2 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded border border-[#333] hover:border-yellow-400 transition-colors ${!character.isPK ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={!character.isPK}
                          >
                            <Skull className="h-4 w-4 text-yellow-400 mr-2" />
                            <span>{t.account.pkClear}</span>
                          </button>
                          <button
                            onClick={() => handleResetStats(character)}
                            className="flex items-center px-3 py-2 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded border border-[#333] hover:border-yellow-400 transition-colors"
                          >
                            <RotateCcw className="h-4 w-4 text-yellow-400 mr-2" />
                            <span>{t.account.resetStats}</span>
                          </button>
                        </div>
                      </div>

                      {/* Character Stats */}
                      <div className="mt-6 pt-6 border-t border-[#333]">
                        <h4 className="text-lg font-semibold mb-3">{t.account.stats}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <div className="text-gray-400 text-sm">{t.account.strength}</div>
                            <div className="text-yellow-400">{character.strength}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">{t.account.agility}</div>
                            <div className="text-yellow-400">{character.agility}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">{t.account.vitality}</div>
                            <div className="text-yellow-400">{character.vitality}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">{t.account.energy}</div>
                            <div className="text-yellow-400">{character.energy}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-xl uppercase font-semibold tracking-wider mb-6">{t.account.accountSettings}</h2>

              <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.account.changePassword}</h3>

                  <div className="max-w-md">
                    <div className="mb-4">
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.account.currentPassword}
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.account.newPassword}
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.account.confirmPassword}
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      />
                    </div>

                    <button
                      onClick={handleChangePassword}
                      className="w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                    >
                      {t.account.updatePassword}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Stats Modal */}
      {showAddStatsModal && selectedCharacter && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c14] border border-[#333] rounded-lg max-w-md w-full">
            <div className="border-b border-[#333] p-4">
              <h3 className="text-lg font-semibold">
                {t.account.addStatsFor} {selectedCharacter.name}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">{t.account.strength}</label>
                  <div className="flex">
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      defaultValue={0}
                      min={0}
                    />
                    <button className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">{t.account.agility}</label>
                  <div className="flex">
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      defaultValue={0}
                      min={0}
                    />
                    <button className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">{t.account.vitality}</label>
                  <div className="flex">
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      defaultValue={0}
                      min={0}
                    />
                    <button className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">{t.account.energy}</label>
                  <div className="flex">
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      defaultValue={0}
                      min={0}
                    />
                    <button className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#333]">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t.account.availablePoints}:</span>
                    <span className="text-yellow-400">1000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t.account.pointsToAdd}:</span>
                    <span className="text-yellow-400">0</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddStatsModal(false)}
                  className="px-4 py-2 bg-[#1a1a24] border border-[#333] rounded-md hover:bg-[#252535]"
                >
                  {t.account.cancel}
                </button>
                <button className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]">
                  {t.account.saveChanges}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirm Modal */}
      {showResetConfirmModal && selectedCharacter && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c14] border border-[#333] rounded-lg max-w-md w-full">
            <div className="border-b border-[#333] p-4">
              <h3 className="text-lg font-semibold">{t.account.resetCharacter}</h3>
            </div>
            <div className="p-6">
              <p className="mb-6">{t.account.resetConfirmation.replace("{character}", selectedCharacter.name)}</p>

              <div className="bg-[#1a1a24] border border-[#333] rounded-md p-4 mb-6">
                <h4 className="font-semibold mb-2">{t.account.resetRequirements}:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{t.account.levelRequirement}: 400</li>
                  <li>{t.account.zenRequirement}: 10,000,000</li>
                  <li>{t.account.itemsLost}</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowResetConfirmModal(false)}
                  className="px-4 py-2 bg-[#1a1a24] border border-[#333] rounded-md hover:bg-[#252535]"
                >
                  {t.account.cancel}
                </button>
                <button className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]">
                  {t.account.confirmReset}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PK Clear Modal */}
      {showPKClearModal && selectedCharacter && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c14] border border-[#333] rounded-lg max-w-md w-full">
            <div className="border-b border-[#333] p-4">
              <h3 className="text-lg font-semibold">{t.account.clearPKStatus}</h3>
            </div>
            <div className="p-6">
              <p className="mb-6">{t.account.pkClearConfirmation.replace("{character}", selectedCharacter.name)}</p>

              <div className="bg-[#1a1a24] border border-[#333] rounded-md p-4 mb-6">
                <h4 className="font-semibold mb-2">{t.account.pkClearCost}:</h4>
                <p className="text-yellow-400 font-semibold">5,000,000 Zen</p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowPKClearModal(false)}
                  className="px-4 py-2 bg-[#1a1a24] border border-[#333] rounded-md hover:bg-[#252535]"
                >
                  {t.account.cancel}
                </button>
                <button className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]">
                  {t.account.confirmPKClear}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reset Stats Modal */}
      {showResetStatsModal && selectedCharacter && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c14] border border-[#333] rounded-lg max-w-md w-full">
            <div className="border-b border-[#333] p-4">
              <h3 className="text-lg font-semibold">{t.account.resetStats}</h3>
            </div>
            <div className="p-6">
              <p className="mb-6">{t.account.resetStatsConfirmation.replace("{character}", selectedCharacter.name)}</p>

              <div className="bg-[#1a1a24] border border-[#333] rounded-md p-4 mb-6">
                <h4 className="font-semibold mb-2">{t.account.resetStatsCost}:</h4>
                <p className="text-yellow-400 font-semibold">10,000,000 Zen</p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowResetStatsModal(false)}
                  className="px-4 py-2 bg-[#1a1a24] border border-[#333] rounded-md hover:bg-[#252535]"
                >
                  {t.account.cancel}
                </button>
                <button className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]">
                  {t.account.confirmResetStats}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c14] border border-[#333] rounded-lg max-w-md w-full">
            <div className="border-b border-[#333] p-4">
              <h3 className="text-lg font-semibold">{t.account.changePassword}</h3>
            </div>
            <div className="p-6">
              <p className="mb-6">{t.account.passwordChangeSuccess}</p>

              <div className="flex justify-center">
                <button
                  onClick={() => setShowChangePasswordModal(false)}
                  className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]"
                >
                  {t.account.ok}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default function AccountPage() {
  return (
    <LanguageProvider>
      <AccountContent />
    </LanguageProvider>
  )
}

