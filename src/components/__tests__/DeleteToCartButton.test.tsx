import { render, screen, fireEvent } from '@testing-library/react'
import ProductInfo from '../../interfaces/Product'
import liqueurs from '../../mocks/liqueurs-data.json'
import DeleteToCartButton from '../DeleteToCartButton'

describe('Tests in <DeleteToCartButton />', () => {
    const item: ProductInfo = liqueurs[0]
    const removeItemToCart = jest.fn()

    beforeEach(() => {
        render(<DeleteToCartButton
            item={item}
            className="delete"
            removeItemToCart={removeItemToCart}
        />)
    })

    test('It should contain the text Delete', () => {
        const button = screen.getByRole('button', { name: /Delete/i })
        expect(button).toBeInTheDocument()
    })

    test('It should have the delete class', () => {
        const button = screen.getByRole('button', { name: /Delete/i })
        expect(button.classList.contains("delete")).toBeTruthy()
    })

    test('It should call removeItemToCart() only once', () => {
        const button = screen.getByRole('button', { name: /Delete/i })
        fireEvent.click(button)
        expect(removeItemToCart).toHaveBeenCalledTimes(1)
    })

    test('It should call removeItemToCart() with item as argument', () => {
        const button = screen.getByRole('button', { name: /Delete/i })
        fireEvent.click(button)
        expect(removeItemToCart).toHaveBeenCalledWith(item)
    })

})