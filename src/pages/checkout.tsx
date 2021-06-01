import { Header } from '../components/Global/Header'
import { Highlight } from '../components/Checkout/Highlight'
import { Payment } from '../components/Checkout/Payment'
import { Shipping } from '../components/Checkout/Shipping'

import styles from '../styles/Checkout.module.scss'

export default function Checkout() {
    return (
        <div className={styles.checkoutPage}>
            <Header hasReturn={true} returnTo='/detalhes' hasCart={true} />
            <Highlight/>
            <Shipping/>
            <Payment/>
        </div>
    )
}