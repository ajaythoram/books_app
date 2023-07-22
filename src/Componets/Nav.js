
import React from "react";
import logo from "./Images/Standard Collection 11img.png"
import profil from "./Images/profil.png"
import premium from "./Images/fluent_premium-person-20-regular.png"
import hear from "./Images/bx_bx-book-heart.png"
import notification from "./Images/ic_round-notifications-none.png"
const Nav = ()=>{



    return(

        <div className="nav">
        <div className="nav_left">
          <img src={logo} alt="Logo" />
          <h3>Keazon books</h3>
        </div>
        <div className="nav_right">
          <div className="search-container">
            <input className="Search" type="search" />
            <button id="btn">Search</button>
          </div>
          <img src={hear} alt="icon" />
          <img src={notification} alt="icon" />
          <img src={premium} alt="icon" />
          <img src={profil} alt="icon" />
        </div>
      </div>
      
    )
}

export default Nav;