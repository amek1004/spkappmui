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
        Cards
      </Typography>

      <Card elevation={5} sx={{}}>
        <CardHeader title="Title" />
        <CardContent>
          <Typography variant="body1" component="p">
            Please enter something. <br />
          </Typography>
          <TextField label="content" />
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
