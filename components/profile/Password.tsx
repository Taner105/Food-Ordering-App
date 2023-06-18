import { Box, Grid, Button } from "@mui/material";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/registerSchema";
import { newPasswordSchema } from "@/schema/newPassword";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorsMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorsMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
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
        Password
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

export default Password;
