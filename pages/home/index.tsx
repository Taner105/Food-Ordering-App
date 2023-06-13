import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/products";
import About from "../../components/About";
import Reservation from "../../components/Reservation";

const index = () => {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </>
  );
};

export default index;
