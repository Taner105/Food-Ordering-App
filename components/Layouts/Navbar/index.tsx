import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "@/components/ui/Logo";
import Badge from "@mui/material/Badge";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "@/components/ui/Search";
import { useRouter } from "next/router";

const pages = ["Home", "Menu", "About", "Book Table"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  return (
    <AppBar
      sx={{
        bgcolor: router.asPath === "/" ? "transparent" : "#222831",
        zındex: 40,
        position: router.asPath === "/" ? "relative" : "static",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Logo />
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Dancing Script",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Feane
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "16px",
                  fontFamily: "Open Sans",
                  my: 2,
                  color: "white",
                  display: "block",
                  lineHeight: "24px",
                  ":hover": {
                    color: "#ffbe33",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ ":hover": { color: "#ffbe33" } }}
            >
              <Badge color="error">
                <FaUserAlt size="16px" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ ":hover": { color: "#ffbe33" } }}
            >
              <Badge color="error">
                <FaShoppingCart size="16px" />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleOpen}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ ":hover": { color: "#ffbe33" } }}
            >
              <Badge color="error">
                <FaSearch size="16px" />
              </Badge>
            </IconButton>
            <Button
              sx={{
                display: { xs: "none", md: "inline-block" },
                backgroundColor: "#ffbe33",
                borderRadius: "25px",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#ffbe33",
                  opacity: "70%",
                  transition: "all",
                  color: "#fff",
                },
              }}
              variant="contained"
            >
              Order Online
            </Button>
          </Box>
          <Search open={open} handleClose={handleClose} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
