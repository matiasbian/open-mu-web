"use client"

import type React from "react"

import { useState } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { HelpCircle, AlertTriangle, CheckCircle, Bug, MessageSquare, Clock, User, Mail, FileText } from "lucide-react"

function SupportContent() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    description: "",
    attachments: null,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: e.target.files[0],
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name) {
      newErrors.name = t.support.form.errors.nameRequired
    }

    if (!formData.email) {
      newErrors.email = t.support.form.errors.emailRequired
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.support.form.errors.emailInvalid
    }

    if (!formData.subject) {
      newErrors.subject = t.support.form.errors.subjectRequired
    }

    if (!formData.category) {
      newErrors.category = t.support.form.errors.categoryRequired
    }

    if (!formData.description) {
      newErrors.description = t.support.form.errors.descriptionRequired
    } else if (formData.description.length < 20) {
      newErrors.description = t.support.form.errors.descriptionLength
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      // Here you would typically send the data to your API
      setIsSubmitted(true)

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        description: "",
        attachments: null,
      })
    }
  }

  const faqItems = [
    {
      question: t.support.faq.q1,
      answer: t.support.faq.a1,
    },
    {
      question: t.support.faq.q2,
      answer: t.support.faq.a2,
    },
    {
      question: t.support.faq.q3,
      answer: t.support.faq.a3,
    },
    {
      question: t.support.faq.q4,
      answer: t.support.faq.a4,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.support.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.support.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Support Categories */}
          <div className="lg:col-span-1">
            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mb-8">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider">{t.support.categories.title}</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li className="flex items-start p-3 bg-[#1a1a24] rounded-md">
                    <Bug className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{t.support.categories.bugs}</h3>
                      <p className="text-sm text-gray-400">{t.support.categories.bugsDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start p-3 bg-[#1a1a24] rounded-md">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{t.support.categories.account}</h3>
                      <p className="text-sm text-gray-400">{t.support.categories.accountDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start p-3 bg-[#1a1a24] rounded-md">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{t.support.categories.report}</h3>
                      <p className="text-sm text-gray-400">{t.support.categories.reportDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start p-3 bg-[#1a1a24] rounded-md">
                    <Clock className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{t.support.categories.suggestions}</h3>
                      <p className="text-sm text-gray-400">{t.support.categories.suggestionsDesc}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider">{t.support.response.title}</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-400 mb-4">{t.support.response.description}</p>
                <div className="flex items-center justify-between bg-[#1a1a24] p-3 rounded-md">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm">{t.support.response.time}</span>
                  </div>
                  <span className="text-sm font-semibold">24-48h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider">{t.support.form.title}</h2>
              </div>
              <div className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{t.support.form.success.title}</h3>
                    <p className="text-gray-400 text-center mb-6">{t.support.form.success.message}</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]"
                    >
                      {t.support.form.success.newTicket}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.support.form.name} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-10 px-3 py-2 bg-[#1a1a24] border ${
                              errors.name ? "border-red-500" : "border-[#333]"
                            } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.support.form.email} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-10 px-3 py-2 bg-[#1a1a24] border ${
                              errors.email ? "border-red-500" : "border-[#333]"
                            } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.subject} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-[#1a1a24] border ${
                          errors.subject ? "border-red-500" : "border-[#333]"
                        } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.category} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-[#1a1a24] border ${
                          errors.category ? "border-red-500" : "border-[#333]"
                        } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                      >
                        <option value="">{t.support.form.selectCategory}</option>
                        <option value="bug">{t.support.categories.bugs}</option>
                        <option value="account">{t.support.categories.account}</option>
                        <option value="report">{t.support.categories.report}</option>
                        <option value="suggestion">{t.support.categories.suggestions}</option>
                      </select>
                      {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.description} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-[#1a1a24] border ${
                          errors.description ? "border-red-500" : "border-[#333]"
                        } rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500`}
                        placeholder={t.support.form.descriptionPlaceholder}
                      ></textarea>
                      {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="attachments" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.support.form.attachments}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="file"
                          id="attachments"
                          name="attachments"
                          onChange={handleFileChange}
                          className="w-full pl-10 px-3 py-2 bg-[#1a1a24] border border-[#333] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{t.support.form.attachmentsHelp}</p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        {t.support.form.submit}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
          <div className="border-b border-[#333] p-4">
            <h2 className="text-xl uppercase font-semibold tracking-wider">{t.support.faq.title}</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#333] pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SupportPage() {
  return (
    <LanguageProvider>
      <SupportContent />
    </LanguageProvider>
  )
}

