import styles from './Modal.module.css';
export default function({fun,info}){
    console.log(info);
    return (
        <div className={styles.modalconatianer}>
            <div className={styles.modalinfo}>
                <button className={styles.close} onClick={fun}>X</button>
                <img src="https://i.ytimg.com/vi/oaDud0gaSpk/maxresdefault.jpg" alt="" />
                <h2>TIME</h2>
                <h2>{info.seltime}</h2>
                <h2>SEATS SELECTED</h2>
                <h2>{info.selSeats.map(time => time.slice(9)+", ")}</h2>
            </div>
        </div>
    )
}