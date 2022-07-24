import axios from "axios";
import { object } from "prop-types";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function arrData({ arrLists }) {
  //const arrs = arrlists;
  //console.log(arrs);
  //const air = arrs[0].airline;
  //console.log(arrLists);

  return (
    <div>
      <ul>
        {arrLists.map((data) => (
          <li key={data.flightId}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <box>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Flight : {data.flightId} / 현재 상태 : {data.remark} / Gate
                    : {data.gatenumber}
                  </Typography>
                  <p>
                    ETA : {data.estimatedDateTime} / Carousel : {data.carousel}
                  </p>
                </box>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
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
  const dataList = datas.body.items;
  //const dataLists = dataList.items;
  //const flightids = dataLists.flightId;
  //console.log(dataList);

  return {
    props: {
      arrLists: dataList,
    },
    revalidate: 5,
    // 20초가 지난 후 접속이 일어나면 파일을 새롭게 생성 (변경 사항이 반영되도록)
  };
}
