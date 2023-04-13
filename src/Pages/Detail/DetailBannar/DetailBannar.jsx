import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PosterFallback from "../../../assets/no-poster.png";
import ContentWrapper from "../../../Component/contentWrapper/ContentWrapper";
import useFetch from "../../../Hook/useFetch";
import Img from "../../../Component/LazyLoadImage/Img";
import Generes from "../../../Component/Generes/Generes";
import CircleRating from "../../../Component/CircleRating/CircleRating";
import { PlayIcon } from "./PlayIcon";
import dayjs from "dayjs";
import "./DetailBannar.scss"

const DetailsBanner = ({ video, crew }) => {
    const { mediaType, id } = useParams()
    const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch(`/${mediaType}/${id}`)
    const _geners = data?.genres?.map((g) => g.id)
    // console.log(data);
    const director = crew?.filter((f) => f.job === 'Director')
    const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <>
                            <div className="backdrop-img">Details Content...
                                <Img src={url.backdrop + data?.backdrop_path}></Img>
                            </div>
                            <div className="opacity-layer"></div>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        {data.poster_path ? (<Img className="posterImg" src={url.backdrop + data.poster_path}></Img>) : (<Img className="posterImg" src={PosterFallback}></Img>)}
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${data.title || data.name} (${dayjs(data.release_date).format('YYYY')})`}
                                        </div>
                                        <div className="subtitle">
                                            {`${data.tagline}`}
                                        </div>
                                        <Generes data={_geners} />
                                        <div className="row">
                                            <CircleRating rating={data.vote_average.toFixed(1)} />
                                            <div className="playbtn">
                                                <PlayIcon />
                                                <span className="text">
                                                    Watch Trailer
                                                </span>
                                            </div>
                                        </div>

                                        <div className="overview">
                                            OverView
                                        </div>
                                        <div className="description">
                                            {`${data.overview}`}
                                        </div>

                                        <div className="info">
                                            {data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Status:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {data.status}
                                                    </span>
                                                </div>
                                            )}
                                            {data.release_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Release Date:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {dayjs(
                                                            data.release_date
                                                        ).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}
                                            {data.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Runtime:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {toHoursAndMinutes(
                                                            data.runtime
                                                        )}
                                                    </span>
                                                </div>
                                            )}

                                        </div>

                                        {director?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Director:{" "}
                                                </span>
                                                <span className="text">
                                                    {director?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {director.length -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                        {writer?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                Writer:{" "}
                                                </span>
                                                <span className="text">
                                                    {writer?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {director.length -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                        {data.created_by?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                Creator:{" "}
                                                </span>
                                                <span className="text">
                                                    {data.created_by?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {data.created_by -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </ContentWrapper>
                        </>
                    )}


                </>

            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
