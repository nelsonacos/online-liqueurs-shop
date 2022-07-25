import { createContext } from 'react'
import { CartContextProps } from '../interfaces'

export const CartContext = createContext<CartContextProps | object>({})