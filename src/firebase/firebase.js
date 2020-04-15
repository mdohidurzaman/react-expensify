import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDQUQbXqDNS5AMJVm9iv1fVWgP-iEVCyEo",
    authDomain: "expencify-b627d.firebaseapp.com",
    databaseURL: "https://expencify-b627d.firebaseio.com",
    projectId: "expencify-b627d",
    storageBucket: "expencify-b627d.appspot.com",
    messagingSenderId: "145852266027",
    appId: "1:145852266027:web:7e03077f2a52972b6f5c6e"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };


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