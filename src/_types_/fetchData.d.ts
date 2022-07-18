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
type districsName =
  '中正區' |
  '大同區' |
  '中山區' |
  '松山區' |
  '大安區' |
  '萬華區' |
  '信義區' |
  '士林區' |
  '北投區' |
  '內湖區' |
  '南港區' |
  '文山區' |
  '臺大專區'
