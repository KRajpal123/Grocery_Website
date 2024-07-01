import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import BasicCard from "../../../BasicCard";

const AboutFeaturesList = [
  {
    id: 1,
    name: "All Kind Brand",
    pic: "https://img.freepik.com/premium-photo/green-plant-with-soil-human-hand-isolated-white-background_488220-43495.jpg",
    desc: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    id: 2,
    name: "Curated Products",
    pic: "https://t4.ftcdn.net/jpg/05/24/58/55/360_F_524585596_KnVFsye8NFVm1MnKpldUzTr7ka4T1L0S.jpg",
    desc: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    id: 3,
    name: "Pesticide Free Goods",
    pic: "https://static.vecteezy.com/system/resources/previews/021/537/333/original/apple-carrot-fruits-icon-on-transparent-background-outline-apple-carrot-fruits-icon-vector.jpg",
    desc: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
];

const AboutFeatures = () => {
  return (
    <Container maxWidth={"xl"} sx={{ padding: "50px 0px" }}>
      <Typography variant="body1" color={"#a2da1c"} textAlign={"center"}>
        {"//"}FEATURES{"//"}
      </Typography>
      <Typography variant="h4" textAlign={"center"}>
        Why Choose Us
        <div
          style={{
            backgroundColor: "#a2da1c",
            padding: "4px",
            display: "inline-block",
          }}
        ></div>
      </Typography>
      <Grid container spacing={2}>
        {AboutFeaturesList.map((val) => (
          <Grid item xs={4} key={val.id}>
            <BasicCard props={val} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutFeatures;
