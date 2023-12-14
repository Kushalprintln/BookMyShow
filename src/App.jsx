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
  function closeMod(){
    setModVis(false);
    // setUnavil([...selSeats]);
    setUnavil(prev=>[...prev,...selSeats]);
    setSelectSeats([]);
    setTotalPrice(0);
  }
  console.log(selSeats);
  // console.log(unavail);
  return (
    <>
      {modVis && <Modal fun={closeMod} info={{seltime,selSeats}}/>}
      <SlotSection slots={timeslot} seltime={seltime} fun={selectTime}/>
      <SeatSection rp={230} cp={180} ep={130} time={seltime} selsets={selSeats} selsetfun={SelectSeats} unavail={unavail}/>
      {selSeats.length!=0 && <Total price={totalprice} fun={()=>{setModVis(true)}}/>}
    </>
  )
}

export default App
