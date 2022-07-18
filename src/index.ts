import L, { LatLngExpression, LayerGroup } from 'leaflet'
import fetchBikeData from './fetchData'
import mapConfig from './map.config'
import { districs } from './districtData'
const SelectDistrict = <HTMLSelectElement>(document.querySelector('#select-district'))
districs.forEach(d => {
  const optionTag = document.createElement('option')
  optionTag.setAttribute('value', d)
  optionTag.innerHTML = d
  SelectDistrict?.appendChild(optionTag)
})
let makerLayer: LayerGroup

const {
  taipeiCoor,
  zoom,
  mapType,
  tileLayerUrl
} = mapConfig

var map = L.map(mapType).setView(taipeiCoor, zoom);
L.tileLayer(tileLayerUrl).addTo(map);
let currentDistrict = SelectDistrict.value as districsName
function updateUBikeMap(districs: districsName): void {
  fetchBikeData().then(data => {
    const selectData = data.filter(info => info.regionName === currentDistrict)
    const marker = selectData.map(data => {
      const marker = new L.Marker(data.lanLang)
      marker.bindTooltip(`
      <p>${data.regionName} - ${data.stopName}</p>
      <p>總自行車數 : ${data.totalBikes}</p>
      <p>可用自行車數 : ${data.availableBikes}</p>
      `)
      marker.on('mouseover', () => {
        marker.openTooltip()
      })
      marker.on('mouseleave', () => {
        marker.closeTooltip()
      })
      return marker
    })
    makerLayer = L.layerGroup(marker)
    makerLayer.addTo(map)
  })
}
updateUBikeMap(currentDistrict)
SelectDistrict.addEventListener('change', (e: any) => {
  currentDistrict = e.target.value
  makerLayer.remove()
  updateUBikeMap(currentDistrict)
})



