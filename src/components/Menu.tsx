import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu() {

    const handleClickCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <nav className={styles.menu}>
            <div>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
            </div>

            <div></div>
            <a href="#" className={styles.link} onClick={handleClickCart}>
                Cart
            </a>
        </nav>
    );
}