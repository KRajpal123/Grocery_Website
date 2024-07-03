import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AutoCompleteHelper from "../../Helpers/AutoCompleteHelper";
import BasicTxtArea from "./BasicTxtArea";
import SecondaryButton from "../../buttons/SecondaryButton";

const ContactForm = () => {
  return (
    <Container maxWidth="lg">
      <Paper style={{ margin: "50px 0px" }}>
        <Box sx={{ width: "95%", margin: "auto" }}>
          <Typography variant="h6">Get A Quote</Typography>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <PersonIcon sx={{color:"#699403"}} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon sx={{color:"#699403"}} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <AutoCompleteHelper />
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <PhoneEnabledIcon sx={{color:"#699403"}} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <BasicTxtArea />
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Save my name, email, and website in this browser for the next time I comment."
                />
              </div>
            </Grid>
            <Grid item xs={12} mb={5}>
              <SecondaryButton>GET AN FREE SERVICE</SecondaryButton>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
