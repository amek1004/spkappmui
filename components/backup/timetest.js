import axios from "axios";

export default function Arr(props) {
  const { dateTime } = props;
  return (
    <div>
      <h1>Arrival Information</h1>
      <h2>{dateTime}</h2>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://worldtimeapi.org/api/ip");

  return {
    props: {
      dateTime: response.data.datetime,
    },
  };
}
