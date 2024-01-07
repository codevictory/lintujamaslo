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

  getDocs(query(collection(db, 'invited'))).then((invited) => {
    getDocs(query(collection(db, 'submitted'))).then((submitted) => {
      getDocs(query(collection(db, 'visitors'))).then((visitor) => {
        const titleRow = 'Kutsu;Vastattu;Tulossa;Link\n';
        fs.writeFile('status.csv', titleRow, function (err) {
          if (err) return console.log(err);
          console.log('STARTED');
        });
        invited.forEach((inv) => {
          let answered = false;
          let coming = false;
          submitted.forEach((sub) => {
            if (sub.id == inv.id) {
              answered = true;
            }
          });

          visitor.forEach((vis) => {
            let data = vis.data();
            if (data.invitationId == inv.id) {
              coming = true;
            }
          });

          const link =
            'https://lintujamaslo.web.app/registration/' + btoa(inv.id);

          const row =
            inv.id + ';' + answered + ';' + coming + ';' + link + '\n';
          fs.appendFile('status.csv', row, function (err) {
            if (err) return console.log(err);
          });
        });
        console.log('DONE');
      });
    });
  });
} catch (e) {
  console.log(e);
}
