import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainMap from "./pages/MainMap"
import { Stack } from "@mui/material"
import Company from "./pages/Company"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MainMap />} />
        <Route path="/company/:company_name" element={<Company />} />
        <Route path="*" element={<Stack alignItems="center">404 </Stack>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
