import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function ContactDetails(props) {
  const {
    d: { name, pic, address },
  } = props;
  console.log(props);
  return (
    <Card>
      <Box sx={{ width: "100%",textAlign:"center",margin:"5px 0px" }}> 
        <IconButton sx={{fontSize:"20px"}}>{pic}</IconButton>
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
}
