import styles from './styles.module.scss';

export const Promotion = () => (
    <div className={styles.paymentPromotion}>
        <h2 className={styles.paymentPromotionTitle}>Use o código promocional</h2>

        <input className={styles.promotionInput} type="text" placeholder='PROMO40' name="" id=""/>

        <div className={styles.paymentDetails}>
            <h3 className={styles.paymentDetailsTitle}>Detalhes do Preço</h3>

            <ul className={styles.listPaymentDetails}>
                <li className={styles.paymentDetailsItem}>
                    <span className={styles.labelPaymentDetails}>Preço</span>

                    <span className={styles.valuePaymentDetails}>R$<span>16</span>,00</span>
                </li>

                <li className={styles.paymentDetailsItem}>
                    <span className={styles.labelPaymentDetails}>Taxa de Entrega</span>

                    <span className={styles.valuePaymentDetails}>+ R$<span>2</span>,00</span>
                </li>

                <li className={styles.paymentDetailsItem}>
                    <span className={styles.labelPaymentDetails}>Desconto</span>

                    <span className={styles.valuePaymentDetails}>- R$<span>2</span>,00</span>
                </li>
            </ul>
        </div>

        <div className={styles.contentPaymentButton}>
            <a href="javascript:void(0)">Pagar R$ 16,00</a>
        </div>
    </div>
);