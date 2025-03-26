"use client"

import RankingTable from "./ranking-table"

export default function RankingsSection() {
  const playerRankings = [
    { position: 1, name: "LouisMG", class: "BK", reset: 1998, ranking: "novice" as const },
    { position: 2, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const, highlight: true },
    { position: 3, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const },
    { position: 4, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const },
  ]

  const resetRankings = [
    { position: 1, name: "LouisMK", class: "MG", reset: 78, ranking: "apprentice" as const },
    { position: 2, name: "LouisBK", class: "BK", reset: 75, ranking: "apprentice" as const },
    { position: 3, name: "LouisSUM", class: "BK", reset: 55, ranking: "novice" as const },
    { position: 4, name: "LouisDL", class: "FE", reset: 49, ranking: "novice" as const, highlight: true },
  ]

  const eventRankings = [
    { position: 1, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const },
    { position: 2, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const, highlight: true },
    { position: 3, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const },
    { position: 4, name: "LouisMK", class: "BK", reset: 1998, ranking: "novice" as const },
  ]

  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <RankingTable type="players" items={playerRankings} />
      <RankingTable type="resets" items={resetRankings} />
      <RankingTable type="events" items={eventRankings} />
    </section>
  )
}

