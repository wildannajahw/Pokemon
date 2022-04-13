import { Box, CircularProgress } from "@mui/material"
import React from "react"



export default function PageLoader(){
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      margin: 'auto',
      display: 'flex',
    }}>
      <CircularProgress sx={{
          margin: 'auto',
          display: 'flex'
        }}
      />
    </Box>
  )
}