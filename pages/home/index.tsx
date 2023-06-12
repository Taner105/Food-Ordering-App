import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/products";
import About from "../../components/About";
import Input from "@/components/form/Input";

const index = () => {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Input />
    </>
  );
};

export default index;
