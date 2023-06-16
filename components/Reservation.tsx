import { Box, Button, Container, FormControl } from "@mui/material";
import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservationSchema";

interface inputType {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

const Reservation = () => {
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
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
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
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorsMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "How Many Persons?",
      value: values.date,
      errorsMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <Container sx={{ py: "1.5rem" }}>
      <Box>
        <Title propStyle={{ fontSize: "40px", marginBottom: "20px" }}>
          Book A Table
        </Title>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: " flex-start ",
          gap: "40px",
        }}
      >
        <Box
          autoComplete="off"
          component="form"
          onSubmit={handleSubmit}
          sx={{ flex: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
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

          <Button
            type="submit"
            sx={{
              display: "inline-block",
              backgroundColor: "#ffbe33",
              borderRadius: "25px",
              color: "#fff",
              mt: "25px",
              ":hover": {
                backgroundColor: "#ffbe33",
                opacity: "70%",
                transition: "all",
                color: "#fff",
              },
            }}
            variant="contained"
          >
            Boook Now
          </Button>
        </Box>

        <Box sx={{ flex: 1 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48126.01080076792!2d28.981132407435545!3d41.071710163169435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f8193f1%3A0x36c864a929a1018c!2zQmXFn2lrdGHFny_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1686645125306!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};

export default Reservation;
