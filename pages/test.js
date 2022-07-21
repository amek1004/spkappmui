import axios from "axios";

export default function index({ user }) {
  // 데이터를 불러오지 못했을 시 userName에는 undefined가 저장됩니다.
  const userName = user && user.name;
  return (
    <div>
      <div>{userName}</div>
    </div>
  );
}

// getServerSideProps는 페이지 요청 시마다 호출되며, 별도의 임포트 없이 사용할 수 있습니다.
export const getServerSideProps = async () => {
  try {
    const res = await axios.get(
      "https://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D&from_time=0000&to_time=2400&airline=LH&lang=K&type=json",
      { rejectUnauthorized: false }
    );

    if (res.status === 200) {
      const user = res.data;
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
