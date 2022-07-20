import ProductInfo from "../interfaces/Product";

type AddToCartButtonProps = {
    item: ProductInfo,
    className: string,
    addItemToCart(item: ProductInfo): void,
    isOpen: boolean,
    openCart(): void,
}

const AddToCartButton = ({ item, className, addItemToCart, isOpen, openCart }: AddToCartButtonProps) => {
    const handleClick = () => {
        addItemToCart(item);

        if (!isOpen) {
            openCart();
        }
    }

    return (
        <button className={className} onClick={handleClick}>
            Add to cart
        </button>
    );
}

export default AddToCartButton