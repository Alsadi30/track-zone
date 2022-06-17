import {useState} from 'react'
import BaseClock from '../components/baseClock'
import CreateClock from '../components/createClock'
import shortId from 'shortid'
import Clock from '../components/clocks'






export default function App () {
 
  const [clocks, setClocks] = useState([])



const createClock = ({ selectTime, selectZone, clockTitle }) => {

  let time  = ''

  let dateTime = new Date(selectTime)
      
  if (selectZone === 'PST') {
      let pst = dateTime.toLocaleString('en-US', { timeZone: 'PST' })

      let d = new Date(pst)

      let hours = d.getUTCHours()

      let minutes = d.getUTCMinutes()

      let second = d.getUTCSeconds()

      console.log(times)
      times = `${hours}:${minutes}:${second}`
  } else if (selectZone === 'EST') {
      let pst = dateTime.toLocaleString('en-US', { timeZone: 'EST' })

      let d = new Date(pst)

      let hours = d.getUTCHours()

      let minutes = d.getUTCMinutes()

      let second = d.getUTCSeconds()

      times = `${hours}:${minutes}:${second}`
  } else if (selectZone === 'GMT') {
      let pst = dateTime.toLocaleString('en-US', { timeZone: 'GMT' })

      let d = new Date(pst)

      let hours = d.getUTCHours()

      let minutes = d.getUTCMinutes()

      let second = d.getUTCSeconds()

      times = `${hours}:${minutes}:${second}`
  } else if (selectZone === 'UTC') {
      let hours = dateTime.getUTCHours()

      let minutes = dateTime.getUTCMinutes()

      let second = dateTime.getUTCSeconds()

      time = `${hours}:${minutes}:${second}`
  }

   let createdClock = {
    id: shortId(),
    title: clockTitle,
    zone:selectZone,
    time: time,
    events:[]
  }

  setClocks([createdClock,...clocks])
  
}




  return (
    <div>
      <BaseClock />
      <CreateClock createClock={createClock} />
      <Clock clocks={clocks} />
    </div>
  )
}
