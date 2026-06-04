<script lang="ts">
  import axios from "axios"
  import Title from "./components/Title.svelte"
  import Form from "./components/Form.svelte"
  import Results from "./components/Results.svelte"
  import Loading from "./components/Loading.svelte"
  import "./assets/base.css"

  interface WeatherResults {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
  }

  let loading = $state<boolean>(false)

  let results = $state<WeatherResults>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  function getWeather(city: string): void {
    loading = true
    axios.get(`https://api.weatherapi.com/v1/current.json?key=f365d4c43c8c4188b6c133550261102&q=${city}&aqi=no`)
    .then(res => {
      results.country = res.data.location.country
      results.cityName = res.data.location.name
      results.temperature = res.data.current.temp_c
      results.conditionText = res.data.current.condition.text
      results.icon = res.data.current.condition.icon
      loading = false
    })
    .catch(() => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }
</script>

<div class="wrapper">
  <div class="container">
    <Title />
    <Form onSubmitForm={getWeather}/>
    {#if !loading}
      <Results {results} />
    {/if}
    {#if loading}
      <Loading />
    {/if}
  </div>
</div>
