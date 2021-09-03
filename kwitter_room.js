
const firebaseConfig = {
      apiKey: "AIzaSyCn4slYPbFv5_-t7lRlyaq4x61-pccTdFI",
      authDomain: "kwitter-a943c.firebaseapp.com",
      databaseURL: "https://kwitter-a943c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a943c",
      storageBucket: "kwitter-a943c.appspot.com",
      messagingSenderId: "673214944388",
      appId: "1:673214944388:web:8dba52e2aeb639ff1fded1",
      measurementId: "G-WMCE4ZPLH7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
