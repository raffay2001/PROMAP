import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import CameraIcon from "@mui/icons-material/PhotoCamera"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useParams } from "react-router-dom"
import data from "../data"
import StoreIcon from "@mui/icons-material/Store"
import InventoryIcon from "@mui/icons-material/Inventory"
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const COMPANY_NAMES = {
  "gul-ahmed":
    "Gul Ahmed is known for its high-quality products that are made using state-of-the-art technology and the finest materials. The brand prides itself on its innovative designs and its ability to adapt to changing fashion trends. The company's fabric collection includes a wide variety of materials, including cotton, lawn, silk, chiffon, and velvet, which are available in different prints, colors, and textures.",
  "sana-safinaz":
    "Sana Safinaz is a Pakistani luxury fashion brand that was founded by two talented designers, Sana Hashwani and Safinaz Muneer. The brand is known for its unique and contemporary designs that combine traditional and modern elements, resulting in stunning collections that are both elegant and sophisticated. Sana Safinaz offers a diverse range of products, including clothing, accessories.",
  zellbury:
    "Zellbury is a Pakistani clothing brand that offers trendy and affordable fashion for men, women, and children. The brand is known for its vibrant and colorful designs, which are inspired by the latest fashion trends and cater to the needs and preferences of its diverse customer base",
  "j.": "J. is a well-known Pakistani clothing brand that offers a diverse range of products, including men's, women's, and children's clothing, as well as home textiles and accessories. The brand's clothing collection features a variety of traditional and contemporary designs, which are made using high-quality fabrics and feature intricate embroidery, prints, and embellishments.",
  khadi:
    "Khadi is a traditional hand-woven fabric that is made in India. The fabric is made using natural fibers such as cotton, silk, and wool, and is known for its texture, durability, and comfort. Khadi is often associated with India's freedom struggle, as it was promoted by Mahatma Gandhi as a means of promoting self-sufficiency and economic independence. ",
}

const theme = createTheme()

export default function Company() {
  let { company_name } = useParams()
  const [company_details, setCompanyDetails] = React.useState(data)
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  React.useEffect(() => {
    console.log(data, "data")
    const filtered_data = data.filter((company) => company.linkName === company_name)
    console.log(filtered_data, "filter")

    setCompanyDetails(filtered_data)
    console.log(company_details, "details")
  }, [company_name])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {company_details[0]?.storeName}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {COMPANY_NAMES[company_name]}
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">View all stores</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h3" mb={2}>
            Branches
          </Typography>
          <Grid container spacing={4}>
            {company_details?.map((company) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "10rem" }}
                    image={company.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {company.storeName}
                    </Typography>
                    <Typography>{company.address}</Typography>

                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <InventoryIcon />
                      </ListItemIcon>
                      <ListItemText primary="Products" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {company?.products?.map((prod) => (
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary={prod} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>

                    <List></List>
                  </CardContent>
                  <CardActions>
                    <Link to="/maps" style={{textDecoration: "none"}}>
                      <Button size="small">View Location</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  )
}
