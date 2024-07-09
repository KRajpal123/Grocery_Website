import { Container, Grid, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const CartProductsList = () => {
  return (
      <Container>
          <Grid container>
              <Grid item>
                  <IconButton>
                      <CloseIcon />
                  </IconButton>
              </Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
          </Grid>  
    </Container>
  )
}

export default CartProductsList