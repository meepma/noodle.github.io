
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
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";    
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}