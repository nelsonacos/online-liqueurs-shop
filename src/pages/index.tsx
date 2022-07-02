import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getData } from '../helpers/normalize'
import Layout from '../components/Layout'
import Product from '../components/Product'
import styleProduct from "../styles/Product.module.css"
import ProductInfo from '../interfaces/Product'

const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Online Liqueurs Shop">
      <h1> Online Liqueurs Shop </h1>
      <div className={styleProduct.items}>
        {products &&
          products.map(( product: ProductInfo ) => (
            <Product key={product.product_id} item={product} showAs="default" />
          ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products: ProductInfo[] = await getData('http://localhost:6000/products');

  return {
    props: { products }
  }
}

export default Home
