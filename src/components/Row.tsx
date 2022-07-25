import { ReactNode } from 'react'

type Props = {
    style?: object,
    className?: string,
    children: ReactNode,
}

const Row = ({ style, className, children }: Props) => {
    return (
        <div style={style}className={className}>
            {children}
        </div>
    )
}

export default Row