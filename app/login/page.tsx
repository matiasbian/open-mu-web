"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

function LoginForm() {
  const { t } = useLanguage()
  const { login, error: authError } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.username) {
      newErrors.username = t.login.errors.usernameRequired
    }

    if (!formData.password) {
      newErrors.password = t.login.errors.passwordRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      try {
        setIsSubmitting(true)
        await login(formData.username, formData.password)
        router.push("/cuenta") // Redirect to account page after successful login
      } catch (err) {
        // Error is handled by the auth context
        console.error("Login failed:", err)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
            <div className="border-b border-[#333] p-4">
              <h1 className="text-2xl uppercase font-semibold tracking-wider text-center">{t.login.title}</h1>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {authError && (
                <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded">{authError}</div>
              )}

              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  {t.login.username}
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 bg-[#1a1a24] border ${errors.username ? "border-red-500" : "border-[#333]"} rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  {t.login.password}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 bg-[#1a1a24] border ${errors.password ? "border-red-500" : "border-[#333]"} rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-4 w-4 bg-[#1a1a24] border-[#333] rounded focus:ring-yellow-500 focus:ring-offset-gray-800"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                    {t.login.rememberMe}
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="text-yellow-400 hover:underline">
                    {t.login.forgotPassword}
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                >
                  {isSubmitting ? t.login.loggingIn : t.login.signIn}
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  {t.login.noAccount}{" "}
                  <Link href="/registro" className="text-yellow-400 hover:underline">
                    {t.login.register}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function LoginPage() {
  return <LoginForm />
}

