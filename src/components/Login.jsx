import './Login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth } from '../firebase';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';




function Login(){

  
    const navigate= useNavigate();
  

    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email);
    console.log(password);

    function onLogin(e){
        e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
      };
        
    
return(
        <form onSubmit={onLogin}>
            <div className="login">
            <div class="text">Login into your account</div>
            <div class="text2">Don't have a account yet? 
            <Link to="/signup">Create One?</Link>
            </div>
            <div class="data">
            
            <input 
            onChange={e => setEmail(e.target.value)}
            value={email} 
            type="email" 
            id="email" 
            placeholder='Enter your E-mail'></input><br/>

            <input 
            onChange={e=>setPassword(e.target.value)}
            value={password} 
            type="password" 
            id="password" 
            placeholder='Password'></input><br/>
            </div>

            <button type="submit" class="button btn">Login</button>
            <button onClick={()=>{
              navigate("/signup")
            }}
            type="submit" class="button btn">SignUp</button>
            </div>
        </form>
    )
}

export default Login;