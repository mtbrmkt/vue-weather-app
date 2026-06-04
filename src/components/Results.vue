// Results.vue

<template>
    <h2>気象データ</h2>
    <div class="results-country" v-if="country">{{ country }}</div>
    <div class="results-city" v-if="cityName">{{ cityName }}</div>
    <div class="results-temp" v-if="temperature">{{ temperature }}</div>
    <div class="results-condition" v-if="icon">
        <img :src="icon" alt="icon">
        <span>{{ conditionText }}</span>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue"

interface WeatherResults {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

interface Props {
  results: WeatherResults
}

const props = defineProps<Props>()

const { country, cityName, temperature, icon, conditionText } = toRefs(props.results)
</script>