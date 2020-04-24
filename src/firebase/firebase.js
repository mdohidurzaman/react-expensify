import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //appId: "1:145852266027:web:7e03077f2a52972b6f5c6e"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };


/*
database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 5500,
    createdAt: 987542
});
database.ref('expenses').push({
    description: 'Phone bill',
    note: '',
    amount: 6600,
    createdAt: 987542
});
database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 4400,
    createdAt: 987542
});




const notes = [{
    id: '12',
    title: 'this is first note',
    body: 'this is my body'
}, {
    id: '712ase',
    title: 'this is second note',
    body: 'this is my body'
}];

    database.ref('notes').set(notes);

database.ref().set({
    name: 'Abdul Wahid',
    age: 40,
    isSingle: false,
    job: {
        title: 'Software developer',
        company: 'Amazon'
    },
    location: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
    });

database.ref('attributes').set({
    weight: 120,
    Hight: 180
});
*/