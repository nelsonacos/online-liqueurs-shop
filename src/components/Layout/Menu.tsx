import { useContext } from 'react'
import Link from "next/link";
import { ModalContext, CartContext } from '../../context'
import styles from "../../styles/Menu.module.css";

const Menu = () => {
    const { open } = useContext(ModalContext)
    const { qty } = useContext(CartContext)
    const handleOpenModal = () => {
        open()
    }

    return (
        <nav className={styles.menu}>
            <div>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
            </div>

            <div></div>
            <a href="#" className={styles.link} onClick={handleOpenModal}>
                Cart ({qty})
            </a>
        </nav>
    );
}

export default Menu