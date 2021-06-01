import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { startLoading, stopLoading } from "./UI";

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => ({
	type: types.logout,
});

export const startLogout = (uid, displayName) => {
	return async (dispatch) => {
		try {
			await firebase.auth().signOut();
			dispatch(logout());
		} catch (error) {}
	};
};

export const startGoogleLogin = () => {
	return async (dispatch) => {
		const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
		const { uid, displayName } = user;

		dispatch(login(uid, displayName));
	};
};

export const startLoginEmailPassword = (email, password) => {
	return async (dispatch) => {
		try {
			// Start login
			dispatch(startLoading());
			const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
			const { uid, displayName } = user;

			// Finish login
			dispatch(login(uid, displayName));
			dispatch(stopLoading());
		} catch (error) {
			dispatch(stopLoading());
			Swal.fire("Error", error.message, "error");
		}
	};
};

export const startRegisterEmailPasswordName = (email, password, name) => {
	return async (dispatch) => {
		try {
			// Start Register
			dispatch(startLoading());
			const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

			await user.updateProfile({ displayName: name });
			const { uid, displayName } = user;

			// Finish Register
			dispatch(login(uid, displayName));
			dispatch(stopLoading());
		} catch (error) {
			dispatch(stopLoading());
			Swal.fire("Error", error.message, "error");
		}
	};
};
