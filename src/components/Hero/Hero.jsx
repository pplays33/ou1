import styles from './Hero.module.scss';

import { motion } from "framer-motion"

export default function Hero(){
    const h1Variant = {
        hidden: {y: -1000, opacity: 0,},
        visible: {y: 0, opacity: 1,}
    };



    return(
        <>
            <div className={styles.container}>
                <div className={styles.Hero}>
                    <motion.h1
                        initial={'hidden'}
                        animate={'visible'}
                        transition={
                            {
                                duration: 1,
                                delay: 0.5,
                            }
                        }
                        variants={h1Variant}
                    > Наша команда </motion.h1>
                    
                    <motion.p
                        initial={'hidden'}
                        animate={'visible'}
                        transition={
                            {
                                duration: 1.2,
                                delay: 0.5,
                            }
                        }
                        variants={h1Variant}
                    > Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</motion.p>
                    
                    <a 
                        className={styles.link} 
                        href='https://ou-olive.vercel.app/'>
                            начать общение →
                    </a>
                </div>
            </div>
        </>
    );
}