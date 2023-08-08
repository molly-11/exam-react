import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import SearchSection from "./components/SearchSection";

const URL = "https://demoapi.com/api/laptop";
const App = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [alldata, setAllData] = useState(fetchedData);
  const [filteredData, setFilteredData] = useState(null);
  const [sortedData, setSortedData] = useState(fetchedData);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  const searchProduct = (value) => {

    if(value){
      let searchedProds = [];
      fetchedData.forEach((prod) => {
        if (prod.name.toLowerCase().includes(value.toLowerCase())) {
          searchedProds.push(prod);
        }
      });
      console.log(searchedProds);

     /* setAllData(searchedProds);
      setSearchActive(true);*/

    } /*else{
      setAllData(fetchedData);
      setSearchActive(false);
    }*/

  };

  return (
    <div>
      <Typography variant="h1"> Laptops</Typography>
      <header>
        <TextField
          id="filled-basic"
          label="Search laptop"
          variant="filled"
          onChange={(e)=>{searchProduct(e.target.value)}}
        />
        <Button variant="contained">Sort</Button>
      </header>

      {!fetchedData && !searchActive ? (
        <LoadingMask />
      ) : (
        fetchedData.map((laptop, index) => (
          <Laptop
            key={index}
            index={index}
            name={laptop.name}
            brand={laptop.brand}
            weight={laptop.weight}
          />
        ))
      )}






    </div>
  );
};

export default App;
