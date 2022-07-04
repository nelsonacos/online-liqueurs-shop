import Link from "next/link";
import {useAppContext} from "./StateWrapper";
import styles from "../styles/Menu.module.css";

const Menu = () => {
    const cart = useAppContext()
    const handleOpenCart = () => {
        cart.openCart()
    }

    return (
        <nav className={styles.menu}>
            <div>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
            </div>

            <div></div>
            <a href="#" className={styles.link} onClick={handleOpenCart}>
                Cart ({cart.getNumberOfItems()})
            </a>
        </nav>
    );
}

export default Menu