import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const Address = () => {
  return (
    <Grid container>
      <Box>
        <Typography variant="body2">
          The following addresses will be used on the checkout page by default.
        </Typography>
      </Box>
      <Grid item xs={6}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">Billing Address</Typography>
          <IconButton aria-label="edit" sx={{ mx: 2 }}>
            <EditIcon />
          </IconButton>
        </Box>
        <Typography variant="h6">Alex</Typography>

        <Typography variant="body1">
          1355 Market St, Suite 900 <br />
          San Francisco, CA 94103
        </Typography>
        <Typography variant="body2" component={"p"}>
          Mobile: (123) 456-7890
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">Shipping Address</Typography>
          <IconButton aria-label="edit" sx={{ mx: 2 }}>
            <EditIcon />
          </IconButton>
        </Box>
        <Typography variant="h6">Alex</Typography>

        <Typography variant="body1">
          1355 Market St, Suite 900 <br />
          San Francisco, CA 94103
        </Typography>
        <Typography variant="body2" component={"p"}>
          Mobile: (123) 456-7890
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Address;
