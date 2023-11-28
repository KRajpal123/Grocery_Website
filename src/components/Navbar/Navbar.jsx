import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CardMedia } from "@mui/material";

const pages = ["Home", "About", "Shop", "Blog", "Contact"];
const settings = ["Sign in", "Register", "My Account", "Whishlist"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar disableGutters>
          <CardMedia sx={{ display: { xs: "none", md: "flex" }, mr: 1,cursor:"pointer" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              width={"50px"}
            />
          </CardMedia>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Grocery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <CardMedia sx={{ display: { xs: "flex", md: "none" }, mr: 1,cursor:"pointer" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              width={"50px"}
            />
          </CardMedia>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Grocery
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* user  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
