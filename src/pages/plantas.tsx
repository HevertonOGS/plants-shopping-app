import { useState } from 'react'

import { Header } from '../components/Global/Header'
import { Sidebar } from '../components/Global/Sidebar'
import { Carousel } from '../components/Plantas/Carousel'
import { Offers } from '../components/Plantas/Offers'
import { Filter } from '../components/Plantas/Filter'

import styles from '../styles/Plantas.module.scss'

export default function Plantas () {
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [openFilter, setOpenFilter]       = useState(false);

    const changeValueActiveSidebar = () => {
        setActiveSidebar(!activeSidebar);
    }

    const changeOpenFilter = () => {
        setOpenFilter(!openFilter);
    }

    return (
        <div className={styles.listPage}>
            <div className="container">
                <div className="col12">
                    <Header 
                        hasMenu={true} 
                        hasCart={true} 
                        hasSearch={true} 
                        changeValueActiveSidebar={changeValueActiveSidebar} />

                    <Sidebar active={activeSidebar} changeValueActiveSidebar={changeValueActiveSidebar} />

                    <Carousel changeOpenFilter={changeOpenFilter} />

                    <Offers/>

                    <Filter openFilter={openFilter} changeOpenFilter={changeOpenFilter} />
                </div>
            </div>
        </div>
    )
}