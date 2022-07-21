import axios from "axios";

const Arrs = ({ arrs }) => (
  <>
    <h1>Arrival Information</h1>
    <ul>
      {arrs.map((items) => (
        <li key={items.id}>{id.carousel}</li>
      ))}
    </ul>
  </>
);

Arrs.getInitialProps = async () => {
  const arrs = await axios.get(
    "https://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D&from_time=0000&to_time=2400&airline=LH&lang=K&type=json"
  );
  console.log(arrs);
  return { arrs };
};

export default Arrs;
