import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/IMG_20190505_081333.jpg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();
  // Get the theme from the useTheme hook
  const theme = useTheme();

  // Initialize the anchorEl state to null
  const [anchorEl, setAnchorEl] = useState(null);
  // Initialize the isOpen state to a boolean value
  const isOpen = Boolean(anchorEl);
  // Define the handleClick function to set the anchorEl state
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  // Define the handleClose function to set the anchorEl state to null
  const handleClose = () => setAnchorEl(null);

  // Render the Navbar component
  return (
    // Render the AppBar component
    <AppBar
      // Set the position to "static" and the background to none
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      // Render the Toolbar component
      <Toolbar
        // Set the justifyContent to "space-between"
        sx={{ justifyContent: "space-between" }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          // Render the IconButton component to toggle the sidebar
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            // Set the background color to the alternate background color from the theme
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            // Render the InputBase component for searching
            <InputBase placeholder="Search..." />
            // Render the IconButton component for searching
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          // Render the IconButton component to toggle the theme
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          // Render the IconButton component for settings
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            // Render the Button component for the profile
            <Button
              // Set the styles for the Button component
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              // Render the Box component for the profile image
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              // Render the Typography component for the profile name
              <Box textAlign="left">
                <Typography
                  // Set the font weight to bold
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                // Render the Typography component for the occupation
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              // Render the ArrowDropDownOutlined icon
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            // Render the Menu component for the dropdown
            <Menu
              // Set the anchorEl state to the current target
              anchorEl={anchorEl}
              // Set the open state to the isOpen state
              open={isOpen}
              // Set the onClose function to the handleClose function
              onClose={handleClose}
              // Set the anchor origin to the bottom and center
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              // Render the MenuItem component for logging out
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
