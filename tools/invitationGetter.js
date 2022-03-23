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

  getDocs(query(collection(db, 'visitors'))).then((docs) => {
    const titleRow = 'Nimi;Kutsu;Malja;Valio;Allergiat\n';
    fs.writeFile('visitors.csv', titleRow, function (err) {
      if (err) return console.log(err);
      console.log('STARTED');
    });
    docs.forEach((doc) => {
      const data = doc.data();
      const row =
        doc.id +
        ';' +
        data.invitationId +
        ';' +
        data.welcomeDrink +
        ';' +
        data.preferences +
        ';' +
        data.allergies +
        '\n';
      fs.appendFile('visitors.csv', row, function (err) {
        if (err) return console.log(err);
      });
    });
    console.log('DONE');
  });
} catch (e) {
  console.log(e);
}
