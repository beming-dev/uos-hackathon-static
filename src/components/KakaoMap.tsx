import { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  MarkerClusterer,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import LibInfo from "./LibInfo";

// const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=clusterer`;

export interface libData {
  isConnected: boolean;
  latitude: number;
  longitude: number;
  libraryId: number;
  libraryName: string;
}
// interface Props {
//   libInfoPop: boolean;
//   setLibInfoPop: React.Dispatch<React.SetStateAction<boolean>>;
// }

const KakaoMap = () => {
  const customClusterStyles: object[] = [
    {
      width: "50px",
      height: "50px",
      background: "rgba(233, 83, 124, 0.7)", // 파란색 반투명 배경
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "25px", // 원형 클러스터
      fontSize: "14px",
    },
  ];

  const [loading] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string, // 발급 받은 APPKEY
    libraries: ["clusterer"],
  });

  const markerImageSrc = "/icons/marker.png";
  const imageSize = { width: 46, height: 46 };

  const [libData, setLibData] = useState<libData[]>([]);
  const [libInfoPop, setLibInfoPop] = useState(false);
  const [selected, setSelected] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setMapLoaded(true);

      (async () => {
        await fetch("/api/library", {
          method: "GET",
          credentials: "include", // 자격 증명을 포함하여 요청
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setLibData(() => data);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      })();
    }
  }, [loading]);

  const onMarkerClick = (libIndex: number) => {
    setLibInfoPop(true);
    setSelected(libIndex);
  };
  return (
    <>
      {/* <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" async /> */}

      {mapLoaded && (
        <Map
          center={{ lat: 37.64019, lng: 127.0063 }}
          style={{ width: "100%", height: "100%" }}
          level={10} // 지도의 확대 레벨
        >
          <MarkerClusterer
            averageCenter={true}
            minLevel={7}
            styles={customClusterStyles}
          >
            {libData.map((lib, i) => (
              <MapMarker
                key={`${i}`}
                position={{ lat: lib.longitude, lng: lib.latitude }}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                }}
                onClick={() => onMarkerClick(i)}
              />
            ))}
          </MarkerClusterer>
          {libInfoPop && (
            <LibInfo
              libData={libData[selected]}
              setLibInfoPop={setLibInfoPop}
            />
          )}
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
