import { AllProductButton, CategoryButton } from '.'
import { Product as ProductInfo } from '../../interfaces'
import styleProduct from "../../styles/Product.module.css"

type Props = {
    products: ProductInfo[],
    setLiqueurs(products: ProductInfo[]): void,
    categories: string[],
}

const ProductFilterView = ({ products, setLiqueurs, categories }: Props) => {
    const filter = (category: string) => {
        const list = products.filter(product => {
            if (category === 'todos') return product
            else if (product.categories?.includes(category)) return product
        })
        setLiqueurs(list)
    }

    return (
        <div className={styleProduct.filterContainer}>
            <AllProductButton key="todos" category="todos" filter={filter} />
            {categories &&
                categories.map((category: string) => (<CategoryButton key={category} category={category} filter={filter} />))}
        </div>
    )
}

export default ProductFilterView