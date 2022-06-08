import React from 'react'
import Styles from './Css/Favorites.module.css'
const Favorites = () => {
  return (
    <div>
        <h1>Our Favorites</h1>
        <div className={Styles.div}>
            <h3>FOR EVERYDAY</h3>
            <h3>FOR RUNNING</h3>
            <h3>FOR SUMMMER</h3>
        </div>
        <div>
            <div className={Styles.fav}>
                <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600,b_rgb:f5f5f5/cms/3ti3cXWt6aq0hpsIeDnjjW/eb85200cef27605a3e6b0fcdceff2d6e/Frame_1__1_.jpg" alt="favimg" />
                <h2>Tree Runner</h2>
                <hr />
                <p>Light and Breezy Sneaker</p>
            </div>
        </div>
    </div>
  )
}

export default Favorites