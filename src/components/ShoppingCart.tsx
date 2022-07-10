import { useAppContext } from "./StateWrapper";
import Product from "./Product";
import styles from "../styles/shoppingCart.module.css";
import { AiFillCloseCircle, AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";


const ShoppingCart = () => {
    const cart = useAppContext();
    const addedItem = cart?.items.at(-1);
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
            <div className={styles.closeContainer}>
                <button onClick={handleClickClose} className={styles.close}>
                    <AiOutlineCloseCircle />
                </button>
            </div>
            {cart.items.length === 0 ? (
                <div className={styles.empty}>Cart is empty</div>
            ) : (
                <>
                    <div className={styles.addedItem}>
                        <>
                            <Product
                                className={styles.added}
                                key={addedItem.product_id}
                                item={addedItem}
                                showAs="AddedItem"
                            />
                        </>
                        <div className={styles.cart}>
                            <div className={styles.infoDetail}>
                                <span className={styles.subtitle}>Cart subtotal</span>
                                <span className={styles.qty}>({cart.getNumberOfItems()} items):</span>
                                <span className={styles.price}>${getTotal().toFixed(2)}</span>
                            </div>
                            <div className={styles.buttonsDetail}>
                                <button className={styles.buttonGoCart}>Cart</button>
                                <button className={styles.buttonGoCheckout}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.listItems}>
                        <div className={styles.navItems}>
                            <a href="#" className={styles.all}>Show all</a>
                        </div>

                        <div className={styles.items}>
                            {cart.items &&
                                cart.items.length > 0 &&
                                cart.items.map((item, i) => (
                                    <Product
                                        key={item + i.toString()}
                                        item={item}
                                        showAs="InModal"
                                    />
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ShoppingCart