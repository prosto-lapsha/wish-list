import React from 'react';
import styles from './Board.css';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

export function Board(props) {
    return (<aside className={styles.wrapper}>
        <ProfileHeader />
    </aside>)
}