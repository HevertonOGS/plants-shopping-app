import styles from './styles.module.scss'

type props = {
    classes: String,
    children: any
}

export const ButtonLarge = (props: props) => {
    return(
        <button 
            className={`
                ${styles.btnLarge} 
                ${props.classes == 'btnBlack' 
                    ? styles.btnBlack 
                    : styles.btnWhite}`}
        >{props.children}</button>
    );
}