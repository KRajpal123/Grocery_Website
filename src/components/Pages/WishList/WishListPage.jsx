import { Grid } from '@mui/material'
import React from 'react'
import Hero from '../AboutPage/AboutHero/Hero'

const WishListPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero name="Whishlist"/>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  )
}

export default WishListPage