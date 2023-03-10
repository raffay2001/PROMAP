import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import { Toolbar, Typography, FormControlLabel, Radio, Button } from "@mui/material"
import { StoreMallDirectoryOutlined } from "@mui/icons-material"
import heroImage from "../images/hero_image.jpg"
import { Link } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <div>

      <main>
        <div className="hero__container">
          <div className="hero__content">
            <h1
              className="hero__heading"
              style={{ color: "#18181b", fontSize: "4rem", fontWeight: 700, margin: 0 }}
            >
              PROMAP
            </h1>
            <p
              style={{ color: "#18181b", fontSize: "1rem", fontWeight: 300, margin: "0 0 20px 0" }}
            >
              PROMAP is a clothing brand that offers a wide range of clothing items from multiple
              brands, all under one roof. PROMAP's mission is to provide customers with a
              one-stop-shop for all their clothing needs, catering to various styles, preferences,
              and budgets. PROMAP prides itself on offering high-quality and stylish clothing from a
              diverse range of brands. Whether you're looking for casual wear, formal wear,
              sportswear, or something in between, PROMAP has got you covered. From popular
              international brands to local designers, PROMAP's collection is extensive, and you are
              sure to find something that suits your taste and style.
            </p>
            <Button variant="contained" sx={{ width: "10rem" }}>
              See More
            </Button>
          </div>
          <div className="hero_image__container">
            <img src={heroImage} alt="heroImg" />
          </div>
        </div>
        <div className="slider__container">
          <h1  style={{ color: "#18181b", fontSize: "3.5rem", fontWeight: 700, margin: 0 }}>Our Top Brands</h1>
          <Splide
            options={{
              rewind: true,
              perPage: 3,
              width: "1000px",
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide onClick={() => navigate("/company/sana-safinaz")}>
              <img
              style={{width: "15rem", height: "15rem", display: "block", cursor: "pointer"}}
                src="data:image/png;base64,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"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide onClick={() => navigate("/company/zellbury")}>
              <img
              style={{width: "15rem", height: "15rem", display: "block", cursor: "pointer"}}
                src="data:image/jpeg;base64,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"
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide onClick={() => navigate("/company/gul-ahmed")}>
              <img
              style={{width: "15rem", height: "15rem", display: "block", cursor: "pointer"}}
                src="data:image/png;base64,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"
                alt="Image 3"
              />
            </SplideSlide>
            <SplideSlide onClick={() => navigate("/company/j.")}>
              <img
              style={{width: "15rem", height: "15rem", display: "block", cursor: "pointer"}}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAaVBMVEXJERH////GAADlo6P67OzIHx/JDAzIBQXPQ0P78vLtxMT56en++/vrvb3DAADKHBzimZny09PSVVXchYXSXFz34+PwzMzXcHDZfHzXaWnos7PRSkrMJyfLLCzNMTHmqKjz2trNODjgkpJD9/2lAAABlElEQVR4nO2a23KCMBRFYStBCBcF0Sq2Qv//IysQYmh5bI7tzF5P8eksdq4zxyAghBBCCCGEEEL+HypeR6x+tFunFBLAOVnnCCGBt3Cdi5BAgGJibwpr81uqvvXYGIFtpIRLU4ACFKAABShAAQpQgAIUoAAFKEABClCAAhSgwN8UUBh4nQBwztNrBcEwFgJo9Tg+KLkQXAHszDhsSrEMFgKHWSC8i0XgCOBm64dbJRWBK+A0UbLKawQK8fyBrkDtCPhsHSm8t22JbwK6RPsUSD78TYHCXWdZU2Mp0CmFxAqcPAaAq7vQrUAOp5OWtf4EcFlMsxUYEoFpoWU+e3dzAFPJp8C4LFGd9Fbnvc8tUHSzwN4VSM2SQNQ/9ojH+kHRLBMwgdhJV76PIOTzTuvjp89G8PaZl/pYE73ZdXIXsIqmb9bT/X8az4BI8g2CapqBtiiKWzoMD35X3U+DYzbt9mY8+ZK6kH4Nos/todvsb9IN+8EAuzptdJd+HgPJ959DPP5/4fEAfk15QgghhBBCCCHk9/kCrRMT9XpRb7gAAAAASUVORK5CYII="
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide onClick={() => navigate("/company/khadi")}>
              <img
              style={{width: "15rem", height: "15rem", display: "block", cursor: "pointer"}}
                src="data:image/png;base64,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"
                alt="Image 3"
              />
            </SplideSlide>
          </Splide>
        </div>
      </main>
    </div>
  )
}

export default Home
