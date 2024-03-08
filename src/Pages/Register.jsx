import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {registerAction } from '../Redux/Actions/actionTypes'
import Swal from "sweetalert2";



const Register = () => {
    const x = useNavigate()
    const dispatch1 = useDispatch()
    const userData = useSelector(state => state.userData)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const allertEmptyField = () => {
        Swal.fire({
            title: "please fill the form",
            icon: "info"
        });
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.email.value === "" ||
            e.target.fname.value === "" ||
            e.target.lname.value === "" ||
            e.target.password.value === ""
        ) {
            allertEmptyField()
        } else {
            const userData = {
                fname: e.target.fname.value,
                lname: e.target.lname.value,
                email: e.target.email.value,
                password: e.target.password.value
            }
            dispatch1(registerAction(userData))
            x("/login")
        }
    };

    return (
        <div className="register">
            <div className="container">
                <div className="row">

                    <div className="formcol col-12 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div class="col-12">
                                    <label>Email</label>
                                    <input type="email" name="email" class="inputclass"
                                    />
                                </div>
                                <div class="col-6">
                                    <label>First name</label>
                                    <input type="text" name="fname" class="inputclass"
                                    />
                                </div>
                                <div class=" col-6">
                                    <label >Last name</label>
                                    <input type="text" name="lname" class="inputclass"
                                    />
                                </div>
                                <div class="col-12">
                                    <label>Password </label>
                                    <input type="password" name="password" class="inputclass"
                                    />
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


        </div >
    )
};
export default Register;


