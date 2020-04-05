export const sortStatesByName = arr =>
  arr.sort((a, b) => {
    const stateA = a.provinceState.toUpperCase()
    const stateB = b.provinceState.toUpperCase()
    if (stateA < stateB) return -1
    if (stateA > stateB) return 1
    return 0
  })

/* add up all confirmed, deaths, and recovered values per state counties */
export const sumStateValues = arr => {
  const sortedArray = sortStatesByName(arr)
  const states = sortedArray.reduce((allStates, state) => {
    const stateName = state.provinceState
    if (allStates[stateName]) {
      allStates[stateName].confirmed += state.confirmed
      allStates[stateName].deaths += state.deaths
      allStates[stateName].recovered += state.recovered
    } else {
      allStates[state.provinceState] = state
    }
    return allStates
  }, {})
  return Object.entries(states)
}

export const createNewStatesObject = arr => {
  const states = sumStateValues(arr)
  return states.reduce((newStates, state) => {
    newStates[state[0]] = {
      confirmed: {
        value: state[1].confirmed,
      },
      deaths: {
        value: state[1].deaths,
      },
      recovered: {
        value: state[1].recovered,
      },
    }
    return newStates
  }, {})
}
