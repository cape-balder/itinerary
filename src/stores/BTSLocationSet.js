import { namespaceConfig, dynamicPropertyConfig } from 'fast-redux'
const { action } = namespaceConfig('BTSLocationSet', {})

 // Chan
// ใช้ fast-redux
// สร้าง action ก่อน
// ตั้งชื่อ update/marker

 export const fetchData = action('init/data', (state, data) => {
  return { ...state, ...{ routeData: { ...state.routeData, ...data } } }
})