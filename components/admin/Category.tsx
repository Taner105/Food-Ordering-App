import { Box, Button, Typography } from "@mui/material";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profileSchema";
import { useState, useEffect } from "react";
import { Category, FormActions } from "../../types/FormTypes";
import axios from "axios";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        //  setCategories(res?.data)
        setCategories(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const handlCreate = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {
          title: inputText,
        }
      );
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (values: Category, actions: FormActions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { handleBlur } = useFormik<Category>({
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
          onClick={handlCreate}
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
          height: "300px",
          overflow: "auto",
          pb: 2,
        }}
      >
        {categories.map((category) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
              key={category._id}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {category.title}
              </Typography>
              <Button
                onClick={(e) => handleDelete(e, category._id)}
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
