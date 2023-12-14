import styles from './SlotBtn.module.css';
export default function SlotBtn({time,isSelected,setTimefun}){
    // console.log(time);
    // console.log(isSelected);
    // console.log(setTimefun);
    return (
        <button className={(isSelected? `${styles.selbtn}`:`${styles.sbtn}`)} onClick={()=>{setTimefun(time)}}>
            {time}
            <br />
            IMAX
        </button>
    )
}