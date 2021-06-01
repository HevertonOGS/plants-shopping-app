import Link from 'next/link';

import styles from './styles.module.scss'

interface Props {
    addButtonToCart?: boolean;
}

export const Description = ({addButtonToCart = true }:Props) => {
    return (
        <div className={styles.descriptionDetails}>
            <div className={styles.wrapperInfos}>
                <div className={styles.contentText}>
                    <p className={styles.itemText}>
                        <span className={styles.labelText}>Categoria</span>
                        <span className={styles.valueText}>Interior</span>
                    </p>

                    <p className={styles.itemText}>
                        <span className={styles.labelText}>Altura</span>
                        <span className={styles.valueText}>60,96cm</span>
                        <span className={styles.valueText}>à 9,14m</span>
                    </p>

                    <p className={styles.itemText}>
                        <span className={styles.labelText}>Família</span>
                        <span className={styles.valueText}>Strelitziaceae</span>
                    </p>
                </div>

                <div className={styles.contentImage}>
                    <img src='/details/img.png' alt="Plant description"/>
                </div>
            </div>

            { addButtonToCart ? (
            <div className={styles.wrapperBtn}>
                <Link href="/checkout">
                    <a className={styles.btnCard} href="javascript:void(0)">Adicionar ao Carrinho</a>
                </Link>
            </div>
            ): null}
        </div>
    )
}