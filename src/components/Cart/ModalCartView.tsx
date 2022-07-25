import { useAppContext } from "../StateWrapper";
import { Row, Column } from '..'
import { Subtitle, Qty, Total, ModalCloseButton } from '.'
import { LastAddedView, ModalProductListView } from "../Product";
import ProductInfo from '../../interfaces/Product'
import styles from "../../styles/ShoppingCart.module.css"

const ShoppingCart = () => {
    const {
        items,
        closeCart,
        isOpen,
        total,
        qty
    } = useAppContext();

    const lastItem = items.at(-1)

    return (
        <Row
            className={styles.shoppingCart}
            style={{ display: isOpen ? "block" : "none" }}
        >
            <Row className={styles.closeContainer}>
                <ModalCloseButton closeCart={closeCart} className={styles.close} />
            </Row>
            {items.length === 0 ? (
                <div className={styles.empty}>Cart is empty</div>
            ) : (
                <>
                    <Row className={styles.addedItem}>
                       <LastAddedView item={lastItem} />
                        <Column className={styles.cart}>
                            <Row className={styles.infoDetail}>
                                <Subtitle className={styles.subtitle}>Cart subtotal</Subtitle>
                                <Qty className={styles.qty}>({qty} items):</Qty>
                                <Total className={styles.price}>${total.toFixed(2)}</Total>
                            </Row>
                            <Row className={styles.buttonsDetail}>
                                <button className={styles.buttonGoCart}>Cart</button>
                                <button className={styles.buttonGoCheckout}>Proceed to Checkout</button>
                            </Row>
                        </Column>
                    </Row>
                    <Row className={styles.listItems}>
                        <Row className={styles.navItems}>
                            <a href="#" className={styles.all}>Show all</a>
                        </Row>

                        <Row className={styles.items}>
                            {items &&
                                items.length > 0 &&
                                items.map((item: ProductInfo, i: number) => (
                                    <ModalProductListView
                                        key={item + i.toString()}
                                        item={item}
                                    />
                                ))}
                        </Row>
                    </Row>
                </>
            )}
        </Row>
    )
}

export default ShoppingCart