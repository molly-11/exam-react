import { Button, TextField } from "@mui/material";

function SearchSection() {
  return (
    <div>
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <Button variant="contained">Sort by weight</Button>
    </div>
  );
}

export default SearchSection;
