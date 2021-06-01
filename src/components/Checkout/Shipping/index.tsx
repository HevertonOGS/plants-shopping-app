import { useState } from 'react'

import { Modal } from '../../Global/Modal'

import styles from './styles.module.scss'

export const Shipping = () => {
    const [openModal, setOpenModal] = useState(false);
    const [address, setAddress]     = useState('João Vicente Ferreira, 100 - Jardim Tropical, Dourados MS');

    const changeOpenModal = () => {
        setOpenModal(!openModal);
    }

    const handleChangeSearch = (event: any) => {
        setAddress(event.target.value);
    }

    return(
        <div className={styles.shippingCheckout}>
            <div className={styles.boxShipping}>
                <div className={styles.shippingInfo}>
                    <p className={styles.label}>Informações de Localização</p>
                    <p className={styles.textShipping}>{address}</p>
                </div>

                <div className={styles.contentIcon}>
                    <button type="button" onClick={changeOpenModal}>
                        <img src='/icons/pencil.svg' alt="Ícone de Edição"/>
                    </button>
                </div>
            </div>

            <Modal openModal={openModal} changeOpenModal={changeOpenModal} title="Localização">
                <div className={styles.inputGroup}>
                    <label htmlFor="">Informe seu endereço</label>
                    <textarea onChange={handleChangeSearch} value={ address } />
                </div>
            </Modal>
        </div>
    )
} 