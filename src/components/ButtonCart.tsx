import {useAppContext} from "./StateWrapper";
import ProductInfo from "../interfaces/Product";

type ButtonCartProps = {
    item: ProductInfo
}

const ButtonCart = ({item}: ButtonCartProps) => {
    const cart = useAppContext();
    const handleClick = () => {
        cart.addItemToCart(item);
        
        if (!cart.isOpen) {
            cart.openCart();
        }
    }
    return (
        <button className="btn-cart" onClick={handleClick}>
            Add to cart
        </button>
    );
}

export default ButtonCart