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
      <select onChange={e => setSelectedState(e.target.value)}>
        {[...uniqueStateNames].map(state => (
          <option selected={selectedState === state} key={state} value={state}>
            {state}
          </option>
        ))}
        <style jsx>{`
          select {
            font-size: 1rem;
            margin: 5px 0 30px 0;
            height: 2.7rem;
            padding: 2rem;
            border-radius: 0.5rem;
            background: #f2f2f2;
          }
          ,
          h3 {
            display: inline-block;
            font-style: Helvetica;
          }
        `}</style>
      </select>
      <StatsByState
        url="https://covid19.mathdro.id/api/countries/USA/confirmed/"
        selectedState={selectedState}
      ></StatsByState>
    </div>
  )
}
