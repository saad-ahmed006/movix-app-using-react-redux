import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../Hook/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../Component/LazyLoadImage/Img'
import ContentWrapper from '../../../Component/ContentWrapper/ContentWrapper'


export default function HeroSection() {
  const { url } = useSelector((state) => state.home)
  const navigate = useNavigate()
  const [background, setBackground] = useState("")
  const [query, setquery] = useState("")
  const { data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchqueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className='HeroSection'>
      {!loading && <div className='Image'><Img src={background} /></div>}
      <ContentWrapper>
      {/* <div className='Wrapper'> */}
        <div className='HeroBannarContent'>
          <span className='title'>Welcome.</span>
          <span className='SubTitle'> Millions of movies, Tv shows and people to discover. Explore Now.</span>
        </div>
        <div className='SearchInput'>
          <input type="text" placeholder='Search for a movie or tv Show....' onKeyUp={searchqueryHandler} onChange={(e) => setquery(e.target.value)} />
          <button>Search</button>
        </div>
      {/* </div> */}
      </ContentWrapper>
    </div>
  )
}
