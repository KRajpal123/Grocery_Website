import {
  Container,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import React from "react";
import SecondaryButton from "../../buttons/SecondaryButton";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            Login To Your Account
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container spacing={3} mt={5}>
                <Grid item xs={8}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel>Email*</InputLabel>
                    <OutlinedInput />
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel>Password*</InputLabel>
                    <OutlinedInput />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <SecondaryButton>Login</SecondaryButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              mt={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">DON'T HAVE AN ACCOUNT?</Typography>
              <Typography sx={{ margin: "20px 0px", fontSize: "14px" }}>
                Add items to your wishlistget personalised recommendations check
                out more quickly track your orders register
              </Typography>
              <div>
                <SecondaryButton>CREATE ACCOUNT</SecondaryButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={3}>
          <a href="/"> FORGOTTEN YOUR PASSWORD?</a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
