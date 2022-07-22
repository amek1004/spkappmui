var xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("from_time") + "=" + encodeURIComponent("0000"); /**/
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
  "&" + encodeURIComponent("type") + "=" + encodeURIComponent("xml"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

return {
  xhr,
};
