import { GoToCartButton, GoToCheckoutbutton } from '.'
import styles from "../../styles/ShoppingCart.module.css"

const ActionButtonsView = () => {
    return (
        <>
            <GoToCartButton className={styles.buttonGoCart} />
            <GoToCheckoutbutton className={styles.buttonGoCheckout} />
        </>
    )
}

export default ActionButtonsView