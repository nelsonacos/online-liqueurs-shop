type Props = {
    className: string,
}

const CartEmpty = ({ className }: Props) => {
    return (
        <div className={className}>Cart is empty</div>
    )
}

export default CartEmpty