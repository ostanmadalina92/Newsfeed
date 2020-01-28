import React from 'react';
import {Link,Router} from  "react-router-dom";
import styles from './Header.module.scss';

const Navigation = () =>{
    return(
        <div>
            <nav>
                <ul className = {styles.tabs}>
                    <li className = {styles.item} >
                        <Link to ='/home'>Home</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to = '/about'>About</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to = '/contact'>Contact</Link>
                    </li>
                    <li className = {styles.search}>
                        <input type = "text"></input>
                        <button type = "submit">...Search</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;