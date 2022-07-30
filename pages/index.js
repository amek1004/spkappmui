import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

export default () => (
  <Container>
    <Box sx={{ pl: 6, pt: 2 }}>
      <Typography componet="h2" variant="h5" gutterBottom>
        Information.
      </Typography>

      <Card elevation={5} sx={{}}>
        <CardHeader
          titleTypographyProps={{ variant: "h7" }}
          title="Welcome to Swissport BSA"
        />

        <CardContent>
          <Typography variant="body2" component="p">
            Under Construction. <br />
            공사중 입니다. <br />
            <br />
            현재 가능한 기능은
            <br />
            여객편 출도착 정보가 가능합니다.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            sx={{ ml: 1, mb: 1 }}
          >
            PUSH
          </Button>
        </CardActions>
      </Card>
    </Box>
  </Container>
);
