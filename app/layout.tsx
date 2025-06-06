import type React from "react"
import type { Metadata } from "next"
import { Cinzel } from "next/font/google"
import "./globals.css"
// Import the AuthProvider
import { AuthProvider } from "@/contexts/auth-context"

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Mu Dinakon",
  description: "Join the best MU Online private server with high rates and regular events!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={cinzel.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'