import {useEffect,useState} from 'react'


const Clock = ({ clock }) => {
  const { title, time, events,zone } = clock
  const [hours,setHour] = useState('')
  const [minutes,setminutes] = useState('')
  const [ second, setsec ] = useState('')
    
  
   
    
//   useEffect(() => {
//       setInterval(() => {
          

         
//       }, 1000);
    
// }, [hours,minutes,second]) 
    
    
    
  return (
    <>
      <h1>{title}</h1>
      <p> Time : {time}</p>
      <div>
        {events.length === 0 ? (
          <>There is no events</>
        ) : (
          events &&
          events.map(event => {
            return (
              <>
                <p> event.title </p>
                <p> event.time</p>
              </>
            )
          })
        )}
      </div>
    </>
  )
}

export default Clock
