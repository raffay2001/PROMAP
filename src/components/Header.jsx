import { AppBar, Toolbar, Typography } from '@mui/material'
import React from "react"
import { Link } from 'react-router-dom'
import { StoreMallDirectoryOutlined } from "@mui/icons-material"

const Header = () => {
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StoreMallDirectoryOutlined sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              PROMAP
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
