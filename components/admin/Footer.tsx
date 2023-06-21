import { Box, Grid, Button } from "@mui/material";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footerSchema";
import { FooterType, FormActions } from "../../types/FormTypes";

const Footer = () => {
  const onSubmit = async (values: FooterType, actions: FormActions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<FooterType>({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorsMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email",
      value: values.email,
      errorsMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorsMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorsMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update Day",
      value: values.day,
      errorsMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update Time",
      value: values.time,
      errorsMessage: errors.time,
      touched: touched.time,
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
        alignItems: "flex-start",
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
      </Grid>

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
    </Box>
  );
};

export default Footer;
