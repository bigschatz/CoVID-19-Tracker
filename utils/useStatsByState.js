import { useState, useEffect } from 'react'
import { createNewStatesObject } from './sortAndConsolidate'

export default function useStatsByState(url) {
  const [stats, setStats] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    console.log('Mounting or updating')
    async function fetchData() {
      setLoading(true)
      setError()
      console.log('Fetching Data')
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err)
        })
      setStats(createNewStatesObject(data))
      setLoading(false)
    }
    fetchData()
  }, [url])
  return {
    stats,
    loading,
    error,
  }
}
