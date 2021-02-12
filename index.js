const radius = (value) => {
  return value * Math.PI/180
}

const calcDistance = (latOrigin, longOrigin, latDestiny, longDestiny) => {
  const R = 6278.137 // earth radius

  const dLat = radius( latDestiny - latOrigin )
  const dLong = radius( longDestiny - longOrigin )

  const a = Math.sin(dLat / 2) *
            Math.sin(dLat / 2) +
            Math.cos(radius(latOrigin)) *
            Math.cos(radius(latDestiny)) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c

  return d.toFixed(3)
}

console.log(`The distance between origin and destiny is ${calcDistance(40.75797620310792, -73.98554327234525, 40.68927404858564, -74.04448810651299)}km`)
