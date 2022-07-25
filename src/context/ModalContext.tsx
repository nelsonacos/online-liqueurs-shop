import { createContext } from 'react'
import { ModalContextProps } from '../interfaces'

export const ModalContext = createContext<ModalContextProps | object>({})