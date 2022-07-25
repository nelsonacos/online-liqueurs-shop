import { useContext } from 'react'
import Link from "next/link"
import { ImageWithFallback } from '../Ui'
import { CartContext, ModalContext } from '../../context'
import { AddToCartButton } from '.'
import { Product as ProductInfo } from "../../interfaces"
import styles from "../../styles/Product.module.css"

type Props = {
  item: ProductInfo
}

const DefaultProductListView = ({ item }: Props) => {
  const { isOpen, open } = useContext(ModalContext)
  const { addItemToCart } = useContext(CartContext)
  return (
    <div className={styles.item}>
      <div>
        <Link href={`/product/${item.product_id}`}>
          <a>
            <ImageWithFallback
              src={item.image_url}
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
            openCart={open}
          />
        </div>
      </div>
    </div>
  )
}

export default DefaultProductListView