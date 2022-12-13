import React from "react";
import Link from "next/link";

//fetch("https://fakestoreapi.com/products")
const Home = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <>
            <h1>{product.title}</h1>
            <Link href={String(product.id)}>details</Link>
          </>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log(products);

  return {
    props: {
      products,
    },
  };
};

export default Home;
