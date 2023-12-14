import styles from './Seat.module.css';
export default function Seat({stno,row,price,Selected,selsetfun,unavail,time}){
    // console.log(row+" "+price+" "+Selected);
    // console.log(row+stno)
    // console.log(price);
    // console.log(selsetfun);
    let str = time+'-'+row+stno;
    // console.log(str);
    // console.log(Selected);
    // console.log(unavail);
    // console.log(time);
    function seatStatus(){
        if(Selected.includes(str)){
            return styles.seatSelected;
        }
        else if(unavail.includes(str)){
            return styles.unavailable;
        }else{
            return styles.seat;
        }
    }
    // return <div className={(!Selected.includes(str) ? styles.seat : styles.seatSelected )} onClick={()=>{selsetfun(str,price)}}>{stno}</div>
    return <div className={seatStatus()} onClick={()=>{selsetfun(str,price)}}>{stno}</div>
}