import axios from "axios";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

export default function LO({ arrLists }) {
  return (
    <>
      <List>
        {arrLists.map((data) => (
          <ListItem key={data.flightId} sx={{ pl: 3 }}>
            <Box sx={{ display: "inline-flex", ml: 4, mt: 0 }}>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                Flight : {data.flightId} / Gate : {data.gatenumber} <br />
                ETA : {data.estimatedDateTime} / Carousel : {data.carousel} /
                Status : {data.remark}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const airline = "LO";

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

  return {
    props: {
      arrLists: dataList,
    },
    revalidate: 5,
    // 20?????? ?????? ??? ????????? ???????????? ????????? ????????? ?????? (?????? ????????? ???????????????)
  };
}
