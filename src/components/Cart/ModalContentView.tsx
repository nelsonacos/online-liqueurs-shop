import styles from "../../styles/ShoppingCart.module.css"
import { Product as ProductInfo } from '../../interfaces'
import { RenderProductList } from "../Ui";
import { ModalProductView } from '../Product'
import { Row } from '../Ui'

type Props = {
    items: ProductInfo[],
}

const ModalContentView = ({ items }: Props) => {
    return (
        <Row className={styles.listItems}>
            <Row className={styles.navItems}>
                <a href="#" className={styles.all}>Show all</a>
            </Row>
            <RenderProductList className={styles.items} list={items} View={ModalProductView} />
        </Row>
    )
}

export default ModalContentView