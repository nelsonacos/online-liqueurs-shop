import { useAppContext } from "./StateWrapper";
import Product from "./Product";
import styles from "../styles/shoppingCart.module.css";


const ShoppingCart = () => {
    const cart = useAppContext();
    const getTotal = () => {
        const total = cart.items.reduce((acc, item) => {
            const price = Number(item.total_price)
            return (acc += price);
        }, 0);
        return total;
    }

    const handleClickClose = () => {
        cart.closeCart();
    }

    return (
        <div
            className={styles.shoppingCart}
            style={{ display: cart.isOpen ? "block" : "none" }}
        >
            <button onClick={handleClickClose} className={styles.close}>
                Close
            </button>
            {cart.items.length === 0 ? (
                <div className={styles.empty}>Cart is empty</div>
            ) : (
                <>
                    <h3>Your items</h3>
                    <div className={styles.items}>
                        {cart.items &&
                            cart.items.length > 0  &&
                            cart.items.map((item, i) => (
                                <Product
                                    key={item + i.toString()}
                                    item={item}
                                    showAs="CartItem"
                                />
                            ))}
                    </div>
                    <div className={styles.total}>Total: ${getTotal().toFixed(2)}</div>
                </>
            )}
        </div>
    )
}

export default ShoppingCart