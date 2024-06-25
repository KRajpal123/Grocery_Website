import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import VirtualizedList from "../../VertualizedList";
import SecondaryButton from "../../buttons/SecondaryButton";

const CartSummery = (props) => {
  const { open, toggleDrawer } = props;
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      <Box sx={{ width: 350 }} role="presentation">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "auto",
            height: "100px",
            borderBottom: "1px solid black",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>Cart</div>
          <IconButton
            sx={{
              cursor: "pointer",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "background-color 1s",
              "&:hover": {
                backgroundColor: "#a2da1c",
                color: "white",
              },
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div>
          <VirtualizedList />
        </div>
        <div
          style={{
            borderTop: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            alignItems: "center",
            borderBottom: "1px solid black",
            height:"80px",
            width:"90%"
          }}
        >
          <Typography variant="h6">Subtotal</Typography>
          <Typography variant="body">INR300.00</Typography>
        </div>
        <Grid container sx={{width:"80%",margin:"auto",justifyContent:"center",alignItems:"center",height:"80px"}}>
            <Grid item xs={6}>
                <SecondaryButton>
                   VIEW CART
                </SecondaryButton>
            </Grid>
            <Grid item xs={6}>
                <SecondaryButton>
                    CHECKOUT
                </SecondaryButton>
            </Grid>
        </Grid>
        <Typography component={'div'} variant="body1" align="center">
            Free Shipping On Order Over INR 100!
        </Typography>
      </Box>
    </Drawer>
  );
};

export default CartSummery;
