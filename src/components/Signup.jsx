import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



function Signup(){

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    //   console.log("signedup");
  };

    return(
        <form onSubmit={signUp}>
            <div className="login">
            <div class="text">Create your first Account</div>
            <div class="text2">Already have one? <a href="#">Login</a></div>
            
            <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className='button btn'>Sign Up</button>
            
            </div>
            <div>
                <p></p>
            </div>
        </form>
    )
}

export default Signup;