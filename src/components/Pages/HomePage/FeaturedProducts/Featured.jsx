import { Grid, Container, Box } from "@mui/material";
import React from "react";
import ProductCard from "../Products/ProductCard";
import { useSelector } from "react-redux";

const Featured = () => {
  const products = useSelector((state) => state.products.productsList);

  return (
    <Container maxWidth="xl">
      <h1 style={{ fontWeight: "700", fontSize: "39px", textAlign: "center",marginTop:"20px" }}>
        Featured Products
      </h1>
      <Box m={3}>
        <Grid container spacing={3} mt={4}>
          {products.map((p) => {
            return (
              <>
                <Grid item lg={3} sm={6} md={4} xs={12} key={p}>
                  <ProductCard product ={p}/>
                </Grid> 
              </>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Featured;
