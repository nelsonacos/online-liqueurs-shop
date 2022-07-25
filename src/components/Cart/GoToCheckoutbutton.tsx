type Props = {
    className: string,
}

const GoToCheckoutbutton = ({ className }: Props) => {
    return (
        <button className={className}>Proceed to Checkout</button>
    )
}

export default GoToCheckoutbutton