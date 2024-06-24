import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function FeedCard() {
  return (
    <>
      <Card sx={{ display: "flex",width:"30vw",margin:"15px",cursor:"pointer" }}>
        <Box>
          <CardMedia
          component={"img"}
          image="https://i.ytimg.com/vi/72-q3bYGUMk/maxresdefault.jpg"
          alt="greenary in nature"
          sx={{width:'250px',height:"100%"}}
           />
        </Box>
        <Box>
          <CardContent>
           <Typography component={'div'} variant="body1">
            Leafy green vegetables are a diverse group of vegetables known for their vibrant green color and abundance of nutrients. 
           </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
