import axios from "axios";
import { object } from "prop-types";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function arrData({ arrLists }) {
  //const arrs = arrlists;
  //console.log(arrs);
  //const air = arrs[0].airline;
  //console.log(arrLists);

  return (
    <ul>
      {arrLists.map((data) => (
        <li key={data.flightId}>
          <Paper sx={{ pl: 1, mb: 2 }} elevation="0">
            <Typography
              sx={{ fontSize: 13 }}
              color="text.secondary"
              gutterBottom
            >
              Flight : {data.flightId} / Gate : {data.gatenumber} <br />
              ETA : {data.estimatedDateTime} / Carousel : {data.carousel} /
              Status : {data.remark}
            </Typography>
          </Paper>
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </ul>
  );
}

const airline = "EK";

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
    "&" +
    encodeURIComponent("airline") +
    "=" +
    encodeURIComponent(`${airline}`); /**/
  queryParams +=
    "&" + encodeURIComponent("lang") + "=" + encodeURIComponent("E"); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/

  const res = await axios.get(url + queryParams);

  const data = await res.data;
  const datas = data.response.body.items;
  const dataList = datas;
  //const dataLists = dataList.items;
  //const flightids = dataLists.flightId;
  //console.log(dataList);

  return {
    props: {
      arrLists: dataList,
    },
    // revalidate: 5,
    // 20초가 지난 후 접속이 일어나면 파일을 새롭게 생성 (변경 사항이 반영되도록)
  };
}
