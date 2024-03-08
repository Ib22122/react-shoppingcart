import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isLogInAction } from "../Redux/Actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const userData = useSelector(state => state.userData)
   const isLoggedInn = useSelector(state => state.isLoggedIn)
   const dispatch1 = useDispatch()

  const [activeLink, setActiveLink] = useState(1);
  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };

  const signOut = ()=>{
    dispatch1(isLogInAction(false))
  }


  return (

    <div className="header shadow-lg">
      <nav className="navbar navbar-expand-md navbar-dark" aria-label="Fourth navbar example">
        <div className="container">
          <div className="nav-left w-50">
            <Link to="/" className="navbar-brand w-100" href="#"><span>L</span>ap<span>T</span>ek</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m-2 m-md-0" id="navbarsExample04">

            <ul className="links navbar-nav ps-3 ms-5 w-25">
              <li className="nav-item">
                <a className={activeLink === 1 ? 'active nav-link' : 'nav-link'} href="#Home" onClick={() => {
                  handleClick(1)
                }}>Home</a>
              </li>
              <li className="nav-item">
                <a className={activeLink === 2 ? 'active nav-link' : 'nav-link'} href="#Products" onClick={() => {
                  handleClick(2)
                }}>Products</a>
              </li>
            </ul>



            {(isLoggedInn) ? (
              <div className="dropdown text-start  ms-auto mb-md-0 ">
                
                <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="me-3 text-light">{userData.fname}</span>
                  <img src="../user-icon.png" alt="mdo" width="32" height="32"/>
                </a>
                <ul className="dropdown-menu text-small">
                  <li><a className="dropdown-item">Profile</a></li>
                  <li><a className="dropdown-item">Settings</a></li>
                  <li><hr className="dropdown-divider bg-light" /></li>
                  <li><a className="dropdown-item" onClick={signOut}>Sign out</a></li>
                </ul>
              </div>
            ) : (
              <ul className="navbar-nav ms-auto mb-md-0">
                <Link to="/login" className="btn btn-login my-1 my-md-0 me-2" type="button">login</Link>
                <Link to="/register" className="btn btn-register my-1 my-md-0 " type="button">register</Link>
              </ul>


            )}



          </div>
        </div>
      </nav >
    </div >

  )
}

export default Header;

