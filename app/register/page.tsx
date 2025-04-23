"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { toast } from "react-toastify"

function RegisterForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState<boolean>(false)

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
        try
        {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/account/register`, {
              method: "POST",
              headers : {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({LoginName: formData.username, EMail: formData.email, Password: formData.password, RepeatPassword: formData.confirmPassword})
              }).then( resp => resp.text()).then(text => JSON.parse(text));
              
              if(response.user === null){
                  toast.error(response.message);
              } else {
                  toast.success(response.message);
                  setSuccess(true)
                  setFormData({
                      username: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      acceptTerms: false,
                  });
              }

        }
        catch(error)
        {
            console.log('error al pushera', error)
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
              {success && <p className="text-green-500 text-xs mt-1 mb-1">{t.register.successMessage}</p>}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-6 py-3 rounded-md text-white font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {t.register.createAccount}
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







/* "use client"

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
    const [isDisabled, setIsDisabled] = useState(true);

    //calls the register api
    const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {  
        e.preventDefault();
        if(password != repeatPassword){
            toast.error("The passwords must coincide")
            return;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/account/register`, {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({LoginName: username, EMail: email, Password: password, RepeatPassword: repeatPassword})
        }).then( resp => resp.text()).then(text => JSON.parse(text));
        
        if(response.user === null){
            toast.error(response.message);
        } else {
            toast.success(response.message);
            setEmail("");
            setUsername("");
            setPassword("");
            setRepeatPassword("");
        }
    }

  return (
    <div className="flex items-center flex-col text-center mx-auto mt-10 w-full">
        <h2 className="text-2xl font-semibold text-primary mb-8">Create Account</h2>
        <form className="w-72">
            <input type="text" placeholder="Username" minLength={4} onChange={(e) => setUsername(e.target.value)} value={username}
                className="border-b-2 p-2 invalid:border-red-500  border-slate-400 outline-none bg-inherit text-lg text-center mb-2 text-primary " />
            <input type="email" placeholder="Email" minLength={8} onChange={(e) => setEmail(e.target.value)} value={email}
                className="mt-6 border-b-2 p-2 invalid:border-red-500  border-slate-400 outline-none bg-inherit text-lg text-center mb-2 text-primary" />
            <input type="password" placeholder="Password" minLength={8} onChange={(e) => setPassword(e.target.value)} value={password}
                className="mt-6 border-b-2 p-2 invalid:border-red-500  border-slate-400 outline-none bg-inherit text-lg text-center mb-2 text-primary" />
            <input type="password" placeholder="Repeat Password" minLength={8} onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword}
                className="mt-6 border-b-2 p-2 invalid:border-red-500  border-slate-400 outline-none bg-inherit text-lg text-center mb-8 text-primary" />
            <label htmlFor="terms" className="text-primary inline-block"><input onClick={() => setIsDisabled(!isDisabled)} type="checkbox" id="terms" name="terms" className="w-4 h-4 bg-gray-100 rounded-md focus:ring-blue-400 focus:ring-2"/> Accept 
            <Link href={"/terms-and-conditions"} className="italic text-primary"> Terms and Conditions</Link></label>
            <button disabled={isDisabled} onClick={onSubmit} className="mt-8 bg-secondary/[0.6] disabled:bg-slate-300/[0.9] hover:bg-secondary/[0.9] p-3 rounded-lg text-primary w-44 mx-auto shadow-xl text-xl" >Create Account</button>
        </form>
        
    </div>
  )
} */



