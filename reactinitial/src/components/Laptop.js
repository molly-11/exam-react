import { Button, Typography } from "@mui/material";
import { useState } from "react";

function Laptop({ index, name, brand, weight }) {
  const [show, setShow] = useState(false);

  const handleClick=()=>{
    setShow(!show)
  }
  return (
    <div key={index} className="laptopData">
      <div>
        <Typography variant="h5">{name}</Typography>

        {show ? (
          <>
            <Typography>{brand}</Typography>
          </>
        ) : null}
        {show ? (
          <>
            <Typography> weight: {weight}</Typography>
          </>
        ) : null}
      </div>
      <Button variant="contained" onClick={handleClick}>{show? "Show less": "Show more"}</Button>
    </div>
  );
}

export default Laptop;
