import React, { ReactNode } from 'react'
import { createContext, useContext, useState } from "react";
import ProductInfo from '../interfaces/Product';
import AppContextProps from '../interfaces/AppContextProps'

export type StateWrapperProps = {
    children: ReactNode
}

const AppContext = createContext<AppContextProps | null>(null);

export default function StateWrapper({ children }: StateWrapperProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [items, setItems] = useState<Array<ProductInfo>>([]);

    const handleOpenCart = () => {
        setIsOpen(true);
    }

    const handleCloseCart = () => {
        setIsOpen(false);
    }

    const handleAddItemToCart = (item: ProductInfo) => {
        const temp: ProductInfo[] = [...items]
        temp.push(item);
        setItems([...temp]);
    }

    const getNumberOfItems = () => {
        const qty = items.length
        return qty;
    }

    return (
        <AppContext.Provider
            value={{
                items,
                isOpen,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                getNumberOfItems: getNumberOfItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}