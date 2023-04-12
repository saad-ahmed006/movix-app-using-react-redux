import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}
