import React from 'react'

const DetailsPage = ({product}) => {
  return (
    <div>{product.title}</div>
  )
}
// return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }

export async function getStaticPaths() {
    return {
        paths: [
            
        ], 
        fallback: false
    }
}

export async function getStaticProps(context) {
    const response = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = response.json()
    console.log(product)

    return {
      props: {
        product
      }
    }
  }

export default DetailsPage