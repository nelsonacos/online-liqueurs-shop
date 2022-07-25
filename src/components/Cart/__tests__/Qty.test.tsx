import { render, screen } from '@testing-library/react'
import Qty from '../Qty'

describe('Tests in <Qty />', () => {
    const qty = 5
    const className = 'qty'
    beforeEach(() => {
        render(<Qty className={className}>{qty}</Qty>)
    })
    test('It Should render span element', () => {
        screen.getByText(/5/i)
        screen.debug()
    })

    test('It should have the qty class', () => {
        const element = screen.getByText(/5/i)
        expect(element.classList.contains(className)).toBeTruthy()
    })
})