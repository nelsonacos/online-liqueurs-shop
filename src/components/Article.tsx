import { ReactNode } from 'react'

type Props = {
    className: string,
    children: ReactNode,
}

const Article = ({ className, children }: Props) => {
    return (
        <article className={className}>
            {children}
        </article>
    )
}

export default Article