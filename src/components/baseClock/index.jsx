import React, { useEffect ,useState} from 'react'

export default function BaseClock() {

    const [hours,setHour] = useState('')
    const [minutes,setminutes] = useState('')
    const [ second, setsec ] = useState('')
    
    const getTime =  () => {
        try {
            let dateTime = new Date();
        let hour = dateTime.getUTCHours()
         setHour(hour)   
        let minute = dateTime.getUTCMinutes()
        setminutes(minute)
        let secon = dateTime.getUTCSeconds()
       setsec(secon)
        } catch (e) {
            console.log(e)
        }
        
}
   
    useEffect(() => {
        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getUTCHours()
             setHour(hour)   
            let minute = dateTime.getUTCMinutes()
            setminutes(minute)
            let secon = dateTime.getUTCSeconds()
           setsec(secon)
        }, 1000);
        
    //  getTime()
    }, [hours,minutes,second]) 
    

    

  return (
      <div>
          <h1>  Base Clock </h1> 
          <div>{`${hours}:${minutes}:${second}`}</div>
    </div>
  )
}
