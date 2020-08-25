const firebase = require('firebase');
const firebaseConfig = require('../config/firebase.js');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = {
    create: (data) => {
        return db.collection('users').doc().set(data);
    },
    createUser: ({email, password}) => {
       return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    login: ({email, password}) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    all: () => {
        return db.collection('users').get();
    },
    getById: (id) => {
        return db.collection('users').doc(id).get();
    },
    update: (id, data) => {
        return db.collection('users').doc(id).update(data);
    }
}