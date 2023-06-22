import Title from "@/components/ui/Title";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Extra 1",
    price: 1,
  },
  {
    id: 2,
    name: "Extra 2",
    price: 2,
  },
  {
    id: 3,
    name: "Extra 3",
    price: 3,
  },
];
const foodItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur",
    extraOptions: [
      {
        id: 1,
        name: "Extra 1",
        price: 1,
      },
    ],
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSize = (sizeIndex: number) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const changePrice = (number: number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "550px",
            width: "100%",
            flex: 1,
          }}
        >
          <Image src="/f6.webp" alt="" layout="fill" objectFit="contain" />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Title propStyle={{ fontSize: "48px" }}>Good Pizza</Title>
          <span
            style={{
              fontSize: "24px",
              color: "#ffbe33",
              fontWeight: "bold",
            }}
          >
            ${price}
          </span>
          <Typography sx={{ fontSize: "14px", pr: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
            molestiae.
          </Typography>
          <Box>
            <Typography fontWeight="bold" variant="h5">
              Choose the size
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <Box
                onClick={() => handleSize(0)}
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "56px" },
                  width: "40px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  small
                </span>
              </Box>
              <Box
                onClick={() => handleSize(1)}
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "64px" },
                  width: "50px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  medium
                </span>
              </Box>
              <Box
                onClick={() => handleSize(2)}
                sx={{
                  position: "relative",
                  height: { xs: "35px", md: "72px" },
                  width: "60px",
                }}
              >
                <Image
                  src="/size.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    fontSize: "12px",
                    background: "#ffbe33",
                    borderRadius: "36px",
                    padding: "0 5px ",
                    fontWeight: "bold",
                  }}
                >
                  large
                </span>
              </Box>
            </Box>
          </Box>
          <Box>
            {extraItems.map((item) => {
              return (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      onChange={(e) => handleChange(e, item)}
                      name="gilad"
                      sx={{
                        "&.Mui-checked": {
                          color: "primary.main",
                        },
                      }}
                    />
                  }
                  label={item.name}
                />
              );
            })}
          </Box>
          <Button
            onClick={handleClick}
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
            variant="contained"
          >
            Add To Card
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
