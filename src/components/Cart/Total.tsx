import { ReactNode } from 'react'

type Props = {
    style?: object,
    className?: string,
    total: number,
}

const Total = ({ style, className, total }: Props) => {
    return (
        <span style={style} className={className}>
            {total.toFixed(2)}
        </span>
    )
}

export default Total