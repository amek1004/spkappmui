import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Next Movies</title>
      </Head>
      <Typography> Home </Typography>
    </Container>
  );
}
