import { useAppContext } from "./StateWrapper";
import ProductInfo from '../interfaces/Product';

type ButtonDeleteProps = {
    item: ProductInfo,
    showIn?: string,
    className: string,
}

const DeleteButton = ({ item, className }: ButtonDeleteProps) => {
    const cart = useAppContext();
    const handleDelete = () => {
        cart?.removeItemToCart(item)
    }
    return (
        <button className={className} onClick={handleDelete}>
            Delete
        </button>
    )
}

export default DeleteButton
