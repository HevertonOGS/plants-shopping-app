import styles from './styles.module.scss'

export const Highlight = () => {
    return(
        <div className={styles.highlightCheckout}>
            <h1 className={styles.title}>Checkout</h1>

            <div className={styles.wrapperInfo}>
                <div className={styles.containerInfo}>
                    <p className={styles.labelValue}>Preço Total</p>

                    <p className={styles.value}>R$<span>16</span>,00</p>
                </div>

                <div className={styles.containerImage}>
                    <img src='/checkout/img-1.png' alt="Imagem da Planta"/>
                </div>
            </div>
        </div>
    )
} 