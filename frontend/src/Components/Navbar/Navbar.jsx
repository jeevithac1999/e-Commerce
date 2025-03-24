import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "../Assets/nav_dropdown.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();
  
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Khushithaa <br /> Fashions</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("Shop");}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Sarees");}}><Link style={{textDecoration: 'none'}} to='/Sarees'>Sarees</Link>{menu==='Sarees'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kurthis");}}><Link style={{textDecoration: 'none'}} to='/Kurthis'>Kurthis</Link>{menu==='Kurthis'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Frocks")}}><Link style={{textDecoration: 'none'}} to='/Frocks'>Frocks</Link>{menu==='Frocks'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Materials");}}><Link style={{textDecoration: 'none'}} to='/Materials'>Materials</Link>{menu==='Materials'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token')
          window.location.replace('/')
        }}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
