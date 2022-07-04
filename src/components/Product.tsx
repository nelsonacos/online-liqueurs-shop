import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Product.module.css"
import ButtonCart from "./ButtonCart"
import ProductInfo from "../interfaces/Product"
import React from "react"

type ProductProps = {
    item: ProductInfo,
    showAs?: string,
}

const Product = ({ item, showAs }: ProductProps) => {
    if (showAs === "Page") {
        return (
            <div className={styles.page}>
                <div className={styles.image}>
                    <Image
                        src={item.image_url}
                        alt="item"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                    <div className={styles.price}>${item.total_price}</div>
                    <div>
                        <ButtonCart item={item} />
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
            <div>${item.total_price}</div>
            <div>
                <ButtonCart item={item} />
            </div>
        </div>
    );

}

export default Product