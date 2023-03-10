import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
function SearchBar({ inputText, setInputText }) {
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
