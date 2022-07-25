import ProductInfo from './Product'

export default interface CartContextProps {
    isOpen: boolean;
    items: ProductInfo[];
    lastItem?: ProductInfo | object;
    total: number,
    qty: number;
    openCart(): void;
    closeCart(): void;
    addItemToCart(item: ProductInfo): void;
    removeItemToCart(item: ProductInfo): void;
    getNumberOfItems(): number;
}