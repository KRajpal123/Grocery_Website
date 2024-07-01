import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function BasicCard(props) {
  const {
    props: { name, pic, desc },
  } = props;

  return (
    <Card sx={{ minWidth: 275, mt: 5, mb: 5, minHeight: 150 }}>
      <Grid
        container
        spacing={1}
        sx={{ width: "90%", margin: "auto" }}
        alignItems={"center"}
      >
        <Grid item xs={3}>
          <img
            src={pic}
            alt={name}
            style={{ width: "50px", mixBlendMode: "multiply" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6"> {name}</Typography>
        </Grid>
        <Grid item xs={12}>
          {desc}
        </Grid>
      </Grid>
    </Card>
  );
}
