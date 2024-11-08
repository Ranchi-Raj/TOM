import './App.css';
import React from 'react';
import Dc from './components/dC';
import Dr from './components/dR';
import Cr_out from './components/cr_out';
import Cr_inp from './components/cr_inp';
import Still from './components/still_image';
import toast, { Toaster } from 'react-hot-toast';

function FourBar() {
  const [linkA, setLinkA] = React.useState(null);
  const [linkB, setLinkB] = React.useState(null);
  const [linkC, setLinkC] = React.useState(null);
  const [linkD, setLinkD] = React.useState(null);

  const [linkFA, setLinkFA] = React.useState(null);
  const [linkFB, setLinkFB] = React.useState(null);
  const [linkFC, setLinkFC] = React.useState(null);
  const [linkFD, setLinkFD] = React.useState(null);

  const [active, setActive] = React.useState(false);

  const submitHandler = () => {
    const numA = Number(linkA);
    const numB = Number(linkB);
    const numC = Number(linkC);
    const numD = Number(linkD);

    setLinkFA(numA);
    setLinkFB(numB);
    setLinkFC(numC);
    setLinkFD(numD);

    if (
      numA <= 0 ||
      numB <= 0 ||
      numC <= 0 ||
      numD <= 0 ||
      numA + numB + numC <= numD ||
      numA + numB + numD <= numC ||
      numA + numC + numD <= numB ||
      numB + numC + numD <= numA
    ) {
      toast.error("Assembly Mode Not Possible or 0 DOF");
      return;
    } else {
      toast.success("Generated");
      setActive(true);
    }
  };

  return (
    <div className="container">
      <Toaster /> {/* Place Toaster here so it's part of the component tree */}
      <h1>4 BAR MECHANISM</h1>
      <div className="top">
        <label>Follower Link</label>
        <input
          value={linkA}
          className=""
          onChange={(e) => setLinkA(e.target.value)}
          required
          placeholder="Link A"
        />
      </div>
      <div className="middle">
        <label>Input Link</label>
        <input
          value={linkB}
          className=""
          onChange={(e) => setLinkB(e.target.value)}
          required
          placeholder="Link B"
        />
        {linkFA && linkFB && linkFC && linkFD && (
          (linkFA + linkFB + linkFC <= linkFD ||
          linkFA + linkFB + linkFD <= linkFC ||
          linkFA + linkFC + linkFD <= linkFB ||
          linkFB + linkFC + linkFD <= linkFA) ? (
            console.log("Invalid Input")
          ) : (
            <div className="head">
              {(linkFD > linkFA && linkFD > linkFB && linkFD > linkFC) ? (
                <>
                  <p>DOUBLE CRANK</p>
                  <Dc />
                </>
              ) : (linkFA > linkFB && linkFA > linkFC && linkFA > linkFD) ? (
                <>
                  <p>Double Rocker</p>
                  <Dr />
                </>
              ) : (linkFB > linkFA && linkFB > linkFC && linkFB > linkFD) ? (
                <>
                  <p>Crank Rocker</p>
                  <Cr_inp />
                </>
              ) : (linkFC > linkFA && linkFC > linkFB && linkFC > linkFD) ? (
                <>
                  <p>Crank Rocker</p>
                  <Cr_out />
                </>
              ) : null}
            </div>
          )
        )}
        {!active && <Still />}
        <label>Output Link</label>
        <input
          className=""
          value={linkC}
          onChange={(e) => setLinkC(e.target.value)}
          required
          placeholder="Link C"
        />
      </div>
      <div className="bottom">
        <label>Ground Link</label>
        <input
          value={linkD}
          onChange={(e) => setLinkD(e.target.value)}
          required
          placeholder="Link D"
        />
      </div>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default FourBar;
