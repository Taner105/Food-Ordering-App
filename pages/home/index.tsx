import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/products";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
import axios from "axios";

const index = ({ categoryList, productList }) => {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </>
  );
};

export default index;
