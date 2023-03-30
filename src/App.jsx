import { useEffect } from "react"
import { fetchDataFromApi } from "./Utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./Store/HomeSlice"

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
    </>
  )
}

export default App
