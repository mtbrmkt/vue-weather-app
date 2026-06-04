<script lang="ts">
  interface Props {
    onSubmitForm: (city: string) => void
  }

  let { onSubmitForm }: Props = $props()

  let city = $state<string>("")

  function submitForm(e: SubmitEvent): void {
    e.preventDefault()
    onSubmitForm(city)
    city = ""
  }
</script>

<form onsubmit={submitForm}>
  <input type="text" bind:value={city} placeholder="都市名を英語で入力">
  <button type="submit">Get Weather</button>
</form>
