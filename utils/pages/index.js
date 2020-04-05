import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import StateSelector from '../components/StateSelector'

const moment = require('moment')

export default function indexPage() {
  return (
    <div>
      <h3>Currently Showing: Global</h3>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      <StateSelector></StateSelector>
      <h3>Last Updated: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
    </div>
  )
}