import React from 'react'
import useFetch from '../../Hook/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailBannar/DetailBannar'

export default function Detail() {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

    </div>
  )
}
