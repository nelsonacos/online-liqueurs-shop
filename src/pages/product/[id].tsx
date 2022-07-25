import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import { Layout } from "../../components/Layout"
import { ProductDetailView, DefaultProductListView } from "../../components/Product"
import { RenderProductList } from '../../components/Ui/'
import { Product as ProductInfo } from '../../interfaces'
import styles from "../../styles/Product.module.css"
import { getAllProducts, getSugestions } from "../../helpers"

const ProductPage: NextPage = ({ id, productInfo, products, recommends }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const suggestedProducts = recommends.flatMap((id: string) => {
        return products.filter((product: ProductInfo) => product.product_id === id, [])
    })

    return (
        <Layout title={productInfo.product_id}>
            <h1> </h1>
            <ProductDetailView item={productInfo} />
            <h3 className={styles.recommendsHeading}>
                Discover additional products
            </h3>

            <RenderProductList
                className={styles.recommendsContainer}
                list={suggestedProducts}
                View={DefaultProductListView}
            />
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