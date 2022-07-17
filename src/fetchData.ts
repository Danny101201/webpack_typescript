import L, { LatLngExpression } from 'leaflet'
let URL = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

const fetchBikeData = async (url = URL) => {
  let data = await fetch(url)
    .then(res => res.json())
    .then(sourceInfo => sourceInfo.map((sourceInfo: SourceUbikeInfo) => ({
      availableBikes: sourceInfo.sbi,
      totalBikes: sourceInfo.tot,
      lanLang: [
        sourceInfo.lat,
        sourceInfo.lng
      ],
      regionName: sourceInfo.sarea,
      stopName: sourceInfo.sna
    }) as UBikeInfo))
  return data as UBikeInfo[]
}
export default fetchBikeData

