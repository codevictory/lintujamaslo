const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  query,
  getDocs,
  collection,
} = require('firebase/firestore');
const fs = require('fs');

const firebaseConfig = {
  apiKey: 'AIzaSyBcE9X0ueyczUqpjm0bK9UDrzvDmB96pr4',
  authDomain: 'lintujamaslo.firebaseapp.com',
  projectId: 'lintujamaslo',
  storageBucket: 'lintujamaslo.appspot.com',
  messagingSenderId: '110340750803',
  appId: '1:110340750803:web:89f5187720e77fc2788326',
};

try {
  initializeApp(firebaseConfig);

  const db = getFirestore();

  getDocs(query(collection(db, 'invited'))).then((docs) => {
    const titleRow = 'Kutsu\n';
    fs.writeFile('invited.csv', titleRow, function (err) {
      if (err) return console.log(err);
      console.log('STARTED');
    });
    docs.forEach((doc) => {
      const row = doc.id + '\n';
      fs.appendFile('invited.csv', row, function (err) {
        if (err) return console.log(err);
      });
    });
    console.log('DONE');
  });
} catch (e) {
  console.log(e);
}
