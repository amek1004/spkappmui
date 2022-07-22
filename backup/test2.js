import Link from "next/link";
import axios from "axios";

export default function Index(props) {
  return (
    <>
      <h2>Hello, Next JS</h2>

      <ul>
        {props.data.map(({ show }) => (
          <p>{show.name}</p>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");

  const data = await res.data;
  return { props: { data } };
}
