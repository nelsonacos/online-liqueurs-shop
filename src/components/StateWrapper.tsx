import React, { ReactNode, useEffect } from 'react'
import { createContext, useContext, useState } from "react";
import ProductInfo from '../interfaces/Product';
import AppContextProps from '../interfaces/AppContextProps'

export type StateWrapperProps = {
    children: ReactNode
}

const AppContext = createContext<AppContextProps | object>({});

export default function StateWrapper({ children }: StateWrapperProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [items, setItems] = useState<Array<ProductInfo>>([]);
    //const [lastItem, setLastItem] = useState<ProductInfo | object>({});
    const [total, setTotal] = useState<number>(0);
    const [qty, setQty] = useState<number>(0);

    useEffect(() => {
        setTotal(getTotal())
        setQty(getNumberOfItems())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    const handleOpenCart = () => {
        setIsOpen(true);
    }

    const handleCloseCart = () => {
        setIsOpen(false);
    }

    const handleAddItemToCart = (item: ProductInfo) => {
        const temp: ProductInfo[] = [...items]
        if (temp.includes(item)) {
            alert('item ya existe ne el carro')
        }
        else {
            temp.push(item);
            setItems([...temp]);
        }
    }

    const handleRemoveItemToCart = (item: ProductInfo) => {
        const temp: ProductInfo[] = [...items]
        const newItems: ProductInfo[] = temp.filter(product => product.product_id !== item.product_id)
        setItems([...newItems])
    }

    //const getLastItem = () => {
      //  return items.at(-1)
    //}

    const getTotal = (): number => {
        const total = items.reduce((acc, item) => {
            const price = Number(item.total_price)
            return (acc += price);
        }, 0);
        return total;
    }

    const getNumberOfItems = () => {
        return items.length
    }

    return (
        <AppContext.Provider
            value={{
                items,
                //lastItem,
                isOpen,
                total,
                qty,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                removeItemToCart: handleRemoveItemToCart,
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