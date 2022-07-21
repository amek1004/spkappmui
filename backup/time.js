import axios from "axios";

export default function time(props) {
  const { dateTime } = props;

  return (
    <div>
      <h1>{dateTime} </h1>
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
