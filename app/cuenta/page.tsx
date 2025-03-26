"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { characterService } from "@/services/api"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Sword, Skull, RotateCcw, Plus, Key, LogOut, User, Users, Award, Crown } from "lucide-react"
import Link from "next/link"

// Types
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
  const { user, logout, loading: authLoading } = useAuth()
  const router = useRouter()

  const [activeTab, setActiveTab] = useState<"characters" | "settings">("characters")
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [showAddStatsModal, setShowAddStatsModal] = useState(false)
  const [showResetConfirmModal, setShowResetConfirmModal] = useState(false)
  const [showPKClearModal, setShowPKClearModal] = useState(false)
  const [showResetStatsModal, setShowResetStatsModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const [statsToAdd, setStatsToAdd] = useState({
    strength: 0,
    agility: 0,
    vitality: 0,
    energy: 0,
  })

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  // Fetch user characters
  useEffect(() => {
    const fetchCharacters = async () => {
      if (!user) return

      try {
        setLoading(true)
        const data = await characterService.getUserCharacters()
        setCharacters(data)
      } catch (err) {
        setError("Failed to load characters")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [user])

  const handleAddStats = (character: Character) => {
    setSelectedCharacter(character)
    setStatsToAdd({
      strength: 0,
      agility: 0,
      vitality: 0,
      energy: 0,
    })
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
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setPasswordError(null)
    setPasswordSuccess(false)
    setShowChangePasswordModal(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  const handleStatChange = (stat: keyof typeof statsToAdd, value: number) => {
    setStatsToAdd((prev) => ({
      ...prev,
      [stat]: Math.max(0, value),
    }))
  }

  const getTotalStatsToAdd = () => {
    return Object.values(statsToAdd).reduce((sum, value) => sum + value, 0)
  }

  const getAvailablePoints = (character: Character | null) => {
    if (!character) return 0
    // This is a simplified calculation - adjust based on your game's mechanics
    return (
      character.level * 5 -
      (character.strength || 0) -
      (character.agility || 0) -
      (character.vitality || 0) -
      (character.energy || 0)
    )
  }

  const submitAddStats = async () => {
    if (!selectedCharacter) return

    try {
      await characterService.addStats(selectedCharacter.id, statsToAdd)
      // Refresh character data
      const updatedCharacters = await characterService.getUserCharacters()
      setCharacters(updatedCharacters)
      setShowAddStatsModal(false)
    } catch (err) {
      console.error("Failed to add stats:", err)
    }
  }

  const submitResetCharacter = async () => {
    if (!selectedCharacter) return

    try {
      await characterService.resetCharacter(selectedCharacter.id)
      // Refresh character data
      const updatedCharacters = await characterService.getUserCharacters()
      setCharacters(updatedCharacters)
      setShowResetConfirmModal(false)
    } catch (err) {
      console.error("Failed to reset character:", err)
    }
  }

  const submitClearPK = async () => {
    if (!selectedCharacter) return

    try {
      await characterService.clearPKStatus(selectedCharacter.id)
      // Refresh character data
      const updatedCharacters = await characterService.getUserCharacters()
      setCharacters(updatedCharacters)
      setShowPKClearModal(false)
    } catch (err) {
      console.error("Failed to clear PK status:", err)
    }
  }

  const submitResetStats = async () => {
    if (!selectedCharacter) return

    try {
      await characterService.resetStats(selectedCharacter.id)
      // Refresh character data
      const updatedCharacters = await characterService.getUserCharacters()
      setCharacters(updatedCharacters)
      setShowResetStatsModal(false)
    } catch (err) {
      console.error("Failed to reset stats:", err)
    }
  }

  const submitChangePassword = async () => {
    setPasswordError(null)

    if (newPassword !== confirmPassword) {
      setPasswordError(t.account.passwordsDoNotMatch)
      return
    }

    if (newPassword.length < 6) {
      setPasswordError(t.account.passwordTooShort)
      return
    }

    try {
      // This endpoint would need to be added to the API service
      await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      })

      setPasswordSuccess(true)
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setShowChangePasswordModal(false)
        setPasswordSuccess(false)
      }, 3000)
    } catch (err) {
      setPasswordError(t.account.passwordChangeFailed)
    }
  }

  const classIcons = {
    BK: <Shield className="h-5 w-5 text-red-400" />,
    DL: <Crown className="h-5 w-5 text-purple-400" />,
    ELF: <Award className="h-5 w-5 text-green-400" />,
    MG: <Sword className="h-5 w-5 text-blue-400" />,
    SUM: <Skull className="h-5 w-5 text-yellow-400" />,
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    )
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
                <h1 className="text-2xl font-bold">{user?.username}</h1>
                <p className="text-gray-400 text-sm">{user?.email}</p>
                <p className="text-gray-400 text-sm">
                  {t.account.lastLogin}: {user?.lastLogin || "N/A"}
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
                onClick={handleLogout}
                className="flex items-center px-4 py-2 rounded-md bg-[#1a1a24] border border-[#333] hover:border-[#444]"
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

              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
                </div>
              ) : error ? (
                <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded mb-6">{error}</div>
              ) : characters.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">{t.account.noCharacters}</p>
                  <Link
                    href="/create-character"
                    className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-2 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                  >
                    {t.account.createCharacter}
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {characters.map((character) => (
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
                                  <span className="ml-2 px-2 py-0.5 bg-red-900/50 text-red-400 text-xs rounded">
                                    PK
                                  </span>
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
                                  <span className="text-white">{character.masterLevel || 0}</span>
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
                              <div className="text-yellow-400">{character.strength || 0}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm">{t.account.agility}</div>
                              <div className="text-yellow-400">{character.agility || 0}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm">{t.account.vitality}</div>
                              <div className="text-yellow-400">{character.vitality || 0}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm">{t.account.energy}</div>
                              <div className="text-yellow-400">{character.energy || 0}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
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
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                      value={statsToAdd.strength}
                      onChange={(e) => handleStatChange("strength", Number.parseInt(e.target.value) || 0)}
                      min={0}
                    />
                    <button
                      className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]"
                      onClick={() => handleStatChange("strength", statsToAdd.strength + 1)}
                    >
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
                      value={statsToAdd.agility}
                      onChange={(e) => handleStatChange("agility", Number.parseInt(e.target.value) || 0)}
                      min={0}
                    />
                    <button
                      className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]"
                      onClick={() => handleStatChange("agility", statsToAdd.agility + 1)}
                    >
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
                      value={statsToAdd.vitality}
                      onChange={(e) => handleStatChange("vitality", Number.parseInt(e.target.value) || 0)}
                      min={0}
                    />
                    <button
                      className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]"
                      onClick={() => handleStatChange("vitality", statsToAdd.vitality + 1)}
                    >
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
                      value={statsToAdd.energy}
                      onChange={(e) => handleStatChange("energy", Number.parseInt(e.target.value) || 0)}
                      min={0}
                    />
                    <button
                      className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 rounded-r-md border-y border-r border-[#A67C52]"
                      onClick={() => handleStatChange("energy", statsToAdd.energy + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#333]">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t.account.availablePoints}:</span>
                    <span className="text-yellow-400">{getAvailablePoints(selectedCharacter)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t.account.pointsToAdd}:</span>
                    <span className="text-yellow-400">{getTotalStatsToAdd()}</span>
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
                <button
                  onClick={submitAddStats}
                  disabled={getTotalStatsToAdd() === 0 || getTotalStatsToAdd() > getAvailablePoints(selectedCharacter)}
                  className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433] disabled:opacity-50"
                >
                  {t.account.saveChanges}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other modals remain the same as in your original code */}
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
                <button
                  onClick={submitResetCharacter}
                  className="px-4 py-2 bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] rounded-md border border-[#A67C52] hover:from-[#9B6A3B] hover:to-[#7B5433]"
                >
                  {t.account.confirmReset}
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

