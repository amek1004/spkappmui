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
      <Typography componet="h2" variant="h4" gutterBottom>
        Information
      </Typography>

      <Card elevation={5} sx={{}}>
        <CardHeader
          titleTypographyProps={{ variant: "h6" }}
          title="Welcome Swissport Korea BSA"
        />

        <CardContent>
          <Typography variant="body1" component="p">
            Under Construction. <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" sx={{ ml: 1, mb: 2 }}>
            button
          </Button>
        </CardActions>
      </Card>
    </Box>
  </Container>
);
