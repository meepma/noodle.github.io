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
    room_name=localStorage.getItem("roomname");
    function send(){
        msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      message:msg,
      name:user_name,
      like:0
});
document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button> <hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";  
}

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      like1=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:like1
      });
}
