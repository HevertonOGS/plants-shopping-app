import InputMask from 'react-input-mask'

import { Switch } from '../../../Global/Switch';

import styles from './styles.module.scss'

interface Form {
    keyValue:                        number;
    numberEdit:                      string;
    holderEdit:                      string;
    validateEdit:                    string;
    cvvEdit:                         string;
    principalCardEdit:               boolean;
    principalCardDisabled:           boolean;
    activeRemoveCreditCardBox:       boolean;
    onInputChange:                   (event: any) => void;
    handleSwitchChange:              (event: any) => void;
    changeActiveRemoveCreditCardBox: (event: any) => void;
    editCreditCard:                  () => void;
    removeCreditCard:                () => void;
}

export const FormCreditCardEdit = (
    { 
        keyValue, 
        numberEdit, 
        holderEdit, 
        validateEdit, 
        cvvEdit, 
        principalCardEdit, 
        principalCardDisabled, 
        activeRemoveCreditCardBox,
        onInputChange, 
        handleSwitchChange, 
        changeActiveRemoveCreditCardBox,
        editCreditCard,
        removeCreditCard
    }: Form) => {

    const onChange = (event: any) => {
        onInputChange(event);
    }

    const onSwitchChange = (event: any) => {
        handleSwitchChange(event);
    }

    const onChangeActiveRemoveCreditCardBox = (event: any) => {
        changeActiveRemoveCreditCardBox(event);
    }

    const submitEditForm = () => {
        editCreditCard();
    }

    const submitRemoveForm = () => {
        removeCreditCard();
    }


    return (
        <form className={styles.formCreditCard} action="">
            <input type="hidden" value={keyValue} />

            <div className={styles.formGroup}>
                <label htmlFor="cardNumber">Número</label>
                <InputMask 
                    mask="9999 9999 9999 9999" 
                    name="number" 
                    id="cardNumber" 
                    value={numberEdit} 
                    onChange={onChange} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="cardHolder">Nome do titular</label>
                <input 
                    type="text" 
                    name="holder" 
                    id="cardHolder" 
                    value={holderEdit}
                    onChange={onChange} />
            </div>

            <div className={styles.formGroupContent}>
                <div className={styles.formGroup}>
                    <label htmlFor="cardValid">Validade</label>
                    <InputMask 
                        mask="99/99" 
                        name="validate" 
                        id="cardValid"
                        value={validateEdit}
                        onChange={onChange} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="cardSecurityCode">CVV</label>
                    <InputMask 
                        mask="999" 
                        name="cvv" 
                        id="cardSecurityCode"
                        value={cvvEdit}
                        onChange={onChange} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <div className={styles.formSwitch}>
                    <Switch
                        checkValue={principalCardEdit} 
                        onSwitchChange={onSwitchChange}
                        disabledValue={principalCardDisabled} />
                    <p>Marcar como principal</p>
                </div>
            </div>

            <div className={styles.contentButton}>
                <button 
                    className={`${styles.btnEdit} ${activeRemoveCreditCardBox ? styles.hidden : ''}`}
                    type="button" 
                    onClick={submitEditForm}>
                    Alterar Dados
                </button>
                <button 
                    className={`${styles.btnRemove} ${activeRemoveCreditCardBox ? styles.hidden : ''}`}
                    type="button"
                    onClick={onChangeActiveRemoveCreditCardBox}>
                    Remover Cartão
                </button>

                <div className={`${styles.confirmRemoveBox} ${activeRemoveCreditCardBox ? styles.active : ''}`}>
                    <p>Deseja realmente remover?</p>
                    <div className={styles.wrapperButton}>
                        <button 
                            type='button'
                            className={styles.danger}
                            onClick={submitRemoveForm}>
                            Sim
                        </button>
                        <button 
                            type='button'
                            className={styles.success}
                            onClick={onChangeActiveRemoveCreditCardBox}>
                            Não
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}