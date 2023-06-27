import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../../components/ui/Title";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

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
            <input type="file" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              rows={4}
            />
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
