import { useEffect } from "react"
import { fetchDataFromApi } from "./Utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration ,getGenres} from "./Store/HomeSlice"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Explore from "./Pages/Explore/Explore"
import Error from "./Pages/Error/Error"
import Detail from "./Pages/Detail/Detail"
import SearchResult from "./Pages/SearchResult/SearchResult"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchApiconfig()
    genersCall()
  }, [])

  const fetchApiconfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }
  const genersCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const [tvData,movieData] = await Promise.all(promises);
    const resolvedPromises=[...tvData.genres,...movieData.genres]
    // console.log({resolvedPromises});
    
    resolvedPromises?.map((values) => {
      // console.log({values});
      allGenres[values?.id]=values

        })
        // console.log(allGenres);
        dispatch(getGenres(allGenres))
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:mediaType/:id" element={<Detail />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/explore/:mediaType" element={<Explore />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
