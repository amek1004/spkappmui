import axios from "axios";
import React from "react";

export default function arrsData(arrlist) {
  const { arrs } = arrlist;

  return (
    <div>
      <h1>Arrival Information</h1>

      <h5>{arrs}</h5>
    </div>
  );
}

export async function getStaticProps() {
  const url =
    "http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp"; /*URL*/
  let queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D"; /*Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("from_time") +
    "=" +
    encodeURIComponent("0000"); /**/
  queryParams +=
    "&" + encodeURIComponent("to_time") + "=" + encodeURIComponent("2400"); /**/
  queryParams +=
    "&" + encodeURIComponent("airport") + "=" + encodeURIComponent(""); /**/
  queryParams +=
    "&" + encodeURIComponent("flight_id") + "=" + encodeURIComponent(""); /**/
  queryParams +=
    "&" + encodeURIComponent("airline") + "=" + encodeURIComponent("LH"); /**/
  queryParams +=
    "&" + encodeURIComponent("lang") + "=" + encodeURIComponent("K"); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/

  const res = await axios.get(url + queryParams);

  const data = await res.data;
  const datas = data.response;
  console.log(datas);

  return {
    props: {
      arrlist: datas,
    },
    revalidate: 5,
    // 20초가 지난 후 접속이 일어나면 파일을 새롭게 생성 (변경 사항이 반영되도록)
  };
}
