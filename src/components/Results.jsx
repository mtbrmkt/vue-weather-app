function Results({ results }) {
  const { country, cityName, temperature, icon, conditionText } = results

  return (
    <>
      <h2>気象データ</h2>
      {country && <div className="results-country">{country}</div>}
      {cityName && <div className="results-city">{cityName}</div>}
      {temperature && <div className="results-temp">{temperature}</div>}
      {icon && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  )
}

export default Results
