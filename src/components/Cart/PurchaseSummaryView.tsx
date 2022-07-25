import { Subtitle, Qty, Total } from '.'
import styles from "../../styles/ShoppingCart.module.css"

type Props = {
    qty: number,
    total: number,
}

const PurchaseSummaryView = ({ qty, total }: Props) => {
    return (
        <>
            <Subtitle className={styles.subtitle} text="Cart subtotal" />
            <Qty className={styles.qty} qty={qty} />
            <Total className={styles.price} total={total} />
        </>
    )
}

export default PurchaseSummaryView