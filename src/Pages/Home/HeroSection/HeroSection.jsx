import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate=useNavigate()
  const [background, setBackground] = useState("")
  const [query, setquery] = useState("")
  const searchqueryHandler=(event)=>{
if (event.key==='Enter' && query.length>0) {
  navigate(`/search/${query}`)
}
  }
  return (
    <div className='HeroSection'>
      <div className='Wrapper'>
        <div className='HeroBannarContent'>
          <span className='title'>Welcome.</span>
          <span className='SubTitle'> Millions of movies, Tv shows and people to discover. Explore Now.</span>
        </div>
        <div className='SearchInput'>
        <input type="text" placeholder='Search for a movie or tv Show....' onKeyUp={searchqueryHandler} onChange={(e)=>setquery(e.target.value)}/>
        <button>Search</button>
        </div>
      </div>
    </div>
  )
}
