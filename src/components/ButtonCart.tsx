import { useAppContext } from "./StateWrapper";
import ProductInfo from "../interfaces/Product";

type ButtonCartProps = {
    item: ProductInfo,
    showIn: string,
}

const ButtonCart = ({ item, showIn }: ButtonCartProps) => {
    const cart = useAppContext();
    const handleClick = () => {
        cart.addItemToCart(item);

        if (!cart.isOpen) {
            cart.openCart();
        }
    }

    if (showIn === "page") {
        return (
            <button className="btn-cart-xl" onClick={handleClick}>
                Add to cart
            </button>
        )
    }

    return (
        <button className="btn-cart" onClick={handleClick}>
            Add to cart
        </button>
    );
}

export default ButtonCart