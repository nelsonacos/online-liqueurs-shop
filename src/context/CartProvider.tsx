import React, { ReactNode } from 'react'
import { useCart } from '../hooks'
import { CartContext } from '.'

type Props = {
    children: ReactNode
}

const CartProvider = ({ children }: Props) => {

    const {
        items,
        qty,
        total,
        handleAddItemToCart,
        handleRemoveItemToCart,
    } = useCart()

    return (
        <CartContext.Provider
            value={{
                items,
                //lastItem,
                total,
                qty,
                addItemToCart: handleAddItemToCart,
                removeItemToCart: handleRemoveItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider