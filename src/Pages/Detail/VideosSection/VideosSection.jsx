import React, { useState } from "react";
import './VideosSectio.scss'
import ContentWrapper from "../../../Component/contentWrapper/ContentWrapper";
import VideoPopup from "../../../Component/VideoPopup/VideoPopup";
import Img from "../../../Component/LazyLoadImage/Img";
import { PlayIcon } from "../DetailBannar/PlayIcon";
const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {
                            data?.results.map((video) => {
                                return <div key={video.id}
                                    className="videoItem"
                                    onClick={() => {
                                        setVideoId(video.key);
                                        setShow(true);
                                    }}>
                                    <div className="videoThumbnail">
                                        <Img
                                            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                        />
                                        <PlayIcon />
                                    </div>
                                    <div className="videoTitle">{video.name}</div>

                                </div>
                            })
                        }
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;