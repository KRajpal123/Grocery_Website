import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const members = [
  {
    id: 1,
    name: "Sachin Kale",
    pic: "https://static.vecteezy.com/system/resources/previews/046/181/480/non_2x/indian-farmer-standing-in-agricultural-field-photo.jpg",
    occ: "director",
    farming: "Seasonal vegetables",
  },
  {
    id: 2,
    name: "Harish Dhandev",
    pic: "https://img.freepik.com/premium-photo/indian-farmer-cotton-farm_54391-224.jpg",
    occ: "director",
    farming: "Aloe vera",
  },
  {
    id: 3,
    name: "	Ram Saran Verma",
    pic: "https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg",
    occ: "founder",
    farming: "Banana, Tomato and Brinjal",
  },
  {
    id: 4,
    name: "Rajiv Bittu",
    pic: "https://img.freepik.com/premium-photo/indian-farmer-working-okra-plant-ladyfinger-farm-field_136354-2653.jpg",
    occ: "founder",
    farming: "	Watermelon and Muskmelon",
  },
];

const socialMedia = [
  {
    id: 1,
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
  },
];

const TeamMembers = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ margin: "50px 0px" }}>
        {members.map((m) => (
          <Grid item xs={3} key={m.id}>
            <Card sx={{ maxWidth: 345, textAlign: "center" }}>
              <CardMedia sx={{ height: 240 }} image={m.pic} title={m.name} />
              <CardContent>
                <Typography variant="body1" color={"#699403"}>
                  {"//"}
                  {m.occ}
                  {"//"}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {m.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {m.farming}
                </Typography>
              </CardContent>
              <div>
                {socialMedia.map((S) => (
                  <IconButton key={S.id}>{S.icon}</IconButton>
                ))}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamMembers;
