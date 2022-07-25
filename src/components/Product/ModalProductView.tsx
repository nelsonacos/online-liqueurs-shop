import { useContext } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from '../Ui'
import { CartContext, ModalContext } from '../../context'
import { Title, Price, DeleteToCartButton } from '.'
import { Product as ProductInfo } from '../../interfaces'
import styles from "../../styles/Product.module.css"

type Props = {
    item: ProductInfo
}

const ModalProductView = ({ item }: Props) => {
    const { close } = useContext(ModalContext)
    const { removeItemToCart } = useContext(CartContext);
    const handleCloseModal = () => {
        close();
    }
    return (
        <div className={styles.listItems}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <ImageWithFallback
                        src={item.image_url}
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        <Link href={`/product/${item.product_id}`}>
                            <a className={styles.link} onClick={handleCloseModal}>
                                <Title name={item.name} />
                            </a>
                        </Link>
                        <Price className={styles.price} price={item.total_price} />
                    </div>
                    <div className={styles.actions}>
                        <span className={styles.inStock}>In Stock</span>
                        <DeleteToCartButton
                            className={styles.delete}
                            item={item}
                            removeItemToCart={removeItemToCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProductView