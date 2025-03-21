import React from 'react'
import Image from "next/image"
import img from "@/public/img/img-util.jpg"

export default function Info() {
  return (
    <div className='flex flex-col text-center gap-2 mt-5 px-20 text-primary w-2/3'>
      <Image className='' src={img} alt='img_mu_online' />
      <h1 className='mt-10 font-bold text-3xl text-primary mb-4'>Server specs</h1>
      <p>Season: 6 Episode 3</p>
      <p>
        <span>Experience:</span>  20x
      </p>
      <p>
        <span>Drop Rate Excellent:</span> 50%
      </p>
      <p><span>Drop Rate Zen:</span> 50%</p>
      <p>
        <span>Party Bonus Exp: </span> 25%, 30%, 50%
      </p>
      <p><span>Elf Soldier Buff:</span> Up to level 250.</p>
      <p>Shops for a low exp server.</p>
      <p className='whitespace-normal'>Monetization System: No Web-Shop, no Cash-Shop, only VIP System (without VIP Server) & Web-Credits for Premium Modules.</p>
      <div className='mt-8'>
          <span className='text-xl font-semibold'>MU Introduction</span> <br />
          <br />
          <p className='whitespace-normal'>
            MU Online, produced by Webzen Inc is a full 3D MMORPG which is one of the leading online games developed in Korea.
            MU is a highly involved fantasy RPG based on the legendary Continent of MU.
            MU established a basic frame of various online games and other following games and regarded as a pioneer of 3D MMORPG.
          </p>
      </div>
    </div>
  )
}
