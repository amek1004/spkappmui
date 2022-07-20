import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Next Movies</title>
      </Head>

      <div className="m">여기는 HOME </div>
      <style jsx>{`
        .m {
          font-size: 30px;
          color: rgb(0, 0, 0);
          padding: 0px;
        }
      `}</style>
    </div>
  );
}
