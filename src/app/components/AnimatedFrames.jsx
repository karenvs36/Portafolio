import React from 'react';
import styles from './AnimatedFrames.module.css';

const AnimatedFrames = () => {
    return (
        <div className={styles.svgContainer}>
            <img src="/Frame 1.svg" className={`${styles.svgItem} ${styles.frame1}`} alt="Frame 1" />
            <img src="/Frame 2.svg" className={`${styles.svgItem} ${styles.frame2}`} alt="Frame 2" />
        </div> 
    );
};

export default AnimatedFrames;
