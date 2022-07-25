import { Product as ProductInfo } from '../../interfaces'
import { ModalHeaderView, ModalContentView } from '.'

type Props = {
    lastItem: ProductInfo,
    qty: number,
    total: number,
    items: ProductInfo[],
}

const ModalBodyView = ({ lastItem, qty, total, items }: Props) => {
    return (
        <>
            <ModalHeaderView lastItem={lastItem} qty={qty} total={total} />
            <ModalContentView items={items} />
        </>
    )
}

export default ModalBodyView