import { Product as ProductInfo } from '../../interfaces';

type DeleteToCartButtonProps = {
    item: ProductInfo,
    className: string,
    removeItemToCart(item: ProductInfo): void,
}

const DeleteToCartButton = ({ item, className, removeItemToCart }: DeleteToCartButtonProps) => {
    const handleDelete = () => {
        removeItemToCart(item)
    }
    return (
        <button className={className} onClick={handleDelete}>
            Delete
        </button>
    )
}

export default DeleteToCartButton