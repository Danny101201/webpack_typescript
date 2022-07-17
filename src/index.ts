import L, { LatLngExpression } from 'leaflet'
import fetchBikeData from './fetchData'
import mapConfig from './map.config'
const {
  taipeiCoor,
  zoom,
  mapType,
  tileLayerUrl
} = mapConfig

var map = L.map(mapType).setView(taipeiCoor, zoom);
L.tileLayer(tileLayerUrl).addTo(map);
fetchBikeData().then(res => {
  console.log(res);
})

