// App.vue

<template>
  <div class="wrapper">
    <div class="container">
      <Title />
      <Form @submit-form="getWeather"/>
      <Results :results="results" v-if="!loading"/>
      <Loading v-if="loading"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from "vue"
  import axios from "axios"
  import Title from "./components/Title.vue"
  import Form from "./components/Form.vue"
  import Results from "./components/Results.vue"
  import Loading from "./components/Loading.vue"
  import "./assets/base.css"

  interface WeatherResults {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
  }

  const loading = ref<boolean>(false)

  const results = reactive<WeatherResults>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (city: string): void => {
    loading.value = true
    axios.get(`https://api.weatherapi.com/v1/current.json?key=f365d4c43c8c4188b6c133550261102&q=${city}&aqi=no`)
    .then(res => {
      results.country = res.data.location.country
      results.cityName = res.data.location.name
      results.temperature = res.data.current.temp_c
      results.conditionText = res.data.current.condition.text
      results.icon = res.data.current.condition.icon
      loading.value = false
    })
    .catch(() => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }
</script>



