import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import GoogleMaps from "../components/Map";

function MainMap() {
  const [inputText, setInputText] = useState("");
    

  return (
    <div className="App">
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <GoogleMaps inputText={inputText} />
    </div>
  )
}

export default MainMap
