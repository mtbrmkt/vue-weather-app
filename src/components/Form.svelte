<script>
  let { onSubmitForm } = $props()

  let city = $state("")

  function submitForm() {
    onSubmitForm(city)
    city = ""
  }
</script>

<form onsubmit={submitForm}>
  <input type="text" bind:value={city} placeholder="都市名を英語で入力">
  <button type="submit">Get Weather</button>
</form>
