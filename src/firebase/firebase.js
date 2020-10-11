import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCWBe0XNUB4AYOyfcxc6002KyImopYu1VM",
    authDomain: "expensify-e7769.firebaseapp.com",
    databaseURL: "https://expensify-e7769.firebaseio.com",
    projectId: "expensify-e7769",
    storageBucket: "expensify-e7769.appspot.com",
    messagingSenderId: "449485489161",
    appId: "1:449485489161:web:0433ebef5fccd0eaac64d8",
    measurementId: "G-P1FE5NSD41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const database = firebase.database();

  const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();



export {firebase, googleAuthProvider, database as default};



// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//         ...childSnapshot.val()
//     })});
//     console.log(expenses);
// } , (error)=>{
//     console.log("Error", error)
// }
// )



//   database.ref('expenses').push({
//       description:'sjndajs',
//       amount:29,
//       createAt:1000,
//       note:''
//   });
//   database.ref('expenses').push({
//     description:'dadss',
//     amount:400,
//     createAt:2000,
//     note:''
// });
// database.ref('expenses').push({
//     description:'dajs',
//     amount:94,
//     createAt:-1000,
//     note:''
// });



//   database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
//   });

// const notes =[{
//     id:12,
//     body:'snkasd',
//     title:'first note'
// },
// {
//     id:14,
//     body:'snkasd',
//     title:'ssecond note'
// },
// {
//     id:15,
//     body:'snkasd',
//     title:'other note'
// }
// ];

// databaseURL.ref().set(notes);

//   database.ref().
//   once('value').
//   then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
//   }).catch((e)=>{
//     console.log('Error: ' ,e);
//   });

//   database.ref().set({
//       name:'Rotesh',
//       age:26,
//       isSingle: true,
//       location :{
//           city: 'Pune',
//           state: 'Maharashtra'
//       }
//   }).then(()=>{
//       console.log("data is saved!")
//   }).catch((error)=>{
//       console.log("failed", error);
//   });

//   //database.ref().set('This is my date.');
//   database.ref('age').set(27);
//   database.ref('location/city').set('Mumbai');
// //   database.ref('attributes').set({
// //     height: 5.11,
// //     weight: 72
// //   });

// // database.ref().remove()
// // .then(()=>{
// //     console.log('Data removed');
// // }).catch((e)=>{
// // console.log('Error: ' ,e);
// // });

// database.ref().update({
//     name:'Chhabra',
//     age: 30,
//     job:'Software Engineer',
//     isSingle: null
// })
