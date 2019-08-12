import React from 'react';
import styles from './ProfileHeader.css';
import sonya from '../../img/sonya.jpg';

export function ProfileHeader(props) {
    return (<section className={styles.wrapper}>
        <img src={sonya} alt="Ваше фото" className={styles.photo}/>
    </section>)
}
