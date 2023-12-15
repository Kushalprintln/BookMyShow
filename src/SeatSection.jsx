import styles from './SeatSection.module.css';
import img from '../Images/screenimg.png'
import SeatRow from './SeatRow';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Seat from './Seat';


function UnbookedSeats(){
    let unbookedSeatsArray = [];
    for(let i=1;i<=30;i++){
        let obj = {};
        obj.seatno = i;
        obj.status = 'UnBooked';
        unbookedSeatsArray.push(obj);
    }
    // console.log(unbookedSeatsArray);
    return unbookedSeatsArray;

}
const rows = 'ABCDEFGHIJKLMN'.split('');
function CreatingRows(){
    let rowArray = [];
    for(let r of rows){
        let obj = {};
        obj[r] = UnbookedSeats();
        rowArray.push(obj);
    }
    // console.log(rowArray);
    return rowArray;
}
const initialArray = CreatingRows();

export default function SeatSection({rp,cp,ep,selsets,selsetfun,unavail,time}){
    // console.log(rp);
    // console.log(cp);
    // console.log(ep);
    // console.log(selsets);
    // console.log(selsetfun);

    const[rows,setrows]=useState(initialArray);
    // console.log(rows);

    return (
        <div className={styles.SeatSection}>
            <table>
                <tbody>
                    <tr className={styles.section}><th>ROYAL-Rs. {rp}.00</th></tr>
                    {/* <hr /> */}
                    {rows.map((ele,i)=>{  
                        if(i<3){
                            for(let i in ele){
                                return <SeatRow key={uuidv4()} row={i} seats={ele[i]} setprice={rp} selcted={selsets} selsetfun={selsetfun} unavail={unavail} time={time}/>
                            }
                        }  
                    })}
                    <tr className={styles.section}><th>CLUB-Rs. {cp}.00</th></tr>
                    {/* <hr /> */}
                    {rows.map((ele,i)=>{   
                        if(i>=3 && i<10){
                            for(let i in ele){
                                return <SeatRow key={uuidv4()} row={i} seats={ele[i]} setprice={cp} selcted={selsets} selsetfun={selsetfun} unavail={unavail} time={time}/>
                            }
                        } 
                    })}
                    <tr className={styles.section}><th>EXECUTIVE-Rs. {ep}.00</th></tr>
                    {/* <hr /> */}
                    {rows.map((ele,i)=>{   
                        if(i>=10){
                            for(let i in ele){
                                return <SeatRow key={uuidv4()} row={i} seats={ele[i]} setprice={ep} selcted={selsets} selsetfun={selsetfun} unavail={unavail} time={time}/>
                            }
                        } 
                    })}
                </tbody>
            </table>
            <div className={styles.scrnTs}>
                <img src={img} alt="screenimg" />
                <span>All Eyes This Side</span>
            </div>
            <div className={styles.seatinfo}>
                <span>
                    <div className={styles.ava}></div> Available
                </span>
                <span>
                    <div className={styles.sel}></div> Selected
                </span>
                <span>
                    <div className={styles.sol}></div> Sold
                </span>
                
            </div>
        </div>
    )
}