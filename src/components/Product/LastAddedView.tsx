import { ImageWithFallback } from '../Ui'
import styles from "../../styles/Product.module.css"
import { Product as ProductInfo } from '../../interfaces'
import { AiFillCheckCircle } from "react-icons/ai";

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
                <ImageWithFallback className={styles.image}
                    src={item.image_url}
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default LastAddedView