import ProductInfo from './Product'

export default interface AppContextProps {
    isOpen: boolean;
    items: ProductInfo[];
    openCart(): void;
    closeCart(): void;
    addItemToCart(item: ProductInfo): void;
    removeItemToCart(item: ProductInfo): void;
    getNumberOfItems(): number;
}