import { useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

interface Props {
    changeOpenFilter: () => void;
}

export const Carousel = ({ changeOpenFilter }: Props) => {
    const [tabCarousel, setTabCarousel] = useState('Top');

    const tabActive = (event: any) => {
        setTabCarousel(event.target.value);
    }

    return (
        <>
            <div className={styles.centralMenu}>
                <h1>Minhas Plantas</h1>

                <div className={styles.contentIconFilter}>
                    <button type='button' onClick={changeOpenFilter}>
                        <img src="/icons/filter.svg" alt="Filtro"/>
                    </button>
                </div>
            </div>

            <div className={styles.tabCarousel}>
                <ul className={styles.tabList}>
                    <li className={`${styles.tabItem} ${tabCarousel === 'Top' ? styles.active : ''}`}>
                        <button onClick={tabActive} type='button' value='Top'>Top</button>
                    </li>
                    <li className={`${styles.tabItem} ${tabCarousel === 'Exterior' ? styles.active : ''}`}>
                        <button onClick={tabActive} type='button' value='Exterior'>Exterior</button>
                    </li>
                    <li className={`${styles.tabItem} ${tabCarousel === 'Interior' ? styles.active : ''}`}>
                        <button onClick={tabActive} type='button' value='Interior'>Interior</button>
                    </li>
                    <li className={`${styles.tabItem} ${tabCarousel === 'Plantas' ? styles.active : ''}`}>
                        <button onClick={tabActive} type='button' value='Plantas'>Plantas</button>
                    </li>
                </ul>
            </div>

            <div className={styles.contentCarousel}>
                <div className={`${styles.carouselPane} ${tabCarousel === 'Top' ? styles.active : styles.hide}`}>
                    <div className={styles.wrapperCarousel}>
                        {/* item */}
                        <div className={styles.carouselItem}>
                            <div className={styles.wrapperCarouselItem}>
                                <Link href="/detalhes">
                                    <a className={styles.contentImage}>
                                        <img src="/list/img-1.png" alt="Planta 01"/>
                                    </a>
                                </Link>
                                
                                <Link href="/detalhes">
                                    <a>
                                        <h2 className={styles.titleItem}>Chlorophytum Plant</h2>
                                    </a>
                                </Link>
                                <p className={styles.valueItem}>R$ <span>99</span>,99</p>
                            </div>
                        </div>
                        {/* end item */}

                        {/* item */}
                        <div className={styles.carouselItem}>
                            <div className={styles.wrapperCarouselItem}>
                                <Link href="/detalhes">
                                    <div className={styles.contentImage}>
                                        <img src="/list/img-2.png" alt="Planta 01"/>
                                    </div>
                                </Link>
                                <Link href="/detalhes">
                                    <a>
                                        <h2 className={styles.titleItem}>Chlorophytum Plant</h2>
                                    </a>
                                </Link>
                                <p className={styles.valueItem}>R$ <span>99</span>,99</p>
                            </div>
                        </div>
                        {/* end item */}
                    </div>
                </div>

                <div className={`${styles.carouselPane} ${tabCarousel === 'Exterior' ? styles.active : styles.hide}`}>
                    <div className={styles.wrapperCarousel}>
                        {/* item */}
                        <div className={styles.carouselItem}>
                            <div className={styles.wrapperCarouselItem}>
                                <Link href="/detalhes">
                                    <div className={styles.contentImage}>
                                        <img src="/list/img-2.png" alt="Planta 01"/>
                                    </div>
                                </Link>
                                <Link href="/detalhes">
                                    <a>
                                        <h2 className={styles.titleItem}>Chlorophytum Plant</h2>
                                    </a>
                                </Link>
                                <p className={styles.valueItem}>R$ <span>99</span>,99</p>
                            </div>
                        </div>
                        {/* end item */}

                        {/* item */}
                        <div className={styles.carouselItem}>
                            <div className={styles.wrapperCarouselItem}>
                                <Link href="/detalhes">
                                    <a className={styles.contentImage}>
                                        <img src="/list/img-1.png" alt="Planta 01"/>
                                    </a>
                                </Link>
                                
                                <Link href="/detalhes">
                                    <a>
                                        <h2 className={styles.titleItem}>Chlorophytum Plant</h2>
                                    </a>
                                </Link>
                                <p className={styles.valueItem}>R$ <span>99</span>,99</p>
                            </div>
                        </div>
                        {/* end item */}
                    </div>
                </div>
            </div>
        </>
    )
}