import { useState } from 'react';
import Link from 'next/link'

import styles from './styles.module.scss'

interface Props {
    hasReturn?: boolean;
    returnTo?: string;
    hasMenu?: boolean;
    hasCart?: boolean;
    hasSearch?: boolean;
    hasFavorite?: boolean;
    changeValueActiveSidebar?: any;
}

export const Header = ({ hasReturn = false, hasMenu, hasCart, hasSearch = false, hasFavorite = false, returnTo = '', changeValueActiveSidebar }: Props) => {
    const [openSearch, setOpenSearch]   = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [favorite, setFavorite]       = useState(true);

    const changeOpenSearch = () => {
        if(inputSearch.length == 0) {
            setOpenSearch(!openSearch);
        } else {
            console.log('Pesquisar por "' + inputSearch + '"');
        }
    }

    const changeFavorite = () => {
        setFavorite(!favorite);
    }

    const handleChangeSearch = (event: any) => {
        setInputSearch(event.target.value);
    }

    return(
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLeft}>
                    { hasReturn && returnTo ? 
                    <Link href={returnTo}>
                        <a>
                            <img src='/icons/left-arrow.svg' alt="Ícone de retorno para página anterior"/>
                        </a>
                    </Link>
                    : '' }

                    { hasMenu ? 
                    <button type='button' onClick={changeValueActiveSidebar}>
                        <img src='/icons/menu.svg' alt="Menu"/>
                    </button>
                    : ''}
                </div>

                <div className={styles.headerRight}>
                    { hasFavorite ? 
                    <button type='button' onClick={changeFavorite}>
                        <img src={`${!favorite ? "/icons/heart.svg" : "/icons/heart-favorited.svg"}`} alt="Ícone de favoritar item"/>
                    </button>
                    : '' }

                    { hasCart ?
                    <Link href='/checkout'>
                        <a>
                            <img className={styles.bagIcon} src='/icons/bag.svg' alt="Sacola"/>
                        </a>
                    </Link>
                    : ''}

                    { hasSearch ? (
                    <>
                        <input 
                            type='text' 
                            className={`${styles.searchInput} ${openSearch ? styles.active : null} `} 
                            value={inputSearch}
                            onChange={handleChangeSearch} />   
                        <button type="button" className={styles.buttonSearch} onClick={changeOpenSearch}>
                            <img className={styles.searchIcon} src="/icons/search.svg" alt="Procurar"/>
                        </button>
                    </>
                    ) : ''}
                </div>
            </div>
        </header>
    )
}