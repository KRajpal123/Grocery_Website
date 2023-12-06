import { IconButton } from '@mui/material'
import React from 'react'

const PrimaryButton = (props) => {
  return (
    <>
    <IconButton size='large' sx={{':hover':{backgroundColor:"#a2da1c",color:"#fff"}}} {...props} >
        {props.children}
    </IconButton>
    </>
  )
}

export default PrimaryButton