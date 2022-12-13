import React from "react";
import Link from "next/link";
import { IProducts } from "../model";
import CardComponent from "../components/Card";

interface HomeProps {
  products: IProducts[]
}

const Home = ({ products }: HomeProps) => {
  return (
    <div>
      
      {products.map((product) => {
        return (
          <>
            <CardComponent image={product.image} title={product.title} description={product.description} id={product.id}/>
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
