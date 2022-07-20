import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Product.module.css"
import AddToCartButton from "./AddToCartButton"
import DeleteButton from './DeleteButton'
import { AiFillCheckCircle } from "react-icons/ai";
import ProductInfo from "../interfaces/Product"
import { useAppContext } from "./StateWrapper";

type ProductProps = {
    item: ProductInfo,
    showAs?: string,
    className?: string,
}

const Product = ({ item, showAs }: ProductProps) => {
    const { addItemToCart, isOpen, openCart, closeCart } = useAppContext();
    const handleClickClose = () => {
        closeCart();
    }
    if (showAs === "Page") {
        console.log(item.image_url)
        return (
            <div className={styles.page}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={item.image_url}
                        alt="item"
                        width={350}
                        height={350}
                    />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        {item.name}
                    </h2>
                    <div className={styles.price}>
                        ${item.total_price}
                    </div>
                    <AddToCartButton
                        item={item}
                        className="btn-cart-xl"
                        addItemToCart={addItemToCart}
                        isOpen={isOpen}
                        openCart={openCart}
                    />
                </div>
                <div className={styles.aditionals}>
                    <h3 className={styles.title}>
                        the best beer in the world
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        );
    }

    if (showAs === "recommendations-page") {
        return (
            <div className={styles.pageRecommendations}>
                <div>
                    <Link href={`/product/${item.product_id}`}>
                        <a>
                            <Image
                                src={item.image_url}
                                alt="Product Details Image"
                                width={250}
                                height={250}
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <h3 className={styles.link}>
                        <Link href={`/product/${item.product_id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </h3>
                </div>
                <div className={styles.default}>
                    <div className={styles.price}>
                        ${item.total_price}
                    </div>
                    <div>
                        <AddToCartButton
                            item={item}
                            className="btn-cart"
                            addItemToCart={addItemToCart}
                            isOpen={isOpen}
                            openCart={openCart}
                        />
                    </div>
                </div>
            </div>
        );
    }

    if (showAs === "CartItem") {
        return (
            <div className={styles.listItem}>
                <div>
                    <Image
                        src={item.image_url}
                        alt="cart item"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <div>{item.name}</div>
                    <div>${item.total_price}</div>
                </div>
            </div>
        );
    }

    if (showAs === "AddedItem") {
        return (
            <div className={styles.addedItem}>
                <div className={styles.added}>
                    <div className={styles.msg}>
                        <AiFillCheckCircle className={styles.icon} />
                        <h3>
                            Added to Cart
                        </h3>
                    </div>
                    <Image className={styles.image}
                        src={item.image_url}
                        alt="cart item"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        );
    }

    if (showAs === "InModal") {
        return (
            <div className={styles.listItems}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <Image
                            src={item.image_url}
                            alt="cart item"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.info}>
                            <Link href={`/product/${item.product_id}`}>
                                <a className={styles.link} onClick={handleClickClose}>{item.name}</a>
                            </Link>
                            <div className={styles.price}>${item.total_price}</div>
                        </div>
                        <div className={styles.actions}>
                            <span className={styles.inStock}>In Stock</span>
                            <DeleteButton className={styles.delete} item={item} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.item}>
            <div>
                <Link href={`/product/${item.product_id}`}>
                    <a>
                        <Image
                            src={item.image_url}
                            alt="Product Details Image"
                            width={250}
                            height={250}
                        />
                    </a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link href={`/product/${item.product_id}`}>
                        <a>{item.name}</a>
                    </Link>
                </h3>
            </div>
            <div className={styles.default}>
                <div className={styles.price}>
                    ${item.total_price}
                </div>
                <div>
                    <AddToCartButton
                        item={item}
                        className="btn-cart"
                        addItemToCart={addItemToCart}
                        isOpen={isOpen}
                        openCart={openCart}
                    />
                </div>
            </div>
        </div>
    );

}

export default Product