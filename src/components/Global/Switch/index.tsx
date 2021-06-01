import styles from './styles.module.scss'

interface Props {
    checkValue: boolean;
    disabledValue: boolean;
    onSwitchChange?: (value: boolean) => void;
}

export const Switch = ({ checkValue, disabledValue, onSwitchChange }: Props) => {
    const handleChange = (event: any) => {
        onSwitchChange(event.target.checked);
    }

    return (
        <>
            <label className={styles.switch}>
                <input 
                    type="checkbox" 
                    onChange={handleChange}
                    checked={checkValue}
                    disabled={disabledValue} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
    )
}