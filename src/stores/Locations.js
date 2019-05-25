import { namespaceConfig, dynamicPropertyConfig } from 'fast-redux'
const { action } = namespaceConfig('locations', {})

// Chan
// ใช้ fast-redux
// สร้าง action ก่อน
// ตั้งชื่อ update/marker

export const updateMaker = action('update/marker', (state, data) => {
  return { ...state, ...{ marker: { ...state.marker, ...data } } }
})
