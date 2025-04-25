"use client"

import { Shield } from "lucide-react"

type NewsItemProps = {
  author: string
  date: string
  category: "important" | "maintenance" | "event"
  categoryLabel: string
  content: string
}

export default function NewsItem({ author, date, category, categoryLabel, content }: NewsItemProps) {
  const categoryColors = {
    important: "bg-red-600",
    maintenance: "bg-green-600",
    event: "bg-purple-600",
  }

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#2a2a3a] to-[#1a1a24] rounded flex items-center justify-center">
          <Shield className="h-8 w-8 text-yellow-400" />
        </div>
      </div>
      <div style={{ width: '100%'}}>
        <div className="flex justify-between mb-1">
          <h3 className="text-yellow-400 font-semibold">{author}</h3>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <div className={`inline-block ${categoryColors[category]} text-white text-xs px-2 py-0.5 rounded mb-2`}>
          {categoryLabel}
        </div>
        <p className="text-gray-300 text-sm">{content}</p>
      </div>
    </div>
  )
}

