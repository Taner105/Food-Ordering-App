import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      // variant="h4"
      noWrap
      component="a"
      href="/"
      sx={{
        fontSize: "2rem",
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "Dancing Script",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Feane
    </Typography>
  );
};

export default Logo;
