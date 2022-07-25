import { useState, useEffect } from "react";
import { Product as ProductInfo } from "../interfaces";

export const useCart = () => {
  const [items, setItems] = useState<Array<ProductInfo>>([]);
  //const [lastItem, setLastItem] = useState<ProductInfo | object>({});
  const [total, setTotal] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);

  useEffect(() => {
    setTotal(getTotal());
    setQty(getNumberOfItems());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleAddItemToCart = (item: ProductInfo) => {
    const temp: ProductInfo[] = [...items];
    if (temp.includes(item)) {
      alert("item ya existe ne el carro");
    } else {
      temp.push(item);
      setItems([...temp]);
    }
  };

  const handleRemoveItemToCart = (item: ProductInfo) => {
    const temp: ProductInfo[] = [...items];
    const newItems: ProductInfo[] = temp.filter(
      (product) => product.product_id !== item.product_id
    );
    setItems([...newItems]);
  };

  const getTotal = (): number => {
    const total = items.reduce((acc, item) => {
      const price = Number(item.total_price);
      return (acc += price);
    }, 0);
    return total;
  };

  const getNumberOfItems = () => {
    return items.length;
  };

  return {
    items,
    total,
    qty,
    handleAddItemToCart,
    handleRemoveItemToCart,
    getTotal,
  };
};
