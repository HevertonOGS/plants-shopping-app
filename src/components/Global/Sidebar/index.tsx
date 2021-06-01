import Link from 'next/link'

import styles from './styles.module.scss'

interface Props {
    active?: boolean;
    changeValueActiveSidebar: any
}

export const Sidebar = ({ active, changeValueActiveSidebar }: Props) => {

    return (
        <div className={`${styles.wrapperSidebar} ${ active ? styles.active : ''}`}>
            <div className={styles.modal} onClick={changeValueActiveSidebar}></div>

            <main className={styles.sidebar} onClick={(e) => { e.preventDefault(); }}>
                <ul>
                    <li>
                        <Link href='/plantas'>
                            <a>
                                <img src="/icons/potted-plant.svg" alt="Logout" />

                                <span>Todas as plantas</span>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href='/plantas'>
                            <a>
                                <img src="/icons/price-tag.svg" alt="Logout" />

                                <span>Encontrar ofertas</span>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href=''>
                            <a>
                                <img src="/icons/bag.svg" alt="Logout" />

                                <span>Meu carrinho (0)</span>
                            </a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.divider}></div>

                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="/icons/logout.svg" alt="Logout" />

                                <span>Sair</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}