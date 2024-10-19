import './App.css'
import React from 'react'
import Dc from './components/dC'
import Dr from './components/dR'
import Cr_out from './components/cr_out'
import Cr_inp from './components/cr_inp'

function App() {
  const [linkA,setLinkA] = React.useState(0)
  const [linkB,setLinkB] = React.useState(0)
  const [linkC,setLinkC] = React.useState(0)
  const [linkD,setLinkD] = React.useState(0)

  const [linkFA,setLinkFA] = React.useState(0)
  const [linkFB,setLinkFB] = React.useState(0)
  const [linkFC,setLinkFC] = React.useState(0)
  const [linkFD,setLinkFD] = React.useState(0)

  // const [active, setActive] = React.useState(false)

  const submitHandler = () =>{

    setLinkFA(linkA)
    setLinkFB(linkB)
    setLinkFC(linkC)
    setLinkFD(linkD)

    console.log("Entered",linkFA,linkFB,linkFC,linkFD)

    // setLinkA(0)
    // setLinkB(0)
    // setLinkC(0)
    // setLinkD(0)

    // setActive(true)
  }

  return (
    <div className='container'>
      <h1>4 BAR MECHANISM</h1>
      <div className='top'>
        <label>Link A</label>
        <input value={linkA} className='' onChange={(e) => setLinkA(e.target.value)} required placeholder='Link A'></input>
      </div>
      <div className='middle'>
        <label>Link B</label>
      <input value={linkB} className='' onChange={(e) => setLinkB(e.target.value)} required placeholder='Link B'></input>
      {
  (linkFA !== 0 && linkFB !== 0 && linkFC !== 0 && linkFD !== 0) &&
  (
    ((linkFD > linkFA) && (linkFD > linkFB) && (linkFD > linkFC)) ? (
      <div className='head'>
        <p>Double Crank</p>
        <Dc />
      </div>
    ) : ((linkFA > linkFB) && (linkFA > linkFC) && (linkFA > linkFD)) ? (
      <div className='head'>
        <p>Double Rocker</p>
        <Dr />
      </div>
    ) : ((linkFB > linkFA) && (linkFB > linkFC) && (linkFB > linkFD)) ? (
      <div className='head'>
      <p>INPUT</p>
      <Cr_inp />
    </div>
    ) : ((linkFC > linkFA) && (linkFC > linkFB) && (linkFC > linkFD)) ? (
      <div className='head'>
        <p>OUTPUT </p>
        <Cr_out />
      </div>
    ) : null
  )
}
      <label>Link C</label>
      <input className='' value={linkC} onChange={(e) => setLinkC(e.target.value)} required placeholder='Link C'></input>
      </div>

      <div className='bottom'>
      <label>Link D</label>
      <input value={linkD} onChange={(e) => setLinkD(e.target.value)} required placeholder='Link D'></input>
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default App
