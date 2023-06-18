import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CategoryIcon from "@mui/icons-material/Category";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import MopedIcon from "@mui/icons-material/Moped";
import LogoutIcon from "@mui/icons-material/Logout";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";
import Account from "@/components/profile/Account";
import Products from "@/components/admin/Products";
import Orders from "@/components/admin/Orders";
import Category from "@/components/admin/Category";

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
              src="/admin/admin.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            Admin
          </Typography>
        </Box>
        <Box sx={{ width: "100%", minWidth: { xs: "100%", md: "300px" } }}>
          <nav aria-label="main mailbox folders">
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
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
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
                    <MopedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
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
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
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
                    <VideoLabelIcon />
                  </ListItemIcon>
                  <ListItemText primary="Footer" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setTabs(3)}
                  sx={{
                    ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                    ...(tabs === 4 && {
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
          </nav>
        </Box>
      </Box>
      {/* right */}
      {tabs === 0 && <Products />}
      {tabs === 1 && <Orders />}
      {tabs === 2 && <Category />}
    </Container>
  );
};

export default Profile;
