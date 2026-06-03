import { useState } from "react"
import axios from "axios"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import Loading from "./components/Loading"
import "./assets/base.css"

interface WeatherResults {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<WeatherResults>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (city: string) => {
    setLoading(true)
    axios.get(`https://api.weatherapi.com/v1/current.json?key=f365d4c43c8c4188b6c133550261102&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        setLoading(false)
      })
      .catch(() => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form onSubmitForm={getWeather} />
        {!loading && <Results results={results} />}
        {loading && <Loading />}
      </div>
    </div>
  )
}

export default App
