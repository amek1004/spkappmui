import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Next Movies</title>
      </Head>

      <div className="m">드디어 들어 왔다!!!!! ㅋㅋㅋㅋ</div>
      <style jsx>{`
        .m {
          font-size: 50px;
          color: skyblue;
          padding: 0px;
          text-shadow: 10px;
        }
      `}</style>
    </div>
  );
}
