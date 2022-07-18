import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Layout from "../../components/Layout"
import Product from "../../components/Product"
import ProductInfo from '../../interfaces/Product'
import styles from "../../styles/Product.module.css"
import { getAllProducts, getSugestions } from "../../helpers"

const ProductPage: NextPage = ({ id, productInfo, products, recommends }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const suggestedProducts = recommends.flatMap((id: string) => {
        return products.filter((product: ProductInfo) => product.product_id === id, [])
    })

    return (
        <Layout title={productInfo.product_id}>
            <h1> </h1>
            <Product item={productInfo} showAs="Page" />
            <h3 className={styles.recommendsHeading}>
                Discover additional products
            </h3>

            <div className={styles.recommendsContainer}>
                <>
                    {suggestedProducts &&
                        suggestedProducts.map((product: ProductInfo) => (
                            <Product key={product.product_id} item={product} showAs="recommendations-page" />
                        ))}
                </>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data: ProductInfo[] = await getAllProducts();
    return {
        paths: await data.map((item: ProductInfo) => {
            return {
                params: {
                    id: item.product_id,
                },
            };
        }),
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products: ProductInfo[] = await getAllProducts();
    const recommends = await getSugestions(params.id)
    const productInfo = await products.find((product: ProductInfo) => product.product_id === params.id)

    return {
        props: {
            id: params.id,
            productInfo,
            products: products,
            recommends: recommends
        }
    }
}

export default ProductPage