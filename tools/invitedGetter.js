const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  query,
  getDocs,
  collection,
} = require('firebase/firestore');
const fs = require('fs');

const firebaseConfig = {
  apiKey: "AIzaSyAQx4TnM3XIf-Mp_XUp1pN-Hsf0AKKe-eo",
  authDomain: "tomika-f62a1.firebaseapp.com",
  projectId: "tomika-f62a1",
  storageBucket: "tomika-f62a1.appspot.com",
  messagingSenderId: "215561604477",
  appId: "1:215561604477:web:a6bc047d86687f41205014",
  measurementId: "G-EL7E921FV1"
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
