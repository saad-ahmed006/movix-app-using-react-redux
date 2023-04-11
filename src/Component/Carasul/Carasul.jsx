import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../LazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import './Carasul.scss'
export default function Carasul({ data, loading }) {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate()
  const navigation = () => {

  }
  return (

    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return <div className="carouselItem" key={item.id}>
                <div className="posterBlock">
                  <Img src={posterUrl} />
                </div>
              </div>
            })}
          </div>
        ) : ('Loading...')
        }
      </ContentWrapper>
    </div>
  )
}
