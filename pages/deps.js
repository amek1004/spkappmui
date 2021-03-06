import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import React, { useState } from "react";

export default function arrData({ arrLists }) {
  const FltNo = "";
  const LH = arrLists.filter(function (arrLists) {
    return arrLists.airline === "LUFTHANSA GERMAN AIRLINES";
  });
  const LO = arrLists.filter(function (arrLists) {
    return arrLists.airline === "LOT POLISH AIRLINES";
  });
  const QH = arrLists.filter(function (arrLists) {
    return arrLists.flightId === "QH451";
  });
  const AA = arrLists.filter(function (arrLists) {
    return arrLists.airline === "AMERICAN AIRLINES";
  });
  const PR = arrLists.filter(function (arrLists) {
    return arrLists.airline === "PHILIPPINE AIRLINES";
  });
  const TK = arrLists.filter(function (arrLists) {
    return arrLists.airline === "TURKISH AIRLINES";
  });
  const EK = arrLists.filter(function (arrLists) {
    return arrLists.airline === "EMIRATES AIRLINE";
  });

  return (
    <div>
      <List sx={{ pb: 0, ml: 6 }}>
        {LH.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {LO.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {QH.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {AA.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {PR.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {TK.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <List sx={{ pb: 0, ml: 6, pt: 0 }}>
        {EK.map((data) => (
          <ListItem key={data.airline}>
            <Box sx={{ display: "inline-flex" }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Dep : {data.airportCode} / Gate :{" "}
                {data.gatenumber} <br />
                STD : {data.scheduleDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export async function getStaticProps() {
  const url =
    "http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerDeparturesOdp"; /*URL*/
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
  queryParams += queryParams +=
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
    "&" + encodeURIComponent("airline") + "=" + encodeURIComponent(""); /**/
  queryParams +=
    "&" + encodeURIComponent("lang") + "=" + encodeURIComponent("E"); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/

  const res = await axios.get(url + queryParams);

  const data = await res.data;
  const datas = data.response.body.items;
  const dataList = datas;

  return {
    props: {
      arrLists: dataList,
    },

    revalidate: 5,
    // 20?????? ?????? ??? ????????? ???????????? ????????? ????????? ?????? (?????? ????????? ???????????????)
  };
}
