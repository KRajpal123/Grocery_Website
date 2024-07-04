import { Grid } from '@mui/material'
import React from 'react'
import Hero from "../AboutPage/AboutHero/Hero"
import TabList from './TabList'

const AccountPage = () => {
  return (
   <Grid container>
    <Grid item xs={12}>
      <Hero name="My Account" />
    </Grid>
<Grid item xs={12}>
<TabList />
</Grid>
   </Grid>
  )
}

export default AccountPage