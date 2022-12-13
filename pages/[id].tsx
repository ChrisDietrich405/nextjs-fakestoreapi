import { countReset } from "console";
import React from "react";
import { IProducts } from "../model";

interface DetailsPageProps {
    product: IProducts
}



const DetailsPage = ({ product }: DetailsPageProps) => {
  return <div>{product?.title}</div>;
};

// return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}



export async function getStaticProps(context:any) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  )
    .then((res) => res.json())
    .then((json) => json);

  return {
    props: {
      product: response,
    },
  };
}

export default DetailsPage;