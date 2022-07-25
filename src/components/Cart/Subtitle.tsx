import { ReactNode } from 'react'

type Props = {
    style?: object,
    className?: string,
    text: string,
}

const Subtitle = ({style, className, text }: Props) => {
    return (
        <span style={style} className={className}>
            {text}
        </span>
    )
}

export default Subtitle