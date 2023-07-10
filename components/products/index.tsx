import MenuWrapper from "../../components/products/MenuWrapper";
const Product = ({ categoryList, productList }) => {
  return (
    <>
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </>
  );
};

export default Product;
