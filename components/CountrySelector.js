import { useState } from 'react'
import useStats from '../utils/useStats'
import Stats from './Stats'

export default function CountrySelector() {
  const url = 'https://covid19.mathdro.id/api/countries'
  const { stats: countries, loading, error } = useStats(url)
  const [selectedCountry, setSelectedCountry] = useState('USA')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <div>
      <h3>Currently Showing {selectedCountry}</h3>
      <select
        style={{
          fontSize: '1rem',
          margin: '5px 0 30px 0',
          height: '2.7rem',
          padding: '2rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f2f2f2',
        }}
        onChange={e => {
          setSelectedCountry(e.target.value)
        }}
      >
        {countries.countries.map(country => (
          <option
            selected={selectedCountry === country.iso3}
            key={country.iso3}
            value={country.iso3}
          >
            {country.name}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  )
}
