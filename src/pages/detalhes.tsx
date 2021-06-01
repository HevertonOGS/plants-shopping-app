import { useState } from 'react'

import { Header } from '../components/Global/Header'
import { Modal } from '../components/Global/Modal'
import { Highlight } from '../components/Detalhes/Highlight'
import { Description } from '../components/Detalhes/Description'

import styles from '../styles/Detalhes.module.scss'

export default function Detalhes() {
    const [openModal, setOpenModal] = useState(false);

    const changeOpenModal = () => {
        setOpenModal(!openModal);
    }

    return(
        <div className={styles.detailsPage}>
            <div className='container'>
                <div className="col12">
                    <Header hasReturn={true} returnTo='/plantas' hasFavorite={true} />

                    <Modal 
                        openModal={openModal} 
                        changeOpenModal={changeOpenModal}
                        title="Strelitzia Plant">
                        <Description addButtonToCart={false}/>
                    </Modal>

                    <Highlight changeOpenModal={changeOpenModal} />

                    <Description />
                </div>
            </div>
        </div>
    )
}