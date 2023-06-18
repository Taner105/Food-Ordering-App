import { Box, Grid, Button } from "@mui/material";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profileSchema";

const Account = () => {
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
  );
};

export default Account;
