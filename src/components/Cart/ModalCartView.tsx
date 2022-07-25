import { useContext } from 'react'
import styles from "../../styles/ShoppingCart.module.css"
import { ModalContext, CartContext  } from '../../context'
import { Modal } from '../Ui'
import { ModalCloseButton, CartEmpty, ModalBodyView } from '.'


const ModalCartView = () => {
    const { isOpen, close } = useContext(ModalContext)
    const { items, total, qty } = useContext(CartContext);
    const lastItem = items.at(-1)

    return (
        <Modal className={styles.shoppingCart} style={{ display: isOpen ? "block" : "none" }}>
            <ModalCloseButton closeCart={close} className={styles.closeContainer} />
            {
                items.length === 0
                    ? <CartEmpty className={styles.empty} />
                    : <ModalBodyView lastItem={lastItem} qty={qty} total={total} items={items} />
            }
        </Modal>
    )
}

export default ModalCartView