import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7XKgluzlMpaoENEfW8GEmBlP4xTFVkxA",
  authDomain: "expensify-f906d.firebaseapp.com",
  databaseURL: "https://expensify-f906d.firebaseio.com",
  projectId: "expensify-f906d",
  storageBucket: "expensify-f906d.appspot.com",
  messagingSenderId: "133554820538"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('value', (snapshot) => {
  const expensesArray = [];
  snapshot.forEach((childSnapshot) => {
    expensesArray.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expensesArray);
});

// database.ref('expenses').push({
//   description: 'Rent',
//   note:'Last Payment of the year',
//   amount:'34344',
//   createdAt: 1000
// });
//
// database.ref('expenses').push({
//   description: 'Gym Fee',
//   note:'Pay Gym fee',
//   amount:'466767',
//   createdAt: 7000
// });
//
// database.ref('expenses').push({
//   description: 'Car',
//   note:'Pay car rent',
//   amount:'3434400',
//   createdAt: 100000
// });




// const onValueChange = database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const job = snapshot.val().job.title;
//   const company = snapshot.val().job.company;
//   console.log(`${name} is a ${job} at ${company}`);
// }, (e) => {
//   console.log('An error occured.', e);
// });


// Reference for getting data off a firebase

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);


// Our very first Old code

// database.ref().set({
//   name: 'Smurphy Makaluza',
//   age: 20,
//   stressLevel: 6,
//   job: {
//     title:'Software developer',
//     company:'Google'
//   },
//   location: {
//     city:'Cape Town',
//     country:'South Africa'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log("This shit failed!", e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city':'Seattle'
// });
