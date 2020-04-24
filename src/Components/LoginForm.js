import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faEye } from '@fortawesome/free-solid-svg-icons';
import EQLogo from '../Assets/Img/EQ-logo.png';

function LoginForm() {

  const[showPass,setsShowPass]=useState(false);

  const showPassword = () =>{
    setsShowPass(!showPass);
    setTimeout(() => {
      setsShowPass(false);
    },1500);    
  }
  
  return (
    <Router>
    <div className="col-sm-6 full-width d-flex align-items-center bg-img-form py-4 py-md-0">
      <div className="width-resp ml-md-5">
          <div className="text-center text-sm-left">
          <img src={EQLogo} className="eq-logo mb-3 mb-md-3" alt=""/>
          <h4 className="text-capitalize mb-3 mb-md-3">
          <FontAwesomeIcon className="mr-2" icon={faLock} />
          vet login
          </h4>
          </div>
          <form className="">
              <div className="form-group mb-0">
                  <span className="mb-2 d-block">Email Address</span>
                  <input type="text" placeholder="" className="form-control form-input-text"/>
                  <span onClick={showPassword} className="d-block text-right small theme-font-color cursor-pointer"><FontAwesomeIcon icon={faEye}/> Show</span>
              </div>
              <div className="form-group mb-0">
                  <span className="mb-2 d-block">Password</span>
                  <input type={showPass?'text':'password'} placeholder="" className="form-control form-input-text"/>
                  <Link to="/"><span className="d-block text-right small theme-font-color "><u>Forgot Password?</u></span></Link>
              </div>
              <div className="form-group mt-3 mt-sm-4">
                <Button title="Login" color="theme-bg"/>
              </div>
              <div className="text-center">
                <p className="small">Don't have an account? <br/>
                <Link to="/"><u className="theme-font-color">Register for free account</u></Link>
                
                </p>
              </div>
          </form>
      </div>
    </div>
  </Router>

  );
}

export default LoginForm;
