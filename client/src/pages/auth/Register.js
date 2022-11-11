import React,{useState} from "react";
import {toast} from 'react-toastify';

import {authentication} from '../../firebase';

const Register = () => {
  const [email,setEmail] = useState("");
  const registerForm = ()=> <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} autoFocus />
      <button type="submit" className="btn btn-raised">
        Register/{email}
      </button>
  </form>;
  const handleSubmit =async  (e)=>{
     e.preventDefault();
     const config = {
      url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
     }
     
     await authentication.sendSignInLinkToEmail(email,config);
     toast.success(
      `Email is sent to ${email}. click the link to complete registeration`
     );


     window.localStorage.setItem('emailForRegisteration',email);
     setEmail('');
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
         <h4>Register</h4>
         {registerForm()} 
        </div>
      </div>
    </div>
  );
};

export default Register;
