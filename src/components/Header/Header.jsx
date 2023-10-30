import { motion } from "framer-motion"

import styles from './Header.module.scss';

export default function Header(){
    return(
        <>
            <motion.div className={styles.container}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <div className={styles.Header}>
                    <div className={styles.item_logo_name}>
                        <p>O!University</p>
                    </div>
                    <div className={styles.item}>
                        <p>Contact</p>
                    </div>
                    <div className={styles.item}>
                        <p>About us</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}