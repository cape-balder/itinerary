export const measure = (from, to) => {
  const lat1 = from.lat,
    lon1 = from.lng,
    lat2 = to.lat,
    lon2 = to.lng
  var R = 6371000 // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1) // deg2rad below
  var dLon = deg2rad(lon2 - lon1)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c // Distance in km
  return Math.floor(d)
}

const deg2rad = deg => {
  return deg * (Math.PI / 180)
}

export const measureTotal = coordinate => {
  let distance = 0
  coordinate.map((point, index) => {
    if (index > 0) {
      const from = coordinate[index - 1]
      const to = point
      distance += measure(from, to)
    }
  })
  return `${Math.round((distance / 1000) * 10) / 10}`
}
