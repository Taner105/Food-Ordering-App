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
import React, { useState } from "react";
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

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(imageSrc);
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
                  onChange={(e) => handleOnChange(e)}
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
              fullWidth
              size="small"
              type="text"
              label="Title"
              placeholder="Write a title..."
              variant="outlined"
            />
            <TextField
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
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                // value={age}
                label="Select Category"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <TextField
                id="outlined-number"
                size="small"
                label="small"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                size="small"
                label="medium"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                size="small"
                label="large"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <TextField
                id="outlined-number"
                size="small"
                label="item"
                type="text"
              />
              <TextField
                id="outlined-number"
                size="small"
                label="price"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
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
            <Box>
              <Typography
                sx={{
                  color: "orange",
                  fontSize: "10px",
                  display: "inline-block",
                  border: "1px solid orange",
                  p: 1,
                  borderRadius: "8px",
                }}
              >
                Ketçap
              </Typography>
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
