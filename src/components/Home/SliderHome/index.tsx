import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

export const SliderHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className={styles.wrapperSliderHome}>
            <Slider className={styles.sliderHome} {...settings}>
                <div className={styles.sliderItem}>
                    <img src='/login/plant.png' alt="Suculenta"/>
                </div>
                <div className={styles.sliderItem}>
                    <img src='/login/plant-2.png' alt="Suculenta"/>
                </div>
                <div className={styles.sliderItem}>
                    <img src='/login/plant-3.png' alt="Suculenta"/>
                </div>
            </Slider>
        </div>
    )
}