import * as React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";
import { Grid, Typography } from "@mui/material";

function renderRow(props) {
  // eslint-disable-next-line 
  const { index, style } = props;

  return (
    <Grid
      container
      sx={{
        borderBottom: "1px solid black",
        width: "90%",
        margin: "auto",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={3}>
        <img src="" alt="cart-items" />
        <Typography variant="body2">remove</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1">Title</Typography>
        <Typography variant="body2">qty x price</Typography>
      </Grid>
    </Grid>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 350,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={350}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
