import Link from 'next/link'

import styles from './styles.module.scss'

export const Offers = () => {
    return (
        <div className={styles.contentOffers}>
            <h2 className={styles.title}>Ofertas</h2>

            <ul className={styles.listOffers}>
                <li className={styles.itemOffer}>
                    <Link href="/detalhes">
                        <a className={styles.linkOffer}>
                            <div className={styles.contentImg}>
                                <img className={styles.imgItem} src='/list/img-3.png' alt="Picsum Offer"/>
                            </div>

                            <div className={styles.contentInfos}>
                                <h3 className={styles.titleOffer}>Planta suculenta</h3>

                                <p className={styles.valueOffer}>R$<span>8</span>,00</p>
                            </div>

                            <div className={styles.discountOffer}>
                                30% Off
                            </div>
                        </a>
                    </Link>
                </li>

                <li className={styles.itemOffer}>
                    <Link href="/detalhes">
                        <a className={styles.linkOffer}>
                            <div className={styles.contentImg}>
                                <img className={styles.imgItem} src='/list/img-4.png' alt="Picsum Offer 2"/>
                            </div>

                            <div className={styles.contentInfos}>
                                <h3 className={styles.titleOffer}>Planta suculenta</h3>

                                <p className={styles.valueOffer}>R$<span>8</span>,00</p>
                            </div>

                            <div className={styles.discountOffer}>
                                30% Off
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}