import { useState, FormEvent } from "react"

interface FormProps {
  onSubmitForm: (city: string) => void
}

function Form({ onSubmitForm }: FormProps) {
  const [city, setCity] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
