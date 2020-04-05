/* eslint-disable react/prop-types */
import styled from 'styled-components'
import useStatsByState from '../utils/useStatsByState'

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`
const StatBlock = styled.div`
  color: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`
export default function StatsByState({ url, selectedState }) {
  const { stats, loading, error } = useStatsByState(url)
  // console.log(stats, loading, error)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const {
    confirmed: { value: cfmd },
    deaths: { value: dths },
    recovered: { value: rcvd },
  } = stats[selectedState]

  return (
    <StatGrid>
      <StatBlock style={{ backgroundColor: '#fd5c63' }}>
        <h3>Confirmed:</h3>
        <span>{cfmd.toLocaleString('en')}</span>
      </StatBlock>
      <StatBlock style={{ backgroundColor: '#555' }}>
        <h3>Deaths:</h3>
        <span>{dths.toLocaleString('en')}</span>
      </StatBlock>
      <StatBlock style={{ backgroundColor: '#2dbe60' }}>
        <h3>Recovered:</h3>
        <span>{rcvd.toLocaleString('en')}</span>
      </StatBlock>
    </StatGrid>
  )
}
