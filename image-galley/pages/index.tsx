import { createNavigationContainerRef } from '@react-navigation/native'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'


function cn(...classes:string[]){
  return classes.filter(Boolean).join(' ');
}


export default function Galley(){
   return(
     <div className='max-w-2xl   mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
       <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
         <BlurImage />
       </div>
     </div>
   )
}


function BlurImage(){

  const[isLoading,setLoading] = useState(true);


  return(
      <a href="#" className='group'>
        <div className='aspect-w-1 aspect-h-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200'>
          <Image alt=""
          src="https://bit.ly/placeholder-img"
          layout='fill' 
          objectFit='cover' 
          className= {cn('group-hover:opacity-75 duration-700  ease-in-out',isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale blur-0 scale-110' )} />
        </div>  
        <h3>Lee Robinson</h3>
        <p>@leeerob</p>
      </a>
  )
}