import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";

import { setError, removeError } from "../../actions/UI";
import { startRegisterEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
	// Redux hooks
	const dispatch = useDispatch();
	const UIstate = useSelector((state) => state.ui);

	const { msgError, loading } = UIstate;

	const [formValues, handleInputChange] = useForm({
		name: "Jose Antonio Felix",
		email: "tumamaypapa@gmail.ez",
		password: "123tamarindo",
		password2: "123tamarindo",
	});

	const { name, email, password, password2 } = formValues;

	const isFormValid = () => {
		if (!name.trim().length) {
			dispatch(setError("Name is too short"));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError("Invalid email"));
			return false;
		} else if (password !== password2) {
			dispatch(setError("Password doesn't match"));
			return false;
		} else if (password.trim().length < 6) {
			dispatch(setError("Password is too short"));
			return false;
		}

		dispatch(removeError());
		return true;
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterEmailPasswordName(email, password, name));
		}
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form onSubmit={handleRegister}>
				{msgError ? <div className="auth__alert-error">{msgError}</div> : ""}

				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>

				<input
					type="email"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleInputChange}
				/>

				<button disabled={loading} type="submit" className="btn btn-primary btn-block mb-5">
					Register
				</button>
				{/* <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div> */}

				<Link className="link" to="/auth/login">
					Already registered?
				</Link>
			</form>
		</>
	);
};
