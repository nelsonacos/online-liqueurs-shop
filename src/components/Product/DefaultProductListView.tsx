import Image from "next/image"
import Link from "next/link"
import { AddToCartButton } from '.'
import ProductInfo from "../../interfaces/Product"
import styles from "../../styles/Product.module.css"
import { useAppContext } from "../StateWrapper";

type Props = {
  item: ProductInfo
}

const DefaultProductListView = ({item}: Props) => {
  const { isOpen, openCart, addItemToCart } = useAppContext()
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
  )
}

export default DefaultProductListView