import type { News } from '@/app/_models/news';
import { prisma } from '@/lib/prisma'
import React from 'react'
import NewsCard from './(components)/NewsCard';
import NewsComplete from '@/app/_models/NewsComplete';
import ChangePageButton from './(components)/ChangePageButton';
import NewsItem from "./news-item"


export default async function News({page} : {page: number}) {
  page = page >= 0 ? page : 0;
  const NEWS_PER_PAGE = 4;
  const SKIP = (page * NEWS_PER_PAGE) || 0; 

  // Primero verificamos si la tabla existe
  const tableExists = await prisma.$queryRaw<{exists: boolean}[]>`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'openMuWeb_News'
    );
  `;

  if (!tableExists[0].exists) {
    console.error('La tabla openMuWeb_News no existe en la base de datos');
    return (
      <div className='px-20 w-full'>
        <h1 className='text-2xl text-primary font-semibold mb-4'>NEWS</h1>
        <hr className='h-[2px] bg-primary/[0.4] mb-6'/>
        <p>No hay noticias disponibles en este momento.</p>
      </div>
    );
  }

  const news = await prisma.$queryRaw<NewsComplete[]>`
    SELECT * FROM "public"."openMuWeb_News"
    ORDER BY "creationDate" DESC
    LIMIT ${NEWS_PER_PAGE}
    OFFSET ${SKIP}
  `;

  return (
    <div className="bg-[#0c0c14]/80 border border-[#333] rounded">
      <div className="border-b border-[#333] p-4">
        <h2 className="text-xl uppercase font-semibold tracking-wider">{"Noticias"}</h2>
      </div>
      <div className="p-4 space-y-4">

      {news.map((n, i) => (
          <NewsItem
          author={n.author}
          date={n.creationDate.toLocaleDateString()}
          category="important"
          categoryLabel="important"
          content={n.body}
          key={i}
        />
        ))}
        
      </div>
    </div>
  )
}
