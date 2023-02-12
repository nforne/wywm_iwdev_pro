// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase, ref, set,  onValue} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration                             // -----------------uncomment as needed
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { firebaseConfig } from "./gFirebaseConfig.js";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Realtime Database and get a reference to the service
// const db = getDatabase(app);

// // realtime RW - websocket CRUD

// // dbWrite
// const bsToast = {...await import('../dialogsFns.js')}.dialogsFns.bsToast;
// const gFirebaseDBWrite = (dataObj) => {
//   set(ref(db, `q2shop/${dataObj.userID}/${dataObj.id}`), dataObj)
//   .then(() => {
//     // Data saved successfully!
//     bsToast('Sucess!', new Date().getTime(), 'Data saved successfully in realtime to dbFirebase!', 5000)
//   })
//   .catch((e) => {
//     // The write failed...
//     alert(`The write failed... : ${e}`);
//   });;
// }

// // dbRead
// const gFirebaseDBRead = (userID) => {
//   const userOrderHistoryRef = ref(db, 'q2shop/' + userID);
//   onValue(userOrderHistoryRef, (snapshot) => {
//     return snapshot.val();
//   });
// }

export const dbRWFirebase = (data, read=true) => {
  // if (read) {   // -----------------uncomment as needed
  //   return gFirebaseDBRead(data);
  // } else {
  //   gFirebaseDBWrite(data);
  // }
}