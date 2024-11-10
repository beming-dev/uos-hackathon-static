import { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  MarkerClusterer,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import LibInfo from "./LibInfo";
import Image from "next/image";
import { pos } from "@/app/map/page";

// const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=clusterer`;

export interface libData {
  isConnected: boolean;
  latitude: number;
  longitude: number;
  libraryId: number;
  libraryName: string;
  homepageUrl: string;
  startTimeDay: string;
  endTimeDay: string;
}
interface Props {
  pos: pos | null;
}

const KakaoMap = ({ pos }: Props) => {
  const [loading] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string, // 발급 받은 APPKEY
    libraries: ["clusterer"],
  });

  const markerImageSrc = "/icons/marker.png";
  const markerImageGraySrc = "/icons/marker-gray.png";
  const imageSize = { width: 46, height: 46 };

  const [libData, setLibData] = useState<libData[]>([]);
  const [libDataForSave, setLibDataForSave] = useState<libData[]>([]);
  const [libInfoPop, setLibInfoPop] = useState(false);
  const [selected, setSelected] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isConnectClicked, setIsConnectClicked] = useState(false);

  const customClusterStyles: object[] = [
    {
      width: "50px",
      height: "50px",
      background: isConnectClicked
        ? "rgba(233, 83, 124, 0.7)"
        : "rgba(160, 160, 160, 0.7)",
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "25px", // 원형 클러스터
      fontSize: "14px",
    },
  ];

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
            setLibData(() => data);
            setLibDataForSave(() => data);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      })();
    }
  }, [loading]);

  useEffect(() => {
    if (isConnectClicked) {
      setLibData(libDataForSave.filter((data) => data.isConnected));
    } else {
      setLibData(libDataForSave);
    }
  }, [isConnectClicked]);

  const onMarkerClick = (libIndex: number) => {
    setLibInfoPop(true);
    setSelected(libIndex);
  };

  const onConnectClick = () => {
    setIsConnectClicked(!isConnectClicked);
  };

  return (
    <>
      {/* <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" async /> */}

      {mapLoaded && (
        <Map
          center={
            pos
              ? { lat: pos.lat, lng: pos.lng }
              : { lat: 37.64019, lng: 127.0063 }
          }
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          level={8} // 지도의 확대 레벨
        >
          {pos && (
            <MapMarker
              position={{ lat: pos.lat, lng: pos.lng }}
              image={{
                src: "/icons/current.png",
                size: {
                  width: 30,
                  height: 30,
                },
              }}
            />
          )}
          <MarkerClusterer
            averageCenter={true}
            minLevel={8}
            styles={customClusterStyles}
          >
            {libData.map((lib, i) => (
              <MapMarker
                key={`${i}`}
                position={{ lat: lib.longitude, lng: lib.latitude }}
                image={{
                  src: lib.isConnected ? markerImageSrc : markerImageGraySrc,
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
          <button
            className="w-[40px] h-[38px] absolute z-20 right-4 top-20"
            onClick={onConnectClick}
          >
            <Image
              src={
                isConnectClicked
                  ? `/icons/connect-pink.png`
                  : `/icons/connect-gray.png`
              }
              alt="connect"
              fill
            ></Image>
          </button>
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
