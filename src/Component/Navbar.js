import React from 'react'
import '../Styles/Navbar.css'

function Navbar({size,setShow}) {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span className="fa fa-cart-plus"></span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar