import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
	// Redux hooks
	const dispatch = useDispatch();
	const UIstate = useSelector((state) => state.ui);

	const { loading } = UIstate;

	const [formValues, handleInputChange] = useForm({
		email: "tumamaypapa@gmail.ez",
		password: "123tamarindo",
	});

	const handleLogin = (e) => {
		e.preventDefault();

		const { email, password } = formValues;
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		const { email, password } = formValues;
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					placeholder="email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={formValues.email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="password"
					name="password"
					className="auth__input"
					value={formValues.password}
					onChange={handleInputChange}
				/>

				<button disabled={loading} type="submit" className="btn btn-primary btn-block">
					Login
				</button>
				<div className="auth__social-networks">
					<p>Login with social networks</p>

					<div onClick={handleGoogleLogin} className="google-btn">
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link className="link" to="/auth/register">
					Create account
				</Link>
			</form>
		</>
	);
};
