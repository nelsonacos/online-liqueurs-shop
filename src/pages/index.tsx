import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getData } from '../helpers/normalize'

type Product = {
  product_id: string,
  name: string,
  total_price: string,
}

const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Liqueurs Shop</title>
        <meta name="description" content="Front-end Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {products.map(({ product_id, name }) => (
          <div key={product_id}>
            <h1> {name} </h1>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products: Product[] = await getData('http://localhost:6000/products');

  return {
    props: { products }
  }
}

export default Home
