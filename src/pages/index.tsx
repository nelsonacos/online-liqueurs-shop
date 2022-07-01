import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getData } from '../helpers/normalize'
import Layout from '../components/Layout'

type Product = {
  product_id: string,
  name: string,
  total_price: string,
}

const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Online Liqueurs Shop">
      <h1> Online Store </h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products: Product[] = await getData('http://localhost:6000/products');

  return {
    props: { products }
  }
}

export default Home
