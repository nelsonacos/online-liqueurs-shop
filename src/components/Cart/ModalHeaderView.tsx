import styles from "../../styles/ShoppingCart.module.css"
import { Product as ProductInfo } from '../../interfaces'
import { LastAddedView } from "../Product";
import { PurchaseSummaryView, ActionButtonsView } from '.'
import { Column, Row } from '../Ui'

type Props = {
    qty: number,
    total: number,
    lastItem: ProductInfo,
}

const ModalHeaderView = ({ lastItem, qty, total }: Props) => {
    return (
        <div className={styles.addedItem}>
            <LastAddedView item={lastItem} />
            <Column className={styles.cart}>
                <Row className={styles.infoDetail}>
                    <PurchaseSummaryView qty={qty} total={total} />
                </Row>
                <Row className={styles.buttonsDetail}>
                    <ActionButtonsView />
                </Row>
            </Column>
        </div>
    )
}

export default ModalHeaderView