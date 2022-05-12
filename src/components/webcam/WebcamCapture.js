import React from 'react'
import Webcam from "react-webcam";

export default function WebcamCapture ({webcamRef, imgSrc, setImgSrc, capture}) {
    
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
  <div style={{background:'#f0f0f0'}} className="video-overlay"></div>
        {imgSrc && (
          <img
            src={imgSrc}
            width={'100px'}
            height={'100px'}
          />
        )}
      </>
    );
  };

  