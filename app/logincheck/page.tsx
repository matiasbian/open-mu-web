import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from 'next/navigation'

export default async function Section1() {

  //get session information if there is show UserPanel
  const session = await getServerSession(authOptions);
  const isLogged = session?.user != undefined;

  if (isLogged)
  {
    redirect('/cuenta')
  }
  else
  {
    redirect('/login')
  }


  return (
    <div className="w-full h-[400px] flex mb-10 justify-between">
        
    </div>
  )
}
