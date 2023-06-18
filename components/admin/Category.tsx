import { Box, Button, Typography } from "@mui/material";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profileSchema";
import { useState } from "react";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState(["pizza"]);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { handleBlur } = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit,
    validationSchema: profileSchema,
  });
  const inputs = [
    {
      id: 1,
      name: "category",
      type: "text",
      placeholder: "Add a ne Category...",
      value: inputText,
    },
  ];
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <Title propStyle={{ fontSize: "40px", textAlign: "center" }}>
        Categories
      </Title>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {inputs.map((input) => {
          return (
            <Box sx={{ width: "100%" }} key={input.id}>
              <Input
                input={input}
                onChange={(e: any) => setInputText(e.target.value)}
                onBlur={handleBlur}
              />
            </Box>
          );
        })}
        <Button
          onClick={() => {
            setCategories([...categories, inputText]);
            setInputText("");
          }}
          type="submit"
          sx={{
            display: "inline-block",
            backgroundColor: "#ffbe33",
            borderRadius: "8px",
            color: "#fff",

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
          Add
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {categories.map((category, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
              key={index}
            >
              <Typography sx={{ fontWeight: "bold" }}>{category}</Typography>
              <Button
                onClick={() =>
                  setCategories(categories.filter((cat) => cat !== category))
                }
                type="submit"
                sx={{
                  display: "inline-block",
                  backgroundColor: "red",
                  borderRadius: "8px",
                  color: "#fff",

                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "red",
                    opacity: "70%",
                    transition: "all",
                    color: "#fff",
                  },
                }}
                variant="contained"
              >
                Delete
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Category;
