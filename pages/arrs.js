import axios from "axios";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

export default function arrData({ arrLists }) {
  const KE5682 = arrLists.filter(function (arrLists) {
    return arrLists.flightId === "KE5682";
  });
  return (
    <>
      <List>
        {KE5682.map((data) => (
          <ListItem key={data.flightId} sx={{ pl: 3 }}>
            <Box sx={{ display: "inline-flex", ml: 4, mt: 0 }}>
              <Typography
                sx={{ fontSize: 12 }}
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
  console.log(KE5682);
}

const airline = "";

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
    // 20초가 지난 후 접속이 일어나면 파일을 새롭게 생성 (변경 사항이 반영되도록)
  };
}
