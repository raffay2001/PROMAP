import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import Link from "@mui/material/Link"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        PROMAP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        PROMAP is a clothing brand that offers a wide range of products from multiple brands.
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer
