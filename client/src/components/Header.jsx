import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  // Get the theme from the useTheme hook
  const theme = useTheme();

  // Render the Header component
  return (
    // Wrap the content in a Box component
    <Box>
      // Render a Typography component for the title
      <Typography
        // Set the variant to "h2"
        variant="h2"
        // Set the color to the secondary color from the theme
        color={theme.palette.secondary[100]}
        // Set the font weight to bold
        fontWeight="bold"
        // Set the styles for the Typography component
        sx={{ mb: "5px" }}
      >
        // Render the title
        {title}
      </Typography>
      // Render a Typography component for the subtitle
      <Typography
        // Set the variant to "h5"
        variant="h5"
        // Set the color to the secondary color from the theme
        color={theme.palette.secondary[300]}
      >
        // Render the subtitle
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
