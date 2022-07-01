import Link from "next/link"
import styles from "../styles/Product.module.css"
import ButtonCart from "./ButtonCart"

const Product = (item) => {
    return (
        <div className={styles.item}>
            <div>
                <h3>
                    <Link href={`#`}>
                        <a>{item.name}</a>
                    </Link>
                </h3>
            </div>
            <div>{item.price}</div>
            <div>
                <ButtonCart item={item} />
            </div>
        </div>
    );
}

export default Product