import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { Container, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { AuthLogin, FormActions } from "../../types/FormTypes";

const Login = () => {
  const onSubmit = async (values: AuthLogin, actions: FormActions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<AuthLogin>({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorsMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorsMessage: errors.password,
      touched: touched.password,
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
        <Title propStyle={{ fontSize: "40px", margin: "25px 0" }}>Login</Title>
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
            // variant="contained"
          >
            Login
          </Button>
          <Button
            type="submit"
            startIcon={<AiFillGithub />}
            sx={{
              display: "flex",
              backgroundColor: "#222831",
              borderRadius: "25px",
              color: "#fff",

              ":hover": {
                backgroundColor: "#222831",
                opacity: "70%",
                transition: "all",
                color: "#fff",
              },
            }}
            // variant="contained"
          >
            Github
          </Button>
          <Link style={{ color: "#222831" }} href="/auth/register">
            <Typography sx={{ fontSize: "14px" }}>
              Do you no have a account?
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
