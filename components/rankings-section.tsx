"use client"

import RankingTable from "./ranking-table"
import GuildsTable from "./guilds-table"
import { useEffect, useState } from "react";
import { CharacterRanking } from "@/app/_models/character";
import { toast } from "react-toastify";
import { Guild } from "@prisma/client";

export default function RankingsSection() {
  const [characters, setCharacters]= useState<CharacterRanking[]>([])
  const [guilds, setGuilds] = useState<Guild[]>([])
  const [killers, setKillers] = useState<CharacterRanking[]>([])

  //cals the top players api
    useEffect(() => {
      async function fetchData() {
        try{
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/characters/ranking/reset`);
          const res = await response.json();
          setCharacters(res);
        }catch (e) {
          toast.error("There was a problem! Try again later")
        }
      }
      fetchData();
    }, [])

    //calls the tp guild api
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/guilds`);
        const res = await response.json();
        setGuilds(res);
      } catch (e) {
        toast.error("There was a problem! Try again later")
      }
    }
    fetchData();
  }, [])    

  //calls the top pvp api
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/characters/ranking/killers`);
        const res = await response.json();
        setKillers(res);
      } catch (e) {
        toast.error("There was a problem! Try again later")
      }
    }
    fetchData();
  }, []) 


  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <RankingTable type="players" items={characters} />
      <GuildsTable type="guilds" items={guilds} />
      <RankingTable type="pvp" items={killers} />
    </section>
  )
}

