"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download, Shield, FileDown, HardDrive } from "lucide-react"

function DownloadsContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0e] to-[#151520] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Download className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.downloads.title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.downloads.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-12">
            {/* Full Client */}
            <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
              <div className="border-b border-[#333] p-4">
                <h2 className="text-xl uppercase font-semibold tracking-wider flex items-center">
                  <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                  {t.downloads.fullClient}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6">{t.downloads.fullClientDesc}</p>

                <div className="space-y-4">
                  <a
                    href="https://www.mediafire.com/file/gfmzsokrz5v1cgk/MuDinakonClient.zip/file"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#1a1a24] hover:bg-[#252535] border border-[#333] rounded-md p-4 transition-colors"
                  >
                    <div className="flex items-center">
                      <FileDown className="h-5 w-5 text-red-500 mr-3" />
                      <div>
                        <div className="font-medium">MediaFire</div>
                        <div className="text-xs text-gray-400">{t.downloads.size}: 2.5 GB</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 py-2 rounded text-white text-sm font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]">
                      {t.downloads.download}
                    </div>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1hAOWz7UrKvSQhD9g92YESFJRvWlEFqgS/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#1a1a24] hover:bg-[#252535] border border-[#333] rounded-md p-4 transition-colors"
                  >
                    <div className="flex items-center">
                      <FileDown className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Google Drive</div>
                        <div className="text-xs text-gray-400">{t.downloads.size}: 2.5 GB</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#8B5A2B] to-[#6B4423] px-4 py-2 rounded text-white text-sm font-semibold uppercase border border-[#A67C52] shadow-md hover:from-[#9B6A3B] hover:to-[#7B5433]">
                      {t.downloads.download}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden">
            <div className="border-b border-[#333] p-4">
              <h2 className="text-xl uppercase font-semibold tracking-wider">{t.downloads.requirements}</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">{t.downloads.minimum}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <span className="font-medium">OS:</span> Windows 7/8/10/11
                    </li>
                    <li>
                      <span className="font-medium">CPU:</span> Intel Core i3 / AMD Ryzen 3
                    </li>
                    <li>
                      <span className="font-medium">RAM:</span> 4 GB
                    </li>
                    <li>
                      <span className="font-medium">GPU:</span> NVIDIA GeForce GTX 550 / AMD Radeon HD 6770
                    </li>
                    <li>
                      <span className="font-medium">DirectX:</span> Version 9.0c
                    </li>
                    <li>
                      <span className="font-medium">{t.downloads.storage}:</span> 5 GB
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">{t.downloads.recommended}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <span className="font-medium">OS:</span> Windows 10/11
                    </li>
                    <li>
                      <span className="font-medium">CPU:</span> Intel Core i5 / AMD Ryzen 5
                    </li>
                    <li>
                      <span className="font-medium">RAM:</span> 8 GB
                    </li>
                    <li>
                      <span className="font-medium">GPU:</span> NVIDIA GeForce GTX 760 / AMD Radeon R9 270X
                    </li>
                    <li>
                      <span className="font-medium">DirectX:</span> Version 11
                    </li>
                    <li>
                      <span className="font-medium">{t.downloads.storage}:</span> 5 GB SSD
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-[#0c0c14]/80 border border-[#333] rounded-lg overflow-hidden mt-6">
            <div className="border-b border-[#333] p-4">
              <h2 className="text-xl uppercase font-semibold tracking-wider">{t.downloads.instructions}</h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>{t.downloads.step1}</li>
                <li>{t.downloads.step2}</li>
                <li>{t.downloads.step3}</li>
                <li>{t.downloads.step4}</li>
                <li>{t.downloads.step5}</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function DownloadsPage() {
  return (
    <LanguageProvider>
      <DownloadsContent />
    </LanguageProvider>
  )
}

