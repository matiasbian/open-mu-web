"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

function RegisterForm() {
  const { t } = useLanguage()
  const { register, error: authError } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
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

    // Username validation
    if (!formData.username) {
      newErrors.username = t.register.errors.usernameRequired
    } else if (formData.username.length < 4) {
      newErrors.username = t.register.errors.usernameLength
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = t.register.errors.emailRequired
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.register.errors.emailInvalid
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = t.register.errors.passwordRequired
    } else if (formData.password.length < 6) {
      newErrors.password = t.register.errors.passwordLength
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t.register.errors.confirmPasswordRequired
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.register.errors.passwordsMatch
    }

    // Terms validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = t.register.errors.termsRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      try {
        setIsSubmitting(true)
        await register(formData.username, formData.email, formData.password)
        router.push("/cuenta") // Redirect to account page after successful registration
      } catch (err) {
        // Error is handled by the auth context
        console.error("Registration failed:", err)
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
              <h1 className="text-2xl uppercase font-semibold tracking-wider text-center">{t.register.title}</h1>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {authError && (
                <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded">{authError}</div>
              )}

              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  {t.register.username}
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  {t.register.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 bg-[#1a1a24] border ${errors.email ? "border-red-500" : "border-[#333]"} rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  {t.register.password}
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

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  {t.register.confirmPassword}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 bg-[#1a1a24] border ${errors.confirmPassword ? "border-red-500" : "border-[#333]"} rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-4 w-4 bg-[#1a1a24] border-[#333] rounded focus:ring-yellow-500 focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className="text-gray-300">
                    {t.register.acceptTerms}{" "}
                    <Link href="/terms" className="text-yellow-400 hover:underline">
                      {t.register.termsLink}
                    </Link>
                  </label>
                  {errors.acceptTerms && <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                >
                  {isSubmitting ? t.register.creating : t.register.createAccount}
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  {t.register.alreadyHaveAccount}{" "}
                  <Link href="/login" className="text-yellow-400 hover:underline">
                    {t.register.login}
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

export default function RegisterPage() {
  return (
    <LanguageProvider>
      <RegisterForm />
    </LanguageProvider>
  )
}

