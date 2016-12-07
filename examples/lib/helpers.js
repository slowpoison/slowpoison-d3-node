var d3 = require('d3')
const mod = {}

module.exports = mod

// todo: use geoQuantize
// var d3GeoProjection = require('d3-geo-projection')
// mod.geoQuantize = function(d) {
//   d3GeoProjection.geoQuantize(d, 2)
// }

function roundCoords(coordinates, precision) {
    return coordinates.replace(/[0-9]*\.[0-9]*/g, function(x){ return (+x).toFixed(precision)})
}

mod.eachGeoQuantize = function (d) {
  var coords = d3.select(this).attr('d') || ''
  var rounded = roundCoords(coords, 2)
  d3.select(this).attr('d', rounded)
}
