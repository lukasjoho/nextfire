import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBKarql_iLJNd6RHsENby2-KBqrr4cfCi4',
	authDomain: 'nextfire-4030f.firebaseapp.com',
	projectId: 'nextfire-4030f',
	storageBucket: 'nextfire-4030f.appspot.com',
	messagingSenderId: '610380173900',
	appId: '1:610380173900:web:6753fdcc141acd07f59ae9',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
