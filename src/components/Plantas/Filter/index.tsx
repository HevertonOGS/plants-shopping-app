import styles from './styles.module.scss'

interface Props {
    openFilter: boolean;
    changeOpenFilter: () => void;
}

export const Filter = ({ openFilter, changeOpenFilter }: Props) => (
    <div className={`${styles.containerFilter} ${ openFilter ? styles.active : null } `}>

        <div className={styles.filterArea}>
            <button className={styles.btnClose} onClick={changeOpenFilter}>
                <img src="/icons/close.svg" alt="Fechar" />
            </button>

            <div className={styles.headerArea}>
                <h2 className={styles.titleSection}>Filtros</h2>
                <button className={styles.btnClear}>Limpar tudo</button>
            </div>

            <ul className={styles.listFilter}>
                <li className={styles.listFilterItem}>
                    <div className={styles.filterContent}>
                        <button className={styles.btnOpen}>+</button>

                        <span>Faixa de preço</span>

                        <button className={styles.btnClear}>Limpar</button>
                    </div>
                </li>

                <li className={styles.listFilterItem}>
                    <div className={styles.filterContent}>
                        <button className={styles.btnOpen}>+</button>

                        <span>Altura</span>

                        <button className={styles.btnClear}>Limpar</button>
                    </div>
                </li>

                <li className={styles.listFilterItem}>
                    <div className={styles.filterContent}>
                        <button className={styles.btnOpen}>+</button>

                        <span>Cor</span>

                        <button className={styles.btnClear}>Limpar</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);