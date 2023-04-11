import React, { useState } from 'react'
import '../Home.scss'
import SwitchTabs from '../../../Component/SwitchTabs/SwitchTabs'
import useFetch from '../../../Hook/useFetch'
import Carasul from '../../../Component/Carasul/Carasul'
import ContentWrapper from '../../../Component/contentWrapper/ContentWrapper'
export default function Trending() {
    const [endpoint, setEndpoint] = useState("day")
    const { data, loading } = useFetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab) => {
        setEndpoint(tab === 'Day' ? 'day' : 'week')
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <ContentWrapper>
                <Carasul data={data?.results} loading={loading}/>
            </ContentWrapper>
        
         
        </div>)
}
