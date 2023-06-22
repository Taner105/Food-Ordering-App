import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { Container, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import Link from "next/link";
import { AuthRegister, FormActions } from "../../types/FormTypes";

const Register = () => {
  const onSubmit = async (values: AuthRegister, actions: FormActions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<AuthRegister>({
      initialValues: {
        email: "",
        password: "",
        fullName: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorsMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorsMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: "20px",
          minHeight: "calc(100vh - 455px)",
        }}
      >
        <Title propStyle={{ fontSize: "40px", margin: "25px 0" }}>
          Register
        </Title>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { xs: "100%", sm: "70%", md: "50%" },
          }}
        >
          {inputs.map((input) => {
            return (
              <Input
                key={input.id}
                input={input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "70%", md: "50%" },
            gap: "15px",
            mt: "20px",
          }}
        >
          <Button
            type="submit"
            sx={{
              display: "inline-block",
              backgroundColor: "primary.main",
              borderRadius: "25px",
              color: "#fff",

              ":hover": {
                backgroundColor: "primary.main",
                opacity: "70%",
                transition: "all",
                color: "#fff",
              },
            }}
          >
            Register
          </Button>
          <Link style={{ color: "#222831" }} href="/auth/login">
            <Typography sx={{ fontSize: "14px" }}>
              Do you have a account?
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
