import { Grid } from '@mui/material'
import React from 'react'
import Hero from "../AboutPage/AboutHero/Hero"
const CheckOut = () => {
  return (
      <Grid container>
          <Grid item xs={12}>
              <Hero />
          </Grid>
          <Grid item xs={12}></Grid>
    </Grid>
  )
}

export default CheckOut