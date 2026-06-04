<script lang="ts">
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

  let { results }: Props = $props()
</script>

<h2>気象データ</h2>
{#if results.country}
  <div class="results-country">{results.country}</div>
{/if}
{#if results.cityName}
  <div class="results-city">{results.cityName}</div>
{/if}
{#if results.temperature}
  <div class="results-temp">{results.temperature}</div>
{/if}
{#if results.icon}
  <div class="results-condition">
    <img src={results.icon} alt="icon">
    <span>{results.conditionText}</span>
  </div>
{/if}
