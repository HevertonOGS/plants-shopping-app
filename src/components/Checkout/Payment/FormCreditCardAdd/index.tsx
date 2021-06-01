import InputMask from 'react-input-mask'

import styles from './styles.module.scss'

interface Form {
    keyValue:               number;
    number:            string;
    holder:            string;
    validate:          string;
    cvv:               string;
    onInputChange: (event: any) => void;
    addNewCreditCard:  () => void;
}

export const FormCreditCardAdd = ({ keyValue, number, holder, validate, cvv, onInputChange, addNewCreditCard }: Form) => {
    
    const onChange = (event: any) => {
        onInputChange(event);
    }

    const submitForm = () => {
        addNewCreditCard();
    }

    return(
        <form className={styles.formCreditCard} action="">
            <input type="hidden" value={keyValue} />

            <div className={styles.formGroup}>
                <label htmlFor="cardNumberAdd">Número</label>
                <InputMask 
                    mask="9999 9999 9999 9999" 
                    name="number" 
                    id="cardNumberAdd" 
                    value={number} 
                    onChange={onChange} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="cardHolderAdd">Nome do titular</label>
                <input 
                    type="text" 
                    name="holder" 
                    id="cardHolderAdd" 
                    value={holder}
                    onChange={onChange} />
            </div>

            <div className={styles.formGroupContent}>
                <div className={styles.formGroup}>
                    <label htmlFor="cardValidAdd">Validade</label>
                    <InputMask 
                        mask="99/99" 
                        name="validate" 
                        id="cardValidAdd"
                        value={validate}
                        onChange={onChange} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="cardSecurityCodeAdd">CVV</label>
                    <InputMask 
                        mask="999" 
                        name="cvv" 
                        id="cardSecurityCodeAdd"
                        value={cvv}
                        onChange={onChange} />
                </div>
            </div>

            <div className={styles.contentButton}>
                <button 
                    className={styles.btnSave}
                    type="button" 
                    onClick={submitForm}>
                    + Adicionar Cartão
                </button>
            </div>
        </form>
    )
}