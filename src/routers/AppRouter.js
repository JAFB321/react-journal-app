import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				const { uid, displayName } = user;
				dispatch(login(uid, displayName));
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}

			setChecking(false);
		});
	}, [dispatch, setChecking]);

	if (checking) {
		return <h1>Espere...</h1>;
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isAuthenticated}
						path="/auth"
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={isAuthenticated}
						path="/"
						component={JournalScreen}
						exact
					/>

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
