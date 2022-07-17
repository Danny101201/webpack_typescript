interface SourceUbikeInfo {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: string;
  mday: string;
  lat: number;
  lng: number;
  ar: string;
  sareaen: string;
  snaen: string;
  aren: string;
  bemp: number;
  act: string;
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
}
type UBikeInfo = {
  availableBikes: number
  totalBikes: number
  lanLang: LatLngExpression
  regionName: string
  stopName: string
}