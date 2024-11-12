import './App.css'
import FourBar from './FourBar'
import React from 'react'
import Slider from './Slider'
function App() {
    // const [mech, setMech] = React.useState(0)

  return (
    <div>
      {/* <div className='main_head'>
        
          <button onClick={() => setMech(0)}>4 Bar Mechanism</button>
          <button onClick={() => setMech(1)}>Slider Crank Mechanism</button>
      
      </div> */}
      
      <div className='positioner'><FourBar/> </div>

      
      {/* <Still /> */}
    </div>
  )
}

export default App
