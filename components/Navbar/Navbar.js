import React from 'react';
import Logo from "../Assets/Img/Logo sombrero blanco sin fondo.png";
import shop from "../Assets/Img/shopping-cart.png";
import {Link} from 'react-router-dom';
import icon from "../Assets/Img/menu_h.png";
import like from "../Assets/Img/heart.png";
import user from "../Assets/Img/user.png"
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
            <img src={Logo} />
            <h1>THE PIN SOCIETY</h1>
        </div>
      <div className="rightSide">
        <Link to="/">
        <img src={user}/>
        </Link>
        <Link to="/">
        <img src={like}/>
        </Link>
        <Link to="/">
          <img src={shop}/>
        </Link>
        <button>
          <img src={icon}></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar
