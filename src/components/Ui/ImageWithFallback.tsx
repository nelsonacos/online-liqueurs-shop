import { useEffect, useState } from 'react'
import fallback from '../../../public/images/not-found.png'
import Image from 'next/image'

type Props = {
    className?: string,
    src: string,
    width: number,
    height: number,
}

const FallbackImage = ({ src, ...rest }: Props) => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <Image
            {...rest}
            alt="product_item"
            src={imgSrc ? imgSrc : fallback.src}
            onError={() => {
                setImgSrc(fallback.src)
            }}
        />
    )
}

export default FallbackImage