import SlotBtn from './SlotBtn';
import styles from './slotSection.module.css';
import { v4 as uuidv4 } from 'uuid';
export default function SlotSection({slots,seltime,fun}){
    // console.log(slots);
    // console.log(seltime);
    // console.log(fun);
    return (
        <div className={styles.slotSection}>
            {slots.map((time)=>{
                return <SlotBtn key={uuidv4()} time={time} isSelected={(seltime===time?true:false)} setTimefun={fun} />
            })}
        </div>
    )
}