import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Layout from "../../components/Layout"
import Product from "../../components/Product"
import { getPathById, getProductById } from "../../helpers/normalize"

const ProductPage: NextPage = ({productInfo}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title={productInfo.data.id}>
            <h1> { productInfo.data.id } </h1>
            <Product item={productInfo.data} showAs="Page" />
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

export const getStaticProps: GetStaticProps = async ({params}) => {
    const product = await getProductById(params.id)

    return {
        props: { productInfo: product }
    }
}

export default ProductPage