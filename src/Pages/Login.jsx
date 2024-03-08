import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isLogInAction } from "../Redux/Actions/actionTypes";

const Login = () => {

  const x = useNavigate()
  const userData = useSelector(state => state.userData)
  const dispatch1 = useDispatch()

  const allertEmptyField = () => {
    Swal.fire({
      title: "please enter amail and password",
      icon: "info"
    });
  }
  const allertNotFound = () => {
    Swal.fire({
      title: "user not found",
      text: "make soure that you enter write email and password",
      icon: "info"
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value === "" || e.target.password.value === "") {
      allertEmptyField()
    } else {
      if (userData.email === e.target.email.value && userData.password === e.target.password.value) {
        dispatch1(isLogInAction(true))
        x("/")
      } else {
        allertNotFound()
      }
    }
  }
  return (
    <div className="login">

      <div className="container">

        <div className="container">
          <div className="row">

            <div className="formcol col-12 col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div class="col-12">
                    <label>Email address</label>
                    <input type="email" name="email" class="inputclass" />
                    <small class="text-secondary">Do you have an account? <Link className="link" to="/register" >Register</Link></small>
                  </div>
                  <div class="col-12">
                    <label >Password</label>
                    <input type="password" name="password" class="inputclass"  />
                  </div>

                  <button className="submit" type="submit" >Submit</button>
                </div>
              </form>
            </div>

            <div className="imgcol col-12 col-lg-6 py-3">
              <div className="image-container">
                <img src="../../light.png" alt="the img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>



      </div>




    </div>
  )
};

export default Login;