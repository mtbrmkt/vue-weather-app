<script>
  import { createEventDispatcher } from 'svelte'

  let city = ""
  const dispatch = createEventDispatcher()

  function submitForm() {
    dispatch('submit-form', city)
    city = ""
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <input type="text" bind:value={city} placeholder="都市名を英語で入力">
  <button type="submit">Get Weather</button>
</form>
