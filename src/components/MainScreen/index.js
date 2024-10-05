import {QRCodeSVG} from 'qrcode.react';
import {useState,useEffect} from "react"
import "./index.css"


import React from 'react'



const MainScreen=()=>{

  const[status,changeStatus]=useState(false)

  console.log(status)


  return (
    <div className="bg-container">
      <h1 className="head">Quiz Game</h1>
      <p className="para">Join the game</p>
      
      
      
      
      <QRCodeSVG onChange={()=>changeStatus(true)}
    value={"https://localhost:3000/join"}
    title={"Title for my QR Code"}
    size={128}
    bgColor={"#ffffff"}
    fgColor={"#000000"}
    level={"L"}
    marginSize={0}
    imageSettings={{
      src: "https://static.zpao.com/favicon.png",
      x: undefined,
      y: undefined,
      height: 24,
      width: 24,
      opacity: 1,
      excavate: true,
    }}
  />
  <p className="scan">Scan on Mobile</p>
  <h1 className="sub">Created by Sai Yashwanth</h1>
  
  </div>)




}
export default MainScreen


