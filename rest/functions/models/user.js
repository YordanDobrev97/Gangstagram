const firebase = require('firebase');
const firebaseConfig = require('../config/firebase.js');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = {
    create: (data) => {
        return db.collection('users').doc().set(data);
    },
    all: () => {
        return db.collection('users').get();
    }
}