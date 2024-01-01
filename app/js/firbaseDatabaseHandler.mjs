// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, push, onValue, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCtUIOs4xeaTK2srRDPheJRuiELfnPtYNs",
    authDomain: "date-tracker-895c7.firebaseapp.com",
    databaseURL: "https://date-tracker-895c7-default-rtdb.firebaseio.com/",
    projectId: "date-tracker-895c7",
    storageBucket: "date-tracker-895c7.appspot.com",
    messagingSenderId: "669041723755",
    appId: "1:669041723755:web:5b7c1f5c5f7e7d4214a42e",
    measurementId: "G-B2Y5S08JMX"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databse = getDatabase(app);
const AuthenticateUserdb = ref(databse, "UserAuth");
const EmergencyHistorydb = ref(databse, "UserAuth/EmergencyHistory");
const TrackDatedb = ref(databse, "UserAuth/TrackDate");

export function createIt(dbname, object) {
    push(AuthenticateUserdb , object)
    console.log("created") 
}

export function readIT(dbname){
      get(AuthenticateUserdb ).then((snapshot) => {
      if (snapshot.exists()) {
          let readArray = Object.values(snapshot.val());
          console.log(readArray);
          return  readArray
          //var info = '<h1> '+ (profile[0].name) + ',' + (profile[0].number) +' </h1>';
        // var historydata = document.getElementById("HistoryDiv").innerHTML = info;
      } else {
        console.log("No data available");
        return null;
      }});
  }

export function updateIt(){console.log("Updated")}
export function deleteIt(){console.log("Deleted")} 

