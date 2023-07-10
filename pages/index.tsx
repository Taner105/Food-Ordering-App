import Head from "next/head";
import Home from "./home";
import styles from "@/styles/Home.module.css";
import axios from "axios";

export default function Index({ categoryList, productList }) {
  return (
    <>
      <Head>
        <title>Food Ordering</title>
      </Head>
      <main style={styles}>
        <Home categoryList={categoryList} productList={productList} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
