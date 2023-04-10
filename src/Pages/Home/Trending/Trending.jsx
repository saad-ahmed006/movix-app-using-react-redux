import React from 'react'
import '../Home.scss'
import ContentWrapper from '../../../Component/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../Component/SwitchTabs/SwitchTabs'
export default function Trending() {
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day","Week"]}/>
            </ContentWrapper>
        </div>)
}
