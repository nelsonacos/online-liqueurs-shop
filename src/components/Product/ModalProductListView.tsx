import Image from 'next/image'
import Link from 'next/link'
import { Title, Price, DeleteToCartButton } from '.'
import ProductInfo from '../../interfaces/Product'
import styles from "../../styles/Product.module.css"
import { useAppContext } from "../StateWrapper";

type Props = {
    item: ProductInfo
}

const ModalProductListView = ({ item }: Props) => {
    const { closeCart, removeItemToCart } = useAppContext();
    const handleClickClose = () => {
        closeCart();
    }
    return (
        <div className={styles.listItems}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image
                        src={item.image_url}
                        alt="cart item"
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        <Link href={`/product/${item.product_id}`}>
                            <a className={styles.link} onClick={handleClickClose}>
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

export default ModalProductListView