import styles from './styles.module.scss'

interface Card {
    keyValue: number;
    type: string;
    selected: boolean;
    number: string;
    numberFinal: string;
    listCreditCardIcons: Array<string>;
    showCreditCardInfosModal: (key: number) => void;
}

export const CreditCard = ({ keyValue, type, selected, number, numberFinal, listCreditCardIcons, showCreditCardInfosModal }: Card) => {
    return (
        <div key={keyValue} className={`${styles.contentNumberCard} ${selected ? styles.selected : '' }`}>
            <div className={styles.contentBanner}>
                { listCreditCardIcons.includes(type) ? (
                <img src={`/icons/card/${type}.svg`} alt={`${type}`}/>
                ) : null }
            </div>

            <div className={styles.numberCard}>{ number != '' ? 'XXXX - XXXX - XXXX - ' + numberFinal : 'XXXX - XXXX - XXXX - XXXX' }</div>

            <div className={styles.contentIcon}>
                <button type='button' onClick={() => showCreditCardInfosModal(keyValue)}>
                    <img src='/icons/pencil.svg' alt="Editar"/>
                </button>
            </div>
        </div>
    )
}