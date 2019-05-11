import { namespaceConfig, dynamicPropertyConfig } from 'fast-redux'
const { action } = namespaceConfig('locations', {})

export const updateMaker = action('update/marker', (state, data) => {
  console.log('UPDATED >>>>')
  return { ...state, ...{ marker: { ...state.marker, ...data } } }
})
