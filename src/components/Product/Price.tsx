import React from 'react'

type Props = {
    price: string,
    className: string
}

const Price = ({ className, price }: Props) => {
    return (
        <span className={className}>{price}</span>
    )
}

export default Price