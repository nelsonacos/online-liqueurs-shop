import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Layout from "../../components/Layout"
import Product from "../../components/Product"
import ProductInfo from '../../interfaces/Product'
import styles from "../../styles/Product.module.css"
import { getPathById, getProductById, getData, getRecommendedsProduct } from "../../helpers/normalize"

const ProductPage: NextPage = ({ products, productInfo, recommends }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title={productInfo.data.id}>
            <h1> {productInfo.data.id} </h1>
            <Product item={productInfo.data} showAs="Page" />
            <h3 className={styles.recommendsHeading}>
                Discover additional products
            </h3>

            <div className={styles.recommendsContainer}>
                <>
                    {recommends &&
                        recommends.map((product: ProductInfo) => (
                            <Product key={product.product_id} item={product} showAs="recommendations-page" />
                        ))}
                </>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = await getPathById();

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products: ProductInfo[] = await getData('http://localhost:3001/products');
    const product = await getProductById(params.id)
    const recommends = await getRecommendedsProduct(params.id)

    return {
        props: {
            products: products,
            productInfo: product,
            recommends,
        }
    }
}

export default ProductPage