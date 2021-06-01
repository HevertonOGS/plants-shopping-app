import React from 'react'
import styles from './styles.module.scss'

interface Props {
    classes?: string; 
    openModal: boolean;
    changeOpenModal: () => void;
    children: React.ReactNode;
    title: string;
}

export const Modal = ({ classes, openModal, changeOpenModal, title, children }: Props) => {
    return (
        <div className={`${styles.modal} ${openModal ? styles.active : null} ${classes}`}>
            <div className={styles.modalContent}>
                <header>
                    <h2 className={styles.modalTitle}>{title}</h2>
                </header>
                
                <section>
                    { children }
                </section>

                <footer>
                    <button type='button' onClick={changeOpenModal}>Ok, Pode fechar!</button>
                </footer>
            </div>
        </div>
    )
}