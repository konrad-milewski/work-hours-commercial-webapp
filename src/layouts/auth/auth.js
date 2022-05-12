import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import WebcamCapture from "../../components/webcam/WebcamCapture";
import ModalAuth from "./modals/modal";
import Loader from "react-js-loader";

export default function Auth() {
  const passRef = useRef(null);
  const [pin, setPin] = useState("");
  const [bangle, setBangle] = useState("");
  const [error, setError] = useState("");

  const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      console.log(imageSrc)
    }, [webcamRef, setImgSrc]);

      const [loader, setloader] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setloader(false)
      }, 1500);
    }, [])
    

  const checkPin = async (pin) => {
    await axios
      .post("XXXX" + pin)
      .then((response) => {
        if (response.data[0]) {
          //Logowanie...
          return;
        }
        setError("Nieprawidłowy pin");
      })
      .catch(() => {
        setError("Brak połączenia z bazą danych.");
      });
    setPin("");
    setBangle("");
  };

  useEffect(() => {
    passRef.current.focus();
    let focus 
    // =
    //  setInterval(() => {
    //   passRef.current.focus();
    // }, 300);

    let error = setInterval(() => {
      setError("");
    }, 5000);
    return () => {
      clearInterval(focus);
      clearInterval(error);
    };
  }, []);

  const keyDown = (e) => {
    setBangle(bangle + String.fromCharCode(e.keyCode));
    if (e.keyCode === 13) {
      checkPin(bangle);
    }
  };

  const button = (name, onClick) => {
    return (
      <div className="button" key={name} onClick={onClick}>
        {name}
      </div>
    );
  };

  const [show, setShow] = useState(false);

  const buttons = () => {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
      buttons.push(button(i, () => setPin(pin + i)));
    }
    buttons.push(button("←", () => setPin(pin.slice(0, -1))));
    buttons.push(button(0, () => setPin(pin + 0)));
    buttons.push(button("→", () => {
      localStorage.getItem('photo') == 'true' &&  capture()
      setShow(true)
      checkPin(pin)}));
    return buttons;
  };

 let params =  useLocation()
 
  return (
    <>
    <div className={`${!loader && 'd-hidden'}`} style={{marginTop:"300px"}}>
    <Loader type="bubble-loop" bgColor={'#5F72D7'} title={"Ładuje się..."} color={'#5F72D7'} size={100} />
    </div>
      
      <div className={`auth ${loader && 'd-hidden'}`}>
      <ModalAuth show={show} setShow={setShow}/>
        <div className="auth-container">

          <div className="buttons">
{localStorage.getItem('photo') == 'true'  && <WebcamCapture webcamRef={webcamRef} setImgSrc={setImgSrc} imgSrc={imgSrc} capture={capture}/>}
          <h5 className="fw-bold text-center mt-5 font-primary" style={{color: '#FFB246 !important'}}>Możesz użyć bransoletki aby się wylogować</h5>
            <input
              type="password"
              ref={passRef}
              value={pin}
              onChange={() => {}}
              onKeyDown={(e) => keyDown(e)}
              className="input-numpad"
            />
            {buttons()}
            {/* <div className="errors">{error}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
