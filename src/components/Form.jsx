import { useState } from "react"

function Form({ onSubmitForm }) {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitForm(city)
    setCity("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を英語で入力"
      />
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form
