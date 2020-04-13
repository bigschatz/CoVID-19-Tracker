import { useState } from 'react'
import useStats from '../utils/useStats'
import { sortStatesByName } from '../utils/sortAndConsolidate'
import StatsByState from './StatsByState'

export default function StateSelector() {
  const url = 'https://covid19.mathdro.id/api/countries/USA/confirmed/'
  const { stats: states, loading, error } = useStats(url)
  const [selectedState, setSelectedState] = useState('California')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const uniqueStateNames = new Set(
    sortStatesByName(states).map(state => state.provinceState)
  )

  return (
    <div>
      <h3>Currently Showing: {selectedState}</h3>
      <select
        style={{
          fontSize: '1rem',
          margin: '5px 0 30px 0',
          height: '2.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f2f2f2',
        }}
        onChange={e => setSelectedState(e.target.value)}
      >
        {[...uniqueStateNames].map(state => (
          <option selected={selectedState === state} key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <StatsByState
        url="https://covid19.mathdro.id/api/countries/USA/confirmed/"
        selectedState={selectedState}
      ></StatsByState>
    </div>
  )
}
