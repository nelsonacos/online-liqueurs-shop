import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllProducts, getAllCategories } from '../helpers'
import Layout from '../components/Layout'
import Product from '../components/Product'
import React, { useState } from 'react'
import styleProduct from "../styles/Product.module.css"
import ProductInfo from '../interfaces/Product'


const Home: NextPage = ({ products, categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data: ProductInfo[] = products.flatMap((product: ProductInfo) => product)
  const [liqueurs, setLiqueurs] = useState<Array<ProductInfo>>([...data])

  const filterProducts = (categorie: string) => {
    const productsList: ProductInfo[] = data.flatMap(product => product)
    const temp: ProductInfo[] = []
    productsList.forEach(product => {
      if (categorie === 'todos') temp.push(product)
      else if (product.categories?.includes(categorie)) temp.push(product)
    })
    setLiqueurs(temp)
  }
  const handleFilter = (event: React.MouseEvent<HTMLElement>) => {
    const value = (event.target as HTMLButtonElement).innerHTML.trim()
    const categorie: string = value
    filterProducts(categorie)
  }

  return (
    <Layout title="Online Liqueurs Shop">
      <h1> Online Liqueurs Shop </h1>
      <div className={styleProduct.filterContainer}>
        <button onClick={handleFilter}>todos</button>
        {categories &&
          categories.map((categorie: string) => (<button key={categorie} onClick={handleFilter}>{categorie}</button>))}
      </div>
      <div className={styleProduct.items}>
        {liqueurs &&
          liqueurs.map((product: ProductInfo) => (
            <Product key={product.product_id} item={product} showAs="default" />
          ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products: ProductInfo[] = await getAllProducts();
  const categories: String[] = await getAllCategories()
  return {
    props: {
      products,
      categories
    }
  }
}

export default Home
