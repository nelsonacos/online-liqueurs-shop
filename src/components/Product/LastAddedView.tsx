import Image from "next/image"
import { AiFillCheckCircle } from "react-icons/ai";
import ProductInfo from '../../interfaces/Product'
import styles from "../../styles/Product.module.css"

type Props = {
    item: ProductInfo
}

const LastAddedView = ({ item }: Props) => {
    return (
        <div className={styles.addedItem}>
            <div className={styles.added}>
                <div className={styles.msg}>
                    <AiFillCheckCircle className={styles.icon} />
                    <h3>
                        Added to Cart
                    </h3>
                </div>
                <Image className={styles.image}
                    src={item.image_url}
                    alt="cart item"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default LastAddedView