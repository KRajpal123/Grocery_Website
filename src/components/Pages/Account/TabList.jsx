import { Container, Grid } from '@mui/material'
import React from 'react'
import VerticalTabs from './Tab'

const TabList = () => {
  return (
    <Container maxWidth="md">
        <Grid container margin={"80px 0px"}>
            <Grid item xs={12}>
                <VerticalTabs />
            </Grid>
        </Grid>
    </Container>
  )
}

export default TabList