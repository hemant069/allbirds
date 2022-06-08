import React from 'react'
import Button from '@mui/material/Button';
import Styles from './Css/Main.module.css'
const Main = () => {
  return (
    <div className={Styles.div} >
        <div>
       <h1 >Made from Trees. Designed for Sun.</h1>
       <p>Shop shoes made with light & breezy eucalyptus tree fiber.</p>
       <div className={Styles.Buttons}>
       <Button >SHOP MEN</Button>
       <Button>SHOP WOMEN</Button> 
       </div>
    </div>
    </div>
  )
}

export default Main