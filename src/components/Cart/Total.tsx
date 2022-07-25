import { ReactNode } from 'react'

type Props = {
    style?: object,
    className?: string,
    children: ReactNode,
}

const Total = ({style, className, children }: Props) => {
    return (
        <span style={style} className={className}>
            {children}
        </span>
    )
}

export default Total