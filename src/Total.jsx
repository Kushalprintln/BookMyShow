import styles from './Total.module.css';
export default function({price,fun}){
    return (
        <div className={styles.container}>
            <button className={styles.paybtn} onClick={fun}>Pay {price}</button>
        </div>
    )
}