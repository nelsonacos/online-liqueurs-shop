import { render, screen } from '@testing-library/react'
import Total from '../Total'

describe('Tests in <Subtitle />', () => {
    const number = 45000
    const className = 'total'
    beforeEach(() => {
        render(<Total className={className}>{number}</Total>)
    })
    test('It Should render span element', () => {
        screen.getByText(/45000/i)
        screen.debug()
    })

    test('It should have the qty class', () => {
        const element = screen.getByText(/45000/i)
        expect(element.classList.contains(className)).toBeTruthy()
    })
})