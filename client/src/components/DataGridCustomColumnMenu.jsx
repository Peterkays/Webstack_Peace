import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  // Render the GridToolbarContainer
  return (
    <GridToolbarContainer>
      // Render the FlexBetween component
      <FlexBetween width="100%">
        // Render the FlexBetween component
        <FlexBetween>
          // Render the GridToolbarColumnsButton
          <GridToolbarColumnsButton />
          // Render the GridToolbarDensitySelector
          <GridToolbarDensitySelector />
          // Render the GridToolbarExport
          <GridToolbarExport />
        </FlexBetween>
        // Render the TextField component
        <TextField
          // Set the label to "Search..."
          label="Search..."
          // Set the styles for the TextField
          sx={{ mb: "0.5rem", width: "15rem" }}
          // Set the onChange event handler to setSearchInput
          onChange={(e) => setSearchInput(e.target.value)}
          // Set the value of the TextField to searchInput
          value={searchInput}
          // Set the variant to "standard"
          variant="standard"
          // Set the InputProps to include an endAdornment
          InputProps={{
            // Set the endAdornment to include an IconButton
            endAdornment: (
              <InputAdornment position="end">
                // Render the IconButton
                <IconButton
                  // Set the onClick event handler to setSearch
                  onClick={() => {
                    // Call setSearch with the searchInput value
                    setSearch(searchInput);
                    // Set setSearchInput to an empty string
                    setSearchInput("");
                  }}
                >
                  // Render the Search icon
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
