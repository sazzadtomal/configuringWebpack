import classes from "./SmartphoneImage.css"
import smartphoneImg from "../../assets/smartphone.jpg"


import React from 'react'

const SmartphoneImage = (props) => {
  return (
    <div className={classes.SmartphoneImage}>
        <img src={smartphoneImg} className={classes.SmartphoneImg}/>
    </div>
  )
}

export default SmartphoneImage