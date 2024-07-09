import { Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SecondaryButton from '../../buttons/SecondaryButton';

const CartProductsList = () => {
  return (
      <Container>
          <Grid container>
              <Grid item>
                  <IconButton>
                      <CloseIcon />
                  </IconButton>
              </Grid>
              <Grid item xs={2}>
                  <img src="" alt="item-pic" />
              </Grid>
              <Grid item xs={2}>
                  <Typography variant='h6'>Title</Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography variant='h6'>Price</Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography variant='body2'>Availability</Typography>
              </Grid>
              <Grid item xs={2}>
                  <SecondaryButton>
                      Add To Cart
                  </SecondaryButton>
              </Grid>
          </Grid>  
    </Container>
  )
}

export default CartProductsList