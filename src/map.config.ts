import L, { LatLngExpression } from 'leaflet'

type MapConfirType = {
  taipeiCoor: LatLngExpression,
  zoom: number,
  mapType: string,
  tileLayerUrl: string
}
export default {
  taipeiCoor: [25.0330, 121.5654],
  zoom: 13,
  mapType: 'map',
  tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
} as MapConfirType