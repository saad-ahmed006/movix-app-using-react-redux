import React, { useState } from 'react'
import '../Home.scss'
import SwitchTabs from '../../../Component/SwitchTabs/SwitchTabs'
import useFetch from '../../../Hook/useFetch'
import Carasul from '../../../Component/Carasul/Carasul'
import ContentWrapper from '../../../Component/contentWrapper/ContentWrapper'
export default function TopRated() {
    const [endpoint, setEndpoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/top_rated`)
    // console.log(data);
    const onTabChange = (tab) => {
        setEndpoint(tab === 'Movies' ? 'movie' : 'tv')
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <ContentWrapper>
                <Carasul data={data?.results} loading={loading} endpoint={endpoint}/>
            </ContentWrapper>


        </div>
    )

}

