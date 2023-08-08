import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import SearchSection from "./components/SearchSection";


const URL = "https://demoapi.com/api/laptop";
const App = () => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  return (
    <div>
      <Typography variant="h1"> Laptops</Typography>
      <SearchSection/>
      {!fetchedData ? (
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
