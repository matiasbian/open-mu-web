import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Guild } from '@prisma/client'

export async function GET() {
    const guilds = await prisma.guild.findMany({
        take: 30,
        orderBy: {
          Score: "desc"
        },
        where: {}
      })

    const finalMap = await Promise.all(guilds.map(async (g): Promise<Guild> => {

        const tempMyObj = Object.assign({}, g);
        try 
        {
          const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/guilds/`+ g.Name);
          if(result.ok){
              const data: [] = await result.json();
              tempMyObj.Leader = data.find(e => e.guildStatus === 2).Name
              console.log(data)
          }
          else
          {
            console.log('final countdown')
          }
  
        }
        catch (e)
        {
          console.log('errores', e)
        }
        
        return tempMyObj
    }))

    return NextResponse.json(finalMap);
}