import { useContext } from 'react'
import { CartContext, ModalContext } from '../../context'
import { AddToCartButton } from '.'
import { Product as ProductInfo } from "../../interfaces"
import { ImageWithFallback } from '../Ui'
import styles from "../../styles/Product.module.css"

type Props = {
    item: ProductInfo,
}


const ProductDetailView = ({ item }: Props) => {
    const { isOpen, open } = useContext(ModalContext)
    const { addItemToCart } = useContext(CartContext)
    return (
        <div className={styles.page}>
            <div className={styles.imageContainer}>
                <ImageWithFallback
                    className={styles.image}
                    src={item.image_url}
                    width={350}
                    height={350}
                />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    {item.name}
                </h2>
                <div className={styles.price}>
                    ${item.total_price}
                </div>
                <AddToCartButton
                    item={item}
                    className="btn-cart-xl"
                    addItemToCart={addItemToCart}
                    isOpen={isOpen}
                    openCart={open}
                />
            </div>
            <div className={styles.aditionals}>
                <h3 className={styles.title}>
                    the best beer in the world
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
        </div>
    )
}

export default ProductDetailView