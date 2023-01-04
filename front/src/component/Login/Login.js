import React from'react'
import '../Login/Login.css'
export default function Login(){
    return(
    <>
     <div className='login'>
         <form>
            <div className='input-container'>
                <label className='e-con'>email</label>
                <input className='con-input' type={'email'} name='email'value=''/>
            </div>
            <div className='input-container'>
                <label className='e-con'>password</label>
                <input className='con-input' type={'password'} name='email' value=''/>
            </div>
            <div className='button-container'>
                <button className='b-con' type='submit'>connexion</button>
            </div>
            <p className="redirect">
                      Already have an account?{" "}
                      <a href="/login">
                        Log In
                      </a>
            </p>


         </form>

     </div>
    </>
    )
}