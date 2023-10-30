import styles from './Card.module.scss';
import { motion } from "framer-motion"

import man1 from './assets/Man1.png';
import man2 from './assets/Man2.png';
import Woman1 from './assets/Woman1.png';

//Общение - это одна из ключевых потребностей человека
const Card_Item = ({titel_card, About_card, img, index}) => {
    const divVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };


    return(
        <>
            <motion.div
            initial={'hidden'}
            animate={'visible'}
            transition={
                {
                    type: "spring",
                    duration: index * 2,
                    delay: 0.5,
                }
            }
            variants={divVariant}
            className={styles.container_card}>
                <div className={styles.description}>
                    <h2>{titel_card}</h2>
                    <p>{About_card}</p> 
                </div>
                <img src={img} alt='man1'></img>
            </motion.div>
        </>
    );
}


export default function Card(){
    return(
        <>
            <div className={styles.container}>
                <motion.div 
                initial = {{ opacity: 1, scale: 0 }}
                animate = {{
                    opacity: 1,
                    scale: 1,
                }}
                transition= {{
                    delayChildren: 0.8,
                    staggerChildren: 0.5
                }}
                className={styles.Cards}>
                    <Card_Item
                        titel_card = "Общение"
                        About_card = "Общение - это одна из ключевых потребностей человека"
                        img = {man1}
                        index = {1}
                    />
                    <Card_Item
                        titel_card = "Общение"
                        About_card = "Общение - это одна из ключевых потребностей человека"
                        img = {man2}
                        index = {2.5}
                    /> 
                    <Card_Item
                        titel_card = "Общение"
                        About_card = "Общение - это одна из ключевых потребностей человека это одна из ключевых потребностей человека одна из ключевых потребностей человека"
                        img = {Woman1}
                        index = {4}
                    /> 
                </motion.div>
            </div>
        </>
    );
}