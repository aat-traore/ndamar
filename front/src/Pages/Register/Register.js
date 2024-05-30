import React from "react";
import "./Register.css";
export default function Register() {
  return (
    <>
     <div className="container container_register">
	<div className="screen_register">
		<div className="screen__content">
			<form className="register">
				<div className="register__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text"className="register__input" placeholder="Username "/>
				</div>
                <div className="register__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text"className="register__input" placeholder="LastName "/>
				</div>
                <div className="register__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text"className="register__input" placeholder="FirstName"/>
				</div> 
                <div className="register__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text"className="register__input" placeholder="Email"/>
				</div>
				<div className="register__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password"className="register__input" placeholder="Password"/>
				</div>
				<div className="register__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password"className="register__input" placeholder=" Confirm_Password"/>
				</div>
				<button className="button register__submit">
					<span className="button__text"> Registre</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	</div>
    </>
  );
}
