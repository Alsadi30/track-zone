import { useEffect, useState } from 'react'
import Clock from './clock'

const Clocks = ({ clocks }) => {

  return (
    <>
      <h1>Clocks</h1>
      <div>
              {clocks.length === 0 ? (
                  <p>
                      <small>
                          There is no Clock
                      </small>
                  </p>
        ) :
                  (<ul>{clocks.map(clock => {
                      return <Clock clock={clock} key={clock.id} />
                  })}
             
             </ul>)
        }
      </div>
    </>
  )
}

export default Clocks
