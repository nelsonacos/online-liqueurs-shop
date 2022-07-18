import { useAppContext } from "./StateWrapper";
import ProductInfo from "../interfaces/Product";

type AddToCartProps = {
    item: ProductInfo,
    className: string,
}

const AddToCart = ({ item, className }: AddToCartProps) => {
    const cart = useAppContext();
    const handleClick = () => {
        cart.addItemToCart(item);

        if (!cart.isOpen) {
            cart.openCart();
        }
    }

    return (
        <button className={className} onClick={handleClick}>
            Add to cart
        </button>
    );
}

export default AddToCart