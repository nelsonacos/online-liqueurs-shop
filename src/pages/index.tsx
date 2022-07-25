import React, { useState } from 'react'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllProducts, getAllCategories } from '../helpers'
import { Layout } from '../components/Layout'
import { ProductFilterView, DefaultProductListView } from '../components/Product'
import { RenderProductList } from '../components/Ui'
import styleProduct from "../styles/Product.module.css"
import { Product as ProductInfo } from '../interfaces'


const Home: NextPage = ({ products, categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [liqueurs, setLiqueurs] = useState<Array<ProductInfo>>([...products])

  return (
    <Layout title="Online Liqueurs Shop">
      <h1> Online Liqueurs Shop </h1>
      <ProductFilterView
        products={products}
        setLiqueurs={setLiqueurs}
        categories={categories}
      />

      <RenderProductList
        className={styleProduct.items}
        list={liqueurs}
        View={DefaultProductListView}
      />
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