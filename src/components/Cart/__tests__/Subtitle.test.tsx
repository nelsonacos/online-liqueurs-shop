import { render, screen } from '@testing-library/react'
import Subtitle from '../Subtitle'

describe('Tests in <Subtitle />', () => {
    const text = "text"
    const className = 'subtitle'
    beforeEach(() => {
        render(<Subtitle className={className}>{text}</Subtitle>)
    })
    test('It Should render span element', () => {
        screen.getByText(/text/i)
        screen.debug()
    })

    test('It should have the qty class', () => {
        const element = screen.getByText(/text/i)
        expect(element.classList.contains(className)).toBeTruthy()
    })
})