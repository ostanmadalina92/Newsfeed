import React from 'react';
import styles from '../Header.module.scss';
import Navigation from '../Navigation';

const Header = () => {
    return (
        <div className={styles.bkgr}>
            <Navigation/>
            <h1 className={styles.title}>INSIDER</h1>
        </div>
    );
};

export default Header;