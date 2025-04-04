"use client"

import { useLanguage } from "@/contexts/language-context"
import NewsItem from "./news-item"

export default function NewsSection() {
  const { t } = useLanguage()

  const dummyContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."

  return (
    <div className="bg-[#0c0c14]/80 border border-[#333] rounded">
      <div className="border-b border-[#333] p-4">
        <h2 className="text-xl uppercase font-semibold tracking-wider">{t.news.title}</h2>
      </div>
      <div className="p-4 space-y-4">
        <NewsItem
          author="LuisADM"
          date="22/05/2024"
          category="important"
          categoryLabel={t.news.important}
          content={dummyContent}
        />

        <NewsItem
          author="LuisADM"
          date="18/05/2024"
          category="maintenance"
          categoryLabel={t.news.maintenance}
          content={dummyContent}
        />

        <NewsItem
          author="LuisADM"
          date="27/04/2024"
          category="event"
          categoryLabel={t.news.event}
          content={dummyContent}
        />
      </div>
    </div>
  )
}

