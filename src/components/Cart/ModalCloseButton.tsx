import styles from "../../styles/ShoppingCart.module.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalCloseButtonProps = {
    closeCart(): void,
    className: string
}

const ModalCloseButton = ({ closeCart, className }: ModalCloseButtonProps) => {

    const handleClick = () => {
        closeCart();
    }
    return (
        <div className={className}>
            <button onClick={handleClick} className={styles.close}>
                <AiOutlineCloseCircle />
            </button>
        </div>
    )
}

export default ModalCloseButton