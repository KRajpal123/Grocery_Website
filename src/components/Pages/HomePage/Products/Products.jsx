import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setProductsList } from "../../../../redux/reducers/products";
// import { getProductsDetails } from "../../../../ApiFolder/getProductsApi";
import { getProductsListFromServer } from "../../../../redux/actions/getProductsListFromServer";
import {
  Box,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCard from "./ProductCard";
const Products = () => {
  const [value, setValue] = useState("1");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsList);
  console.log("products", products);

  // difference in handling async / await and createAsyncThunK functionalities :
  // 1. createAsyncThunck automatically handles the three lifeCycles [ pending,fulfilled,rejected]. Normal way it lead more boilerPlate code
  // 2. need to write logic for each stage in the extra reducers feild - createSlice.
  // 3. automatically dispatches the three actions based on promise resolution. Normal way manually dispacthes happn

  // useEffect(() => {
  //  const fetchData =  async () => {
  //   try{
  //     const {err,data} = await getProductsDetails();

  //     if(data){
  //       dispatch(setProductsList(data))
  //     }
  //     if(err){
  //       console.log('err',err);
  //     }
  //   }
  //   catch(err){
  //     console.log('error while getting data')
  //   }
  //  }
  //  fetchData()
  // },[dispatch]);

  useEffect(() => {
    dispatch(getProductsListFromServer());
  }, [dispatch]);


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const tabLabelStyle = {
    fontSize: isSmallScreen ? "14px" : "18px",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter products based on the selected tab
  const filteredProducts = Array.isArray(products)
  ? products.filter((product) => {
    switch (value) {
      case "1":
      case "2":
        return product.category === "jewelery"; // Assuming 'FOOD & DRINKS' is the category for value "1" and "2"
      case "3":
        return product.category === "mens";
      case "4":
        return product.category === "electronics";
      case "5":
        return product.category === "womens";
      default:
        return false;
    }
  }) : [];
  

  return (
    <>
      <Container maxWidth="xl">
        <h1
          style={{ fontWeight: "700", fontSize: "39px", textAlign: "center" }}
        >
          Our Products
        </h1>
        <Box m={3}>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                variant={isSmallScreen ? "scrollable" : "standard"}
                scrollButtons={isSmallScreen ? "auto" : "off"}
              >
                <Tab
                  value="1"
                  label={
                    <Typography style={tabLabelStyle}>FOOD & DRINKS</Typography>
                  }
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ margin: "0px 8px" }}
                />
                <Tab
                  value="2"
                  label={
                    <Typography style={tabLabelStyle}>VEGETABLES</Typography>
                  }
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ margin: "0px 8px" }}
                />
                <Tab
                  value="3"
                  label={
                    <Typography style={tabLabelStyle}>DRIED FOODS</Typography>
                  }
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ margin: "0px 8px" }}
                />
                <Tab
                  value="4"
                  label={
                    <Typography style={tabLabelStyle}>BREAD & CAKE</Typography>
                  }
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{ margin: "0px 8px" }}
                />
                <Tab
                  value="5"
                  label={
                    <Typography style={tabLabelStyle}>FISH & MEAT</Typography>
                  }
                />
                <Divider orientation="vertical" />
              </Tabs>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={4}>
            {
              filteredProducts.map((p) => (
               <Grid item lg={3}>
                 <ProductCard key={p.id} product={p} />
               </Grid>
              ))
            }
            {
              products.map((val) => val.id)
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Products;
