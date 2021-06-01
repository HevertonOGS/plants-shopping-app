import { Header } from "../components/Global/Header";
import { Card } from "../components/Pagamento/Card";
import { Promotion } from "../components/Pagamento/Promotion";

import styles from '../styles/Pagamento.module.scss';

export default function Pagamento() {
    return(
        <div className={styles.paymentPage}>
            <Header 
                hasReturn={true} 
                returnTo='/checkout'
                hasCart={true} />
            <Card />
            <Promotion />
        </div>
    )
}