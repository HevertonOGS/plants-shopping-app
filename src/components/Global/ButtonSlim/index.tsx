import Link from 'next/link'

import styles from './styles.module.scss'

type Props = {
    children: any
}

export const ButtonSlim = (props: Props) => {
    return (
        <Link href='/plantas'>
            <button className={styles.btnSlim}>{props.children}</button>
        </Link>
    )
}