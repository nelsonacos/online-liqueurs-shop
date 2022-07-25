import React, { ReactNode } from 'react'
import { useModal } from '../hooks'
import { ModalContext } from '.'

type Props = {
    children: ReactNode
}

const ModalProvider = ({ children }: Props) => {

    const { isOpen, open, close } = useModal()

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider