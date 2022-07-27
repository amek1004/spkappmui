import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Swissport Korea</title>
      </Head>
      <Typography sx={{ pl: 4, pt: 1 }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet.{" "}
      </Typography>
    </Container>
  );
}
