import styles from './styles.module.scss';

export const Card = () => (
    <div className={styles.cardPayment}>
        <h1 className={styles.title}>Pagamento</h1>

        <div className={styles.boxCard}>
            <div className={styles.wrapperTopInfo}>
                <div className={styles.bankNameInfo}>
                    Nome do Banco
                </div>

                <div className={styles.brandCard}>
                    <img src='/checkout/logo-mastercard.png' alt='Bandeira do Cartão MasterCard' />
                </div>
            </div>

            <div className={styles.contentChip}>
                <div className={styles.contentImgChip}>
                    <img src='/payment/chip.png' alt="Chip Card"/>
                </div>

                <div className={styles.contentIconSignal}>
                    <img src='/payment/sinal.svg' alt="Signal Icon"/>
                </div>
            </div>

            <div className={styles.cardInfo}>
                <div className={styles.cardNumber}>
                    <span className={styles.sequenceNumber}>XXXX</span>  
                    <span className={styles.sequenceNumber}>XXXX</span> 
                    <span className={styles.sequenceNumber}>XXXX</span> 
                    <span className={styles.sequenceNumber}>XXXX</span>
                </div>

                <div className={styles.specifInfoCard}>
                    <div className={styles.cardDate}>
                        XX/XX
                    </div>

                    <div className={styles.cardCardholder}>
                        Nome do Portador
                    </div>
                </div>
            </div>
        </div>
    </div>
);