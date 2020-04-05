/* eslint-disable react/prop-types */
import styled from 'styled-components'
import useStats from '../utils/useStats'

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`
const StatBlockConfirmed = styled.div`
  background: #fd5c63;
  color: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`
const StatBlockDeaths = styled.div`
  background: #555;
  color: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`
const StatBlockRecovered = styled.div`
  background: #2dbe60;
  color: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url)
  // console.log(stats, loading, error)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <StatGrid>
      <StatBlockConfirmed>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlockConfirmed>
      <StatBlockDeaths>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlockDeaths>
      <StatBlockRecovered>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlockRecovered>
    </StatGrid>
  )
}
