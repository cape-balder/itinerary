import { namespaceConfig, dynamicPropertyConfig } from 'fast-redux'
const { action } = namespaceConfig('locations', {})

export const updateMaker = action('updateX', (state, data) => {
  console.log('GET LOCATIONS >>>', state)
  return { ...state, ...{ marker: { ...state.marker, ...data } } }
})
