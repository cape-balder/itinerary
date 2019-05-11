export const latLongFinder = (collection) /*(dict, location)*/ => {
  const { from, to, fromTerminal, toTerminal } = collection
  let result
  if (toTerminal !== undefined) {
    result = {
      from: from,
      to: to,
      coordinate: [
        {
          lat: parseFloat(fromTerminal.coordinate.lat),
          lng: parseFloat(fromTerminal.coordinate.lng)
        },
        {
          lat: parseFloat(toTerminal.coordinate.lat),
          lng: parseFloat(toTerminal.coordinate.lng)
        }
      ]
    }
  } else {
    result = {
      from: from,
      coordinate: [
        {
          lat: parseFloat(fromTerminal.coordinate.lat),
          lng: parseFloat(fromTerminal.coordinate.lng)
        }
      ]
    }
  }

  // console.log('latlong map finder >', result)
  return result
}
