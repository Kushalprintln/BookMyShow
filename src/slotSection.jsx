import SlotBtn from './SlotBtn';
import styles from './slotSection.module.css';
import { v4 as uuidv4 } from 'uuid';
export default function SlotSection({slots,seltime,fun,value,setval}){
    // console.log(slots);
    // console.log(seltime);
    // console.log(fun);

    return (
        <div className={styles.slotSection}>
            {slots.map((time)=>{
                return <SlotBtn key={uuidv4()} time={time} isSelected={(seltime===time?true:false)} setTimefun={fun} />
            })}
            <label htmlFor="Seats">Select Seats</label>
            <select className={styles.multiseats} value={value }name="seats" id="Seats" onChange={(e)=>{setval(e.target.value)}}>
                <option value={0}>Individual</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
    )
}