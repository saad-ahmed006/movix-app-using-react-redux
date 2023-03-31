import { useEffect } from "react"
import { fetchDataFromApi } from "./Utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./Store/HomeSlice"
import { BrowserRouter as Router ,Routes,Route,} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Explore from "./Pages/Explore/Explore"
import Error from "./Pages/Error/Error"
import Detail from "./Pages/Detail/Detail"
import SearchResult from "./Pages/SearchResult/SearchResult"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer";

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  useEffect(() => {
    ApiTesting()
  }, [])

  const ApiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <>
      <h1>This is react js project </h1>
      <Router>
        <Header/>
        <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/:mediaType/:id" element={<Detail/>} />
      <Route exact path="/search/:query" element={<SearchResult/>} />
      <Route exact path="/explore/:mediaType" element={<Explore/>} />
      <Route exact path="*" element={<Error/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
