import React from 'react'
import useFetch from '../../Hook/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailBannar/DetailBannar'
import Cast from './Cast/Cast'
import VideosSection from './VideosSection/VideosSection'
import Similar from './Carasols/Similar'

export default function Detail() {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  console.log(credits);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id} />


    </div>
  )
}
