import { useState } from 'react'
import Link     from 'next/link'

import { Modal } from '../../Global/Modal'
import { Switch } from '../../Global/Switch'

import creditCardType from 'credit-card-type'
import InputMask from 'react-input-mask'

import styles from './styles.module.scss'
import { CreditCard } from './CreditCard/CreditCard'
import { FormCreditCardAdd } from './FormCreditCardAdd'
import { FormCreditCardEdit } from './FormCreditCardEdit'

export const Payment = () => {

    const listDisabledPaymentType = [
        'PIX',
        'Debit',
        'Ticket',
    ];

    // List of Card Flags Icons
    const listCreditCardIcons = [
        'american-express',
        'diners-club',
        'discover',
        'elo',
        'hipercard',
        'jcb',
        'maestro',
        'mastercard',
        'mir',
        'visa',
    ];

    // Selected Payment Type
    const [typePayment, setTypePayment] = useState('Credit');

    //  ## Config of Credit Card ##    
    const [openModalCreditCard, setOpenModalCreditCard] = useState(false);
    const [openModalCreditCardAdd, setOpenModalCreditCardAdd] = useState(false);
    const [activeRemoveCreditCardBox, setActiveRemoveCreditCardBox] = useState(false);

    const [formCreditCard, setFormCreditCard] = useState({
        key:      0,
        number:   '',
        holder:   '',
        validate: '',
        cvv:      '',
        selected: false,
        disabledSelected: false,
    });

    const [checkedSwitchValue, setCheckedSwitchValue] = useState(false);

    const handleSwitchChange = (checkedSwitchValue: boolean) => {
        setCheckedSwitchValue(checkedSwitchValue);
        setFormCreditCard({...formCreditCard, selected: checkedSwitchValue},)
    }

    const onInputChange = (event: any) => {
        setFormCreditCard({...formCreditCard, [event.target.name]: event.target.value})
    }

    const [creditCardInfo, setCreditCardInfo] = useState([
        {
            key: 1,
            number: '5581 7031 1939 5411',
            numberFinal: '5411', 
            holder: 'ALEX O G SILVA',
            validate: '12/21',
            cvv: '464',
            type: 'mastercard',
            selected: true,
        }
    ]);

    const showCreditCardInfosModal = (key: number) => {
        const selectedCard = creditCardInfo.filter(card => { return card.key === key })[0];

        setFormCreditCard({
            key:      selectedCard.key,
            number:   selectedCard.number,
            holder:   selectedCard.holder,
            validate: selectedCard.validate,
            cvv:      selectedCard.cvv,
            selected: selectedCard.selected,
            disabledSelected: creditCardInfo.length > 1 ? false : true,
        });

        // define value checkbox
        setCheckedSwitchValue(selectedCard.selected ? true : false);

        changeOpenModalCreditCard();
    }

    const changeOpenModalCreditCard = () => {
        setOpenModalCreditCard(!openModalCreditCard);
    }

    const changeOpenModalCreditCardAdd = () => {
        setFormCreditCard({
            key:      0,
            number:   '',
            holder:   '',
            validate: '',
            cvv:      '',
            selected: false,
            disabledSelected: creditCardInfo.length > 0 ? false : true,
        });

        setOpenModalCreditCardAdd(!openModalCreditCardAdd);
    }

    const changeActiveRemoveCreditCardBox = () => {
        setActiveRemoveCreditCardBox(!activeRemoveCreditCardBox);
    }

    const typePaymentActive = (event: any) => {
        if(!listDisabledPaymentType.includes(event.target.value)) 
            setTypePayment(event.target.value);
    }

    const editDataFormCreditCard = () => {
        let creditCardNumberWithoutSpaces = formCreditCard.number.split(" ").join("");
        let typeCreditCardName       = creditCardType(creditCardNumberWithoutSpaces).length !== 0 ? creditCardType(creditCardNumberWithoutSpaces)[0].type : '';
        let lastFourCreditCardNumber = creditCardNumberWithoutSpaces.substr(creditCardNumberWithoutSpaces.length - 4); 
        
        let updateValue = creditCardInfo.filter((card) => { 
            if(card.key === formCreditCard.key) {
                card.key         = formCreditCard.key
                card.number      = formCreditCard.number
                card.numberFinal = lastFourCreditCardNumber
                card.holder      = formCreditCard.holder
                card.validate    = formCreditCard.validate
                card.cvv         = formCreditCard.cvv
                card.type        = typeCreditCardName 
                card.selected    = formCreditCard.selected
            } 

            if(card.key !== formCreditCard.key && formCreditCard.selected) 
                card.selected = false

            return card;
        });

        setCreditCardInfo(updateValue)
        
        setFormCreditCard({
            key:      0,
            number:   '',
            holder:   '',
            validate: '',
            cvv:      '',
            selected: false,
            disabledSelected: false,
        });

        setOpenModalCreditCard(false)
    }

    const addNewCreditCard = () => {
        // format form datas
        let creditCardNumberWithoutSpaces = formCreditCard.number.split(" ").join("");
        
        let typeCreditCardName = creditCardType(creditCardNumberWithoutSpaces).length !== 0 ? creditCardType(creditCardNumberWithoutSpaces)[0].type : '';
        let lastFourCreditCardNumber = creditCardNumberWithoutSpaces.substr(creditCardNumberWithoutSpaces.length - 4);

        // get the last key
        const lastCreditCardAdd     = creditCardInfo.length !== 0 ? creditCardInfo[creditCardInfo.length - 1].key : 0;
        const newCreditCardAddIndex = creditCardInfo.length;

        // add datas on array
        const newCreditCardList                  = [...creditCardInfo]
        newCreditCardList[newCreditCardAddIndex] = {
            key:         (lastCreditCardAdd + 1),
            number:      formCreditCard.number,
            numberFinal: lastFourCreditCardNumber,
            holder:      formCreditCard.holder,
            type:        typeCreditCardName,
            cvv:         formCreditCard.cvv,
            validate:    formCreditCard.validate,
            selected:    false
        }

        setCreditCardInfo(newCreditCardList);

        setFormCreditCard({
            key:      0,
            number:   '',
            holder:   '',
            validate: '',
            cvv:      '',
            selected: false,
            disabledSelected: false,
        });

        changeOpenModalCreditCardAdd();
    }

    const removeCreditCard = () => {
        const newCreditCardList = creditCardInfo.filter((card, index) => {
            if(card.key === formCreditCard.key 
                && card.selected 
                && (typeof creditCardInfo[index - 1] !== 'undefined' || typeof creditCardInfo[index + 1] !== 'undefined')) {

                if(card.selected && (typeof creditCardInfo[index - 1] !== 'undefined' || typeof creditCardInfo[index + 1] !== 'undefined')) {

                    if(typeof creditCardInfo[index - 1] !== 'undefined')
                        creditCardInfo[index - 1].selected = true
                    else 
                        creditCardInfo[index + 1].selected = true
                }
            } 

            return card.key !== formCreditCard.key
        });

        setCreditCardInfo(newCreditCardList);

        setFormCreditCard({
            key:      0,
            number:   '',
            holder:   '',
            validate: '',
            cvv:      '',
            selected: false,
            disabledSelected: false,
        });

        changeActiveRemoveCreditCardBox();
        changeOpenModalCreditCard();
    }

    return(
        <div className={styles.paymentCheckout}>
            <div className={styles.boxPayment}>
                <h2 className={styles.title}>Forma de Pagamento</h2>

                <div className={styles.contentListOptions}>
                    <ul className={styles.listOptions}>
                        <li 
                            className={`
                                ${typePayment === 'Credit' ? styles.active : ''}
                                ${listDisabledPaymentType.includes('Credit') ? styles.disabled : ''}
                            `}>
                            <button type="button" onClick={typePaymentActive} value='Credit'>C. Crédito</button>
                        </li>
                        <li 
                            className={`
                                ${typePayment === 'PIX' ? styles.active : ''}
                                ${listDisabledPaymentType.includes('PIX') ? styles.disabled : ''}
                            `}>
                            <button type="button" onClick={typePaymentActive} value='PIX'>PIX</button>
                        </li>
                        <li 
                            className={`
                                ${typePayment === 'Debit' ? styles.active : ''} ${styles.disabled}
                                ${listDisabledPaymentType.includes('Debit') ? styles.disabled : ''}
                            `}>
                            <button type="button" onClick={typePaymentActive} value='Debit'>C. Débito</button>
                        </li>
                        <li 
                            className={`
                                ${typePayment === 'Ticket' ? styles.active : ''} ${styles.disabled}
                                ${listDisabledPaymentType.includes('Ticket') ? styles.disabled : ''}
                            `}>
                            <button type="button" onClick={typePaymentActive} value='Ticket'>Boleto</button>
                        </li>
                    </ul>
                </div>

                <div className={styles.contentPaneOptionsPayments}>
                    <div className={`${styles.paneOptionsPayments} ${typePayment === 'Credit' ? styles.active : styles.hide}`}>
                        {/* Credit Card */}
                        <div className={styles.wrapperCards}>
                            {
                                creditCardInfo.map((card) => (

                                    <CreditCard 
                                        key={card.key}
                                        keyValue={card.key}
                                        type={card.type}
                                        number={card.number}
                                        numberFinal={card.numberFinal}
                                        selected={card.selected}
                                        listCreditCardIcons={listCreditCardIcons}
                                        showCreditCardInfosModal={() => showCreditCardInfosModal(card.key)}
                                    />
                                    
                                ))
                            }
                        </div>

                        <div className={styles.contentBtnAddCard}>
                            <button type="button" onClick={changeOpenModalCreditCardAdd}>+ Adicionar novo cartão</button>
                        </div>

                        <div className={styles.contentModalCreditCard}>
                            <Modal openModal={openModalCreditCard} changeOpenModal={changeOpenModalCreditCard} title='Cartão de Crédito'>

                                <FormCreditCardEdit 
                                    keyValue={formCreditCard.key} 
                                    numberEdit={formCreditCard.number}
                                    holderEdit={formCreditCard.holder} 
                                    validateEdit={formCreditCard.validate}
                                    cvvEdit={formCreditCard.cvv}
                                    principalCardEdit={checkedSwitchValue}
                                    principalCardDisabled={formCreditCard.disabledSelected}
                                    activeRemoveCreditCardBox={activeRemoveCreditCardBox}
                                    onInputChange={onInputChange}
                                    handleSwitchChange={handleSwitchChange}
                                    editCreditCard={editDataFormCreditCard}
                                    changeActiveRemoveCreditCardBox={changeActiveRemoveCreditCardBox}
                                    removeCreditCard={removeCreditCard}
                                />
                            </Modal>

                            <Modal 
                                openModal={openModalCreditCardAdd} 
                                changeOpenModal={changeOpenModalCreditCardAdd} 
                                title='Cartão de Crédito'>

                                <FormCreditCardAdd 
                                    keyValue={formCreditCard.key} 
                                    number={formCreditCard.number}
                                    holder={formCreditCard.holder} 
                                    validate={formCreditCard.validate}
                                    cvv={formCreditCard.cvv}
                                    onInputChange={onInputChange}
                                    addNewCreditCard={addNewCreditCard} />
                                    
                            </Modal>
                        </div>
                        {/* End Credit Card */}
                    </div>

                    <div className={`${styles.paneOptionsPayments} ${typePayment === 'PIX' ? styles.active : styles.hide}`}>
                        <h1>PIX</h1>
                    </div>

                    <div className={`${styles.paneOptionsPayments} ${typePayment === 'Debit' ? styles.active : styles.hide}`}>
                        <h1>Débito</h1>
                    </div>

                    <div className={`${styles.paneOptionsPayments} ${typePayment === 'Ticket' ? styles.active : styles.hide}`}>
                        <h1>Boleto</h1>
                    </div>
                </div>
            </div>

            <div className={styles.contentBtnConfirmation}>
                <Link href="/pagamento">
                    <a>Confirmar</a>
                </Link>
            </div>
        </div>
    )
} 