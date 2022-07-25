import { render, screen, fireEvent } from '@testing-library/react'
import ModalCloseButton from '../ModalCloseButton'

describe('Tests in <ModalCloseButton />', () => {
    const closeCart = jest.fn()
    const className = "delete"

    beforeEach(() => {
        render(<ModalCloseButton
            className={className}
            closeCart={closeCart}
        />)
    })

    test('It should contain the text Add to cart', () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    test('It should have the btn-cart class', () => {
        const button = screen.getByRole('button')
        expect(button.classList.contains(className)).toBeTruthy()
    })

    test('It should call closeCart only once', () => {
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(closeCart).toHaveBeenCalledTimes(1)
    })

})