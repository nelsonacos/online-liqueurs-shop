import { render, screen, fireEvent } from '@testing-library/react'
import ProductInfo from '../../../interfaces/Product'
import liqueurs from '../../../mocks/liqueurs-data.json'
import AddToCartButton from '../AddToCartButton'

describe('Tests in <AddToCart />', () => {
    const item: ProductInfo = liqueurs[0]
    const addItemToCart = jest.fn()
    const isOpen = false
    const openCart = jest.fn()

    beforeEach(() => {
        render(<AddToCartButton
            item={item}
            className="btn-cart"
            addItemToCart={addItemToCart}
            isOpen={isOpen}
            openCart={openCart}
        />)
    })

    test('It should contain the text Add to cart', () => {
        const button = screen.getByRole('button', { name: /Add to cart/i })
        expect(button).toBeInTheDocument()
    })

    test('It should have the btn-cart class', () => {
        const button = screen.getByRole('button', { name: /Add to cart/i })
        expect(button.classList.contains("btn-cart")).toBeTruthy()
    })

    test('It should call additemToCart only once', () => {
        const button = screen.getByRole('button', { name: /Add to cart/i })
        fireEvent.click(button)
        expect(addItemToCart).toHaveBeenCalledTimes(1)
    })

    test('It should call additemToCart with item as argument', () => {
        const button = screen.getByRole('button', { name: /Add to cart/i })
        fireEvent.click(button)
        expect(addItemToCart).toHaveBeenCalledWith(item)
    })

})