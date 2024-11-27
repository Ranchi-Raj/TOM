import './App.css';
import React, { useEffect } from 'react';
import Dc from './components/dC';
import Dr from './components/dR';
import Cr_out from './components/cr_out';
import Cr_inp from './components/cr_inp';
import Still from './components/still_image';
import Non_grash from './components/non_grash';
import toast, { Toaster } from 'react-hot-toast';

function FourBar() {
  const [links, setLinks] = React.useState({
    A: 10,
    B: 20,
    C: 15,
    D: 25,
  });

  const [prevState, setPrevState] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const { A, B, C, D } = links;

  const isValid = A > 0 && B > 0 && C > 0 && D > 0 &&
    A + B + C > D &&
    A + B + D > C &&
    A + C + D > B &&
    B + C + D > A;

  const grashofCheck =
    isValid &&
    Math.min(A, B, C, D) + Math.max(A, B, C, D) >
      A + B + C + D - Math.max(A, B, C, D) - Math.min(A, B, C, D);

  const getConditionMessage = () => {
    if (!isValid) return "Assembly Mode Not Possible or 0 DOF";
    return grashofCheck ? "Grashof Condition" : "Non-Grashof Condition";
  };

  useEffect(() => {
    const currentCondition = getConditionMessage();
    if (currentCondition !== prevState) {
      toast(currentCondition, { position: "top-right" });
      setPrevState(currentCondition);
    }
  }, [A, B, C, D, isValid, grashofCheck, prevState]);

  return (
    <div className="container">
      <Toaster />
      <h1>4 BAR MECHANISM</h1>
      <div className="video-container">
        {isValid ? (
          grashofCheck ? (
            <div className="head">
              <p>Grashof Condition</p>
              {D < A && D < B && D < C ? (
                <>
                  <p>DOUBLE CRANK</p>
                  <Dc />
                </>
              ) : A < B && A < C && A < D ? (
                <>
                  <p>Double Rocker</p>
                  <Dr />
                </>
              ) : B < A && B < C && B < D ? (
                <>
                  <p>Crank Rocker (Input)</p>
                  <Cr_inp />
                </>
              ) : C < A && C < B && C < D ? (
                <>
                  <p>Crank Rocker (Output)</p>
                  <Cr_out />
                </>
              ) : (
                <Still />
              )}
            </div>
          ) : (
            <div className="head">
              <p>Non-Grashof Condition</p>
              <Non_grash />
            </div>
          )
        ) : (
          <div>
            <p>Assembly Mode Not Possible or 0 DOF</p>
            <Still />
          </div>
        )}
      </div>
      <div className="slider-group">
        <div className="slider top">
          <label>Follower Link (A): {A}</label>
          <input
            type="range"
            name="A"
            min="1"
            max="100"
            value={A}
            onChange={handleChange}
          />
        </div>
        <div className="slider middle">
          <label>Input Link (B): {B}</label>
          <input
            type="range"
            name="B"
            min="1"
            max="100"
            value={B}
            onChange={handleChange}
          />
        </div>
        <div className="slider middle">
          <label>Output Link (C): {C}</label>
          <input
            type="range"
            name="C"
            min="1"
            max="100"
            value={C}
            onChange={handleChange}
          />
        </div>
        <div className="slider bottom">
          <label>Ground Link (D): {D}</label>
          <input
            type="range"
            name="D"
            min="1"
            max="100"
            value={D}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FourBar;
