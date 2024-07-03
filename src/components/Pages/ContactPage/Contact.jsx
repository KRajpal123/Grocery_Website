import { Container, Grid } from "@mui/material";
import React from "react";
import Hero from "../AboutPage/AboutHero/Hero";
import ContactDetails from "./ContactDetails";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    id: 1,
    name: "Email Address",
    pic: <DraftsIcon />,
    occ: "director",
    address: "purepantry@info.com",
  },
  {
    id: 2,
    name: "Phone Number",
    pic: <LocalPhoneIcon />,
    occ: "director",
    address: "+91 9988998899",
  },
  {
    id: 3,
    name: "Office Address",
    pic: <PlaceIcon />,
    occ: "founder",
    address: `18/A, New Born Town Hall New York, US`,
  },
];

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero name={"Contact Us"} />
      </Grid>
      <Grid item xs={12} mt={5}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {contactDetails.map((d) => (
              <Grid item xs={4} key={d.id}>
                <ContactDetails d={d} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
