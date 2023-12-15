import { useState } from 'react'
import './App.css'
import SlotSection from './slotSection'
import SeatSection from './SeatSection'
import Total from './Total'
import Modal from './Modal'

function App() {
  const timeslot = ['06:30 PM','07:30 PM','08:30 PM','09:30 PM','10:30 PM'];
  const [seltime,setSelTime] = useState('06:30 PM');
  const [selSeats,setSelectSeats] = useState([]);
  const [totalprice,setTotalPrice] = useState(0);
  const [modVis,setModVis] = useState(false);
  const [unavail,setUnavil] = useState([]);

  const [remaining,setRemaining] = useState(0);
  // console.log(selSeats);

  function selectTime(time){
    setSelTime(time);
  }
  function SelectSeats(str,price){
    if(!unavail.includes(str) && !selSeats.includes(str)){
      setSelectSeats((prev)=>{return [...prev,str]})
      setTotalPrice((prev)=>{return prev+price})
    }else if(selSeats.includes(str)){
      let NselArr = selSeats.filter((ele)=>{return ele!=str})
      setSelectSeats(NselArr);
      setTotalPrice((prev)=>{return prev-price})
    }
  }

  function SelectMutipal(str,price){
    // console.log(str);
    // console.log(time);
    // console.log(section);
    // console.log(str);
    let time = str.slice(0,9);
    let section = str.slice(9,10);
    let setno = str.slice(10);
    setno = Number(setno);
    let tempno = Number(remaining);
    let tempArr = [];
    console.log(setno); 
    console.log(tempno);
    
    if(setno<=7){
      for(let i=setno;i<(setno+tempno) && i<=7 ;i++){
        let tempstring = time+section+i;
        if(!unavail.includes(tempstring) && !selSeats.includes(tempstring)){
          console.log(tempstring);
          tempArr.push(tempstring);
        }else{
          break;
        }
      }
    }
    if(setno>7 && setno <=23){
      for(let i=setno;i<(setno+tempno) && i>7 && i<=23 ;i++){
        let tempstring = time+section+i;
        if(!unavail.includes(tempstring) && !selSeats.includes(tempstring)){
          console.log(tempstring);
          tempArr.push(tempstring);
          
        }else{
          break;
        }
      }
    }
    if(setno >23 && setno<=30){
      for(let i=setno;i<(setno+tempno) && i>23 && i<=30 ;i++){
        let tempstring = time+section+i;
        if(!unavail.includes(tempstring) && !selSeats.includes(tempstring)){
          console.log(tempstring);
          tempArr.push(tempstring);
          
        }else{
          break;
        }
      }
    }
    
    console.log(tempno-tempArr.length);
    console.log(tempArr);
    setRemaining(tempno-tempArr.length);
    setSelectSeats((prev)=>{return [...prev,...tempArr]})
    setTotalPrice((prev)=>{return prev+(price*tempArr.length)})

  }

  

  // console.log("remaining are "+remaining);

  function closeMod(){
    setModVis(false);
    // setUnavil([...selSeats]);
    setUnavil(prev=>[...prev,...selSeats]);
    setSelectSeats([]);
    setTotalPrice(0);
  }
  console.log("Selected ->")
  console.log(selSeats);
  console.log("Remaining->")
  console.log(remaining);
  // console.log(unavail);
  return (
    <>
      {modVis && <Modal fun={closeMod} info={{seltime,selSeats}}/>}
      <SlotSection slots={timeslot} seltime={seltime} fun={selectTime} value={remaining} setval={setRemaining}/>
      <SeatSection rp={230} cp={180} ep={130} time={seltime} selsets={selSeats} selsetfun={remaining === 0 ? SelectSeats:SelectMutipal} unavail={unavail} />
      {selSeats.length!=0 && <Total price={totalprice} fun={()=>{setModVis(true)}}/>}
    </>
  )
}

export default App
