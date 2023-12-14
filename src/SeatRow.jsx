import styles from './SeatRow.module.css'
import Seat from "./Seat";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function SeatRow({row,seats,setprice,selcted,selsetfun,unavail,time}){
    // console.log(row);
    // console.log(seats);
    // console.log(setprice);
    // console.log(selcted);
    // console.log(selsetfun);
    return(
        <>
        <tr>
            <td className={styles.section}>{row}</td>
            
            <td className={styles.left}>
                {seats.map((ele)=>{
                    if(ele.seatno<=7){
                        return (<Seat key={uuidv4()} stno={ele.seatno} row={row} price={setprice} Selected={selcted} selsetfun={selsetfun} unavail={unavail} time={time}/>)
                    }
                })}  
            </td>
            <td className={styles.middle}>
                {seats.map((ele)=>{
                    if(ele.seatno>7 && ele.seatno<=23){
                        return (<Seat key={uuidv4()} stno={ele.seatno} row={row} price={setprice} Selected={selcted} selsetfun={selsetfun} unavail={unavail} time={time}/>)
                    }
                })}
            </td>
            <td className={styles.right}>
                {seats.map((ele)=>{
                    if(ele.seatno>23){
                        return (<Seat key={uuidv4()} stno={ele.seatno} row={row} price={setprice} Selected={selcted} selsetfun={selsetfun} unavail={unavail} time={time}/>)
                    }
                })}
            </td>
        </tr>
        </>
    )
}