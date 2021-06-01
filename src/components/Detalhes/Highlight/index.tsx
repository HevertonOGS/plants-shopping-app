import styles from './styles.module.scss'

interface Props {
    changeOpenModal: () => void;
}

export const Highlight = ({ changeOpenModal }:Props) => {
    return (
        <div className={styles.highlightDetails}>
        
            <div className={styles.wrapperTitleBtnInfo}>
                <h1 className={styles.namePlant}>Strelitzia Plant</h1>

                <button type='button' className={styles.btnInfo} onClick={changeOpenModal}>Mais Info.</button>
            </div>

            <p className={styles.value}>R$ <span>56</span>,00</p>

        </div>
    )
}