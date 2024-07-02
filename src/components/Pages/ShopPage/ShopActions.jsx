import { Container, Grid, Paper, InputBase, Divider } from "@mui/material";
import SecondaryButton from "../../buttons/SecondaryButton";
import React from "react";
import AutoCompleteHelper from "../../Helpers/AutoCompleteHelper";

const ShopActions = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={3}>
        <Grid item xs={4}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "20vw",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Products"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SecondaryButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              SEARCH
            </SecondaryButton>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <AutoCompleteHelper />
        </Grid>
        <Grid item xs={4}>
            <h2>Showing 10 of 20 Products</h2>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopActions;
