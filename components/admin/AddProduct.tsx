import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../components/ui/Title";

import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, md: 500 },
  bgcolor: "background.paper",
  boxShadow: 0,
  borderRadius: "16px",
  p: 4,
};
interface SearchProps {
  open: boolean;
}

const AddProduct = ({ open, setOpen }: SearchProps) => {
  const handleClose = () => setOpen(false);
  const handleModalClose = () => {
    handleClose();
    setOpen(false);
  };
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("pizza");
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [prices, setPrices] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  console.log(categories);

  const handleExtra = () => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions((prev) => [...prev, extra]);
      }
    }
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");
    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/dwr4wpc3a/image/upload`,
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );
      if (res.status === 201) {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title propStyle={{ fontSize: "40px", textAlign: "center" }}>
            Add a New Product
          </Title>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: 2,
            }}
          >
            <Typography fontWeight="bold"> Choose an image</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={handleOnChange}
                />
                {/* eslint-disable @next/next/no-img-element */}
                <Button
                  type="submit"
                  sx={{
                    pointerEvents: "none",
                    display: "inline-block",
                    backgroundColor: "primary.main",
                    borderRadius: "25px",
                    color: "#fff",
                    textTransform: "capitalize",
                    ":hover": {
                      backgroundColor: "primary.main",
                      opacity: "70%",
                      transition: "all",
                      color: "#fff",
                    },
                  }}
                >
                  Choose an Image
                </Button>
              </label>
              {imageSrc && (
                <div>
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={imageSrc}
                    alt=""
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                    }}
                  />
                </div>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              mt: 2,
            }}
          >
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              size="small"
              type="text"
              label="Title"
              placeholder="Write a title..."
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDesc(e.target.value)}
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={2}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                onChange={(e) => setCategory(e.target.value)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                // value={age}
                label="Select Category"
                // onChange={handleChange}
              >
                {categories.length > 0 &&
                  categories.map((category) => (
                    <MenuItem
                      key={category._id}
                      value={category.title.toLowerCase()}
                    >
                      {category.title.toLowerCase()}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {category === "pizza" ? (
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  onChange={(e) => changePrice(e, 0)}
                  id="outlined-number"
                  size="small"
                  label="small"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  onChange={(e) => changePrice(e, 1)}
                  id="outlined-number"
                  size="small"
                  label="medium"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  onChange={(e) => changePrice(e, 2)}
                  id="outlined-number"
                  size="small"
                  label="large"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            ) : (
              <Box>
                <TextField
                  onChange={(e) => changePrice(e, 2)}
                  id="outlined-number"
                  size="small"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            )}

            <Box sx={{ display: "flex", gap: "10px" }}>
              <TextField
                id="outlined-number"
                size="small"
                label="item"
                type="text"
                name="text"
                onChange={(e) =>
                  setExtra({ ...extra, [e.target.name]: e.target.value })
                }
              />
              <TextField
                id="outlined-number"
                size="small"
                label="price"
                type="number"
                name="price"
                onChange={(e) =>
                  setExtra({ ...extra, [e.target.name]: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                onClick={handleExtra}
                type="submit"
                sx={{
                  display: "inline-block",
                  backgroundColor: "primary.main",
                  borderRadius: "25px",
                  color: "#fff",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "primary.main",
                    opacity: "70%",
                    transition: "all",
                    color: "#fff",
                  },
                }}
              >
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              {extraOptions.map((item, index) => {
                return (
                  <Typography
                    onClick={() => {
                      setExtraOptions(
                        extraOptions.filter((_, i) => i !== index)
                      );
                    }}
                    key={index}
                    sx={{
                      color: "orange",
                      fontSize: "10px",
                      display: "inline-block",
                      border: "1px solid orange",
                      p: 1,
                      borderRadius: "8px",
                    }}
                  >
                    {item.text}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleCreate}
              type="submit"
              sx={{
                display: "inline-block",
                backgroundColor: "success.main",
                borderRadius: "25px",
                color: "#fff",
                textTransform: "capitalize",
                mt: 2,
                ":hover": {
                  backgroundColor: "success.main",
                  opacity: "70%",
                  transition: "all",
                  color: "#fff",
                },
              }}
            >
              Create
            </Button>
          </Box>

          <IconButton
            onClick={handleModalClose}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{
              position: "absolute",
              top: "0px",
              right: "0px",
              ":hover": { color: "#ffbe33" },
            }}
          >
            <AiFillCloseCircle />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default AddProduct;
