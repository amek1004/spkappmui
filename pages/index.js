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
import { Container } from "@mui/system";

export default () => (
  <Container sx={{ pl: 8, pr: 2, mt: 2 }}>
    <Typography componet="h2" variant="h5" gutterBottom>
      Cards
    </Typography>

    <Card elevation={5}>
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
  </Container>
);
