import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import logo from "../images/logo.png";

const Navbar = ({
  handleLogoClick,
  handleSignUpClick,
  handleLoginClick,
  isLoggedIn,
  savedResumesSection,
  handleShowSavedResumes,
  handleCloseSavedResumes,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#2026d6" }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            aria-label="website logo"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="website logo"
              style={{
                width: "32px",
                height: "32px",
              }}
            ></img>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 1, fontFamily: "Inter, sans-serif" }}
          >
            ResFast
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 1, fontFamily: "Inter, sans-serif" }}
          >
            Amal Vatsa 21BCE3194|Puja Maheshwari 21BCE31972|Alita Rajesh 21BCE2967
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
