import { ReactNode } from 'react'

type Props = {
    style?: object,
    className?: string,
    qty: number,
}

const Qty = ({style, className, qty }: Props) => {
    return (
        <span style={style} className={className}>
            ({qty} items)
        </span>
    )
}

export default Qty