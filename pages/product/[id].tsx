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
import axios from "axios";

const Index = ({ food }) => {
  const [prices, setPrices] = useState(food.prices);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(food?.extraOptions);
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
    dispatch(addProduct({ ...food, extras, price, quantity: 1 }));
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
          <Image src={food?.img} alt="" layout="fill" objectFit="contain" />
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
          <Title propStyle={{ fontSize: "48px" }}>{food?.title}</Title>
          <span
            style={{
              fontSize: "24px",
              color: "#ffbe33",
              fontWeight: "bold",
            }}
          >
            ${price}
          </span>
          <Typography sx={{ fontSize: "14px", pr: 5 }}>{food?.desc}</Typography>
          <Box>
            <Typography fontWeight="bold" variant="h5">
              Choose the size
            </Typography>
            {food.category === "pizza" && (
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
            )}
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
                  label={item.text}
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
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
  );

  return {
    props: {
      food: res.data ? res.data : null,
    },
  };
};

export default Index;
