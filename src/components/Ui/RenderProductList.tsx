import { Product as ProductInfo } from '../../interfaces'

type Props = {
    className: string,
    list: ProductInfo[],
    View: React.ElementType,
}

const RenderProductList = ({ className, list, View }: Props) => {
    return (
        <section className={className}>
            {
                list && list.map((product: ProductInfo) => (
                    <View key={product.product_id} item={product} />
                ))
            }
        </section>
    )
}

export default RenderProductList