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
          <Paper sx={{ p: 2, mb: 2 }} elevation="3">
            <Typography
              sx={{ fontSize: 13 }}
              color="text.secondary"
              gutterBottom
            >
              Flight : {data.flightId} / Status : {data.remark} / Gate :{" "}
              {data.gatenumber} <br />
              ETA : {data.estimatedDateTime} / Carousel : {data.carousel}
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

export async function getStaticProps() {
  const API_KEY =
    "0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D";

  const res = await axios.get(
    `https://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=${API_KEY}&from_time=0000&to_time=2400&airline=LH&lang=K&type=json`
  );

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
    revalidate: 5,
    // 20초가 지난 후 접속이 일어나면 파일을 새롭게 생성 (변경 사항이 반영되도록)
  };
}
