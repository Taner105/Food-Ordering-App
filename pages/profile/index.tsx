import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MopedIcon from "@mui/icons-material/Moped";
import LogoutIcon from "@mui/icons-material/Logout";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservationSchema";
import { profileSchema } from "@/schema/profileSchema";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorsMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorsMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorsMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorsMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorsMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorsMessage: errors.bio,
      touched: touched.bio,
    },
  ];

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
                sx={{
                  ":hover": { bgcolor: "#ffbe33", color: "#fff" },
                  //   ":active": { bgcolor: "#ffbe33" },
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
                sx={{ ":hover": { bgcolor: "#ffbe33", color: "#fff" } }}
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
                sx={{ ":hover": { bgcolor: "#ffbe33", color: "#fff" } }}
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
                sx={{ ":hover": { bgcolor: "#ffbe33", color: "#fff" } }}
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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Title propStyle={{ fontSize: "40px", textAlign: "center" }}>
          Account Settings
        </Title>
        <Grid rowGap={1} spacing={2} container>
          {inputs.map((input) => {
            return (
              <Grid key={input.id} item xs={12} md={6}>
                <Input
                  input={input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            );
          })}
          <Button
            type="submit"
            sx={{
              display: "inline-block",
              backgroundColor: "#ffbe33",
              borderRadius: "25px",
              color: "#fff",
              mt: "25px",
              ml: 2,
              textTransform: "capitalize",
              ":hover": {
                backgroundColor: "#ffbe33",
                opacity: "70%",
                transition: "all",
                color: "#fff",
              },
            }}
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
