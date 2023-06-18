import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MopedIcon from "@mui/icons-material/Moped";
import LogoutIcon from "@mui/icons-material/Logout";

import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "40px",
        minHeight: "calc(100vh - 415px)",
      }}
    >
      {/* left */}
      <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", mt: 5, mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            p: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "70px",
              width: "70px",
            }}
          >
            <Image
              style={{ borderRadius: "50%" }}
              src="/client1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            John Doe
          </Typography>
        </Box>
        <Box sx={{ width: "100%", minWidth: { xs: "100%", md: "350px" } }}>
          {/* <nav aria-label="main mailbox folders"> */}
          <List>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setTabs(0)}
                sx={{
                  ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                  ...(tabs === 0 && {
                    bgcolor: "#ffbe33",
                    color: "#fff",
                  }),
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setTabs(1)}
                sx={{
                  ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                  ...(tabs === 1 && {
                    bgcolor: "#ffbe33",
                    color: "#fff",
                  }),
                }}
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Password" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setTabs(2)}
                sx={{
                  ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                  ...(tabs === 2 && {
                    bgcolor: "#ffbe33",
                    color: "#fff",
                  }),
                }}
              >
                <ListItemIcon>
                  <MopedIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setTabs(3)}
                sx={{
                  ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                  ...(tabs === 3 && {
                    bgcolor: "#ffbe33",
                    color: "#fff",
                  }),
                }}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
          {/* </nav> */}
        </Box>
      </Box>
      {/* right */}
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </Container>
  );
};

export default Profile;
