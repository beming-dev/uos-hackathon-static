import Script from "next/script";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=clusterer`;

const KakaoMap = () => {
  const randomPosition = [
    { latitude: 37.64019, longitude: 127.0063 },
    { latitude: 37.454339, longitude: 127.107161 },
    { latitude: 37.605167, longitude: 127.039758 },
    { latitude: 37.60508, longitude: 126.940839 },
    { latitude: 37.566341, longitude: 126.92589 },
    { latitude: 37.685234, longitude: 126.864861 },
    { latitude: 37.63189, longitude: 126.899979 },
    { latitude: 37.548469, longitude: 126.854733 },
    { latitude: 37.509116, longitude: 127.047097 },
    { latitude: 37.513048, longitude: 127.056183 },
    { latitude: 37.67319, longitude: 126.891223 },
    { latitude: 37.622191, longitude: 126.867548 },
    { latitude: 37.675832, longitude: 126.88764 },
    { latitude: 37.657134, longitude: 127.137596 },
    { latitude: 37.63774, longitude: 127.0247 },
    { latitude: 37.58353, longitude: 126.924143 },
    { latitude: 37.696169, longitude: 126.984161 },
    { latitude: 37.671224, longitude: 126.964495 },
    { latitude: 37.607206, longitude: 127.116238 },
    { latitude: 37.466465, longitude: 127.127571 },
    { latitude: 37.591151, longitude: 126.966968 },
    { latitude: 37.599435, longitude: 127.083189 },
    { latitude: 37.684161, longitude: 127.113914 },
    { latitude: 37.539031, longitude: 126.895308 },
    { latitude: 37.571477, longitude: 127.133469 },
    { latitude: 37.496638, longitude: 127.135179 },
    { latitude: 37.505626, longitude: 127.00238 },
    { latitude: 37.573169, longitude: 126.879667 },
    { latitude: 37.643109, longitude: 127.022494 },
    { latitude: 37.685687, longitude: 126.93361 },
    { latitude: 37.626081, longitude: 127.042818 },
    { latitude: 37.550123, longitude: 126.989723 },
    { latitude: 37.460541, longitude: 127.06599 },
    { latitude: 37.609681, longitude: 126.890999 },
    { latitude: 37.5966, longitude: 127.035552 },
    { latitude: 37.588367, longitude: 126.893319 },
    { latitude: 37.673238, longitude: 127.065203 },
    { latitude: 37.603854, longitude: 127.074161 },
    { latitude: 37.57609, longitude: 127.13081 },
    { latitude: 37.526127, longitude: 127.101177 },
    { latitude: 37.578043, longitude: 127.020969 },
    { latitude: 37.604481, longitude: 126.886283 },
    { latitude: 37.511855, longitude: 127.103276 },
    { latitude: 37.669536, longitude: 126.930287 },
    { latitude: 37.606828, longitude: 126.926808 },
    { latitude: 37.525847, longitude: 126.85084 },
    { latitude: 37.64545, longitude: 126.958923 },
    { latitude: 37.587232, longitude: 126.98484 },
    { latitude: 37.611114, longitude: 126.884616 },
    { latitude: 37.696119, longitude: 126.956606 },
    { latitude: 37.455426, longitude: 127.130643 },
    { latitude: 37.60056, longitude: 127.122847 },
    { latitude: 37.542578, longitude: 127.026407 },
    { latitude: 37.594874, longitude: 127.012309 },
    { latitude: 37.511661, longitude: 127.084288 },
    { latitude: 37.668868, longitude: 126.927259 },
    { latitude: 37.587187, longitude: 126.987387 },
    { latitude: 37.695478, longitude: 126.874843 },
    { latitude: 37.542853, longitude: 127.102684 },
    { latitude: 37.473981, longitude: 126.955334 },
    { latitude: 37.537709, longitude: 126.932638 },
    { latitude: 37.45387, longitude: 126.894172 },
    { latitude: 37.462277, longitude: 127.030908 },
    { latitude: 37.525322, longitude: 127.145365 },
    { latitude: 37.613671, longitude: 126.991952 },
    { latitude: 37.507882, longitude: 126.92619 },
    { latitude: 37.463738, longitude: 127.046448 },
    { latitude: 37.629551, longitude: 126.88532 },
    { latitude: 37.46409, longitude: 127.082242 },
    { latitude: 37.467773, longitude: 127.122434 },
    { latitude: 37.481287, longitude: 127.120884 },
    { latitude: 37.477934, longitude: 127.068163 },
    { latitude: 37.576461, longitude: 126.93692 },
    { latitude: 37.539831, longitude: 127.073839 },
    { latitude: 37.452224, longitude: 127.035327 },
    { latitude: 37.670026, longitude: 126.943937 },
    { latitude: 37.689053, longitude: 127.065063 },
    { latitude: 37.620212, longitude: 126.877288 },
    { latitude: 37.558162, longitude: 127.011717 },
    { latitude: 37.609289, longitude: 126.86301 },
    { latitude: 37.678132, longitude: 126.894172 },
    { latitude: 37.484746, longitude: 126.908072 },
    { latitude: 37.484502, longitude: 127.11933 },
    { latitude: 37.457201, longitude: 126.950075 },
    { latitude: 37.593412, longitude: 126.954873 },
    { latitude: 37.547989, longitude: 126.914389 },
    { latitude: 37.479927, longitude: 127.007745 },
    { latitude: 37.588862, longitude: 126.966774 },
    { latitude: 37.670788, longitude: 127.057882 },
    { latitude: 37.669582, longitude: 126.990763 },
    { latitude: 37.60094, longitude: 126.880216 },
    { latitude: 37.629801, longitude: 127.013142 },
    { latitude: 37.651683, longitude: 127.1161 },
    { latitude: 37.484155, longitude: 127.030484 },
    { latitude: 37.666512, longitude: 127.141308 },
    { latitude: 37.623766, longitude: 126.942631 },
    { latitude: 37.665696, longitude: 126.989583 },
    { latitude: 37.507969, longitude: 127.149537 },
    { latitude: 37.464784, longitude: 126.956774 },
    { latitude: 37.623727, longitude: 127.110552 },
  ];

  const customClusterStyles: object[] = [
    {
      width: "50px",
      height: "50px",
      background: "rgba(51, 102, 255, 0.7)", // 파란색 반투명 배경
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "25px", // 원형 클러스터
      fontSize: "14px",
    },
  ];

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 37.64019, lng: 127.0063 }}
        style={{ width: "100%", height: "100%" }}
        level={10} // 지도의 확대 레벨
      >
        <MarkerClusterer
          averageCenter={true}
          minLevel={8}
          styles={customClusterStyles}
        >
          {randomPosition.map((pos) => (
            <MapMarker
              key={`${pos.latitude}-${pos.longitude}`}
              position={{ lat: pos.latitude, lng: pos.longitude }}
            />
          ))}
        </MarkerClusterer>
      </Map>
    </>
  );
};

export default KakaoMap;
