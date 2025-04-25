import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatAttribute } from "@prisma/client";
import { equal } from "assert";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        if(!process.env.NEXT_PUBLIC_ZEN_TO_RESET_STATS || process.env.NEXT_PUBLIC_ZEN_TO_RESET_STATS === ""){
            return NextResponse.json({message: "Function disabled"}, {status: 400})
        }

        const { name, clasId, charID } = await req.json() as { name: string, clasId: string, charID: string };

        const zenToReset = +process.env.NEXT_PUBLIC_ZEN_TO_RESET_STATS!;

        //CHECK SESSION
        const session = await getServerSession(authOptions);
        if(session){
            const verifica = await prisma.character.findMany({
                where: {
                    AccountId: session.user.id
                }
            })
            if(verifica && !verifica.map(c => c.Name).includes(name)){
                return NextResponse.json({message: "You can't do this!"}, {status: 400});
            }
        } else {
            return NextResponse.json({message: "You can't do this!"}, {status: 400});
        }

        //check if character is on
        const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/status`);
        if(result.ok){
          const online = await result.json();
          if(online && online.playersList.includes(name)){
              return NextResponse.json({message: "Disconnect from your account!"}, {status: 400})
          };
        } else {
          return NextResponse.json({message: "Couldn't reach the server, try again later"},{status: 500});
        }

        const attributeStatsId = ['123282fe-fead-448e-ad2c-baece939b4b1', '1ae9c014-e3cd-4703-bd05-1b65f5f94ceb', '6ca5c3a6-b109-45a5-87a7-fdcb107b4982', '01b0ef28-f7a0-46b5-97ba-2b624a54cd75', '6af2c9df-3ae4-4721-8462-9a8ec7f56fe4'];
        //find all the stat attribute of a character
        const statsAttributes: StatAttribute[] = await prisma.statAttribute.findMany({
            where: {
                AND: [
                    {
                        DefinitionId: {
                            in: attributeStatsId
                        }
                    },
                    {
                        Character: {
                            Name: name
                        }
                    }
                ]

            }
        });
       
        const totalResetedPoints = statsAttributes.reduce((acc, cur) => acc + (cur.Value - 20), 0);
        const test = await prisma.itemStorage.findMany({})

        const enoughMoney = await prisma.itemStorage.findFirst({
            where: {
                Id: {
                    equals: charID
                },
                Money: {
                    gte: zenToReset
                }
            },
        })
        if(!enoughMoney){
            return NextResponse.json({message: "You don't have enough zen: " + zenToReset}, {status: 400});
        }

        await prisma.$transaction([
            //change the value for every statAttribute found
            prisma.statAttribute.updateMany({
                where: {
                    Character: {
                        Name: name,
                    },
                    AND: [
                        {
                            DefinitionId: {
                                in: attributeStatsId,
                            }
                        },
                    ],
                },
                data: {
                    Value: 20
                }
            }),
            //add the stats points to the free points
            prisma.character.update({
                where: {
                    Name: name,
                },
                data: {
                    LevelUpPoints: {
                        increment: totalResetedPoints
                    }
                }
            }),
            //subtract the zen
            prisma.itemStorage.updateMany({
                where: {
                    Character: {
                        Name: name
                    },
                },
                data: {
                    Money: {
                        decrement: zenToReset
                    }
                }
            })
        ])

    return NextResponse.json({message: "Points were reseted succesffuly"}, {status: 200});
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "There was a problem while reseting the points"}, {status: 400});
    }
}