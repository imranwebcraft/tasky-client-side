import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyAZXkA75dJRqArM_xdU0YbA_S0ibLcYFfU',
	authDomain: 'tasky-c4fd3.firebaseapp.com',
	projectId: 'tasky-c4fd3',
	storageBucket: 'tasky-c4fd3.appspot.com',
	messagingSenderId: '950051922108',
	appId: '1:950051922108:web:a4eec8b7c5c4f4e700b0b9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
