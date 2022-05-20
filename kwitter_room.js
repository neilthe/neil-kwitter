
var firebaseConfig = {
      apiKey: "AIzaSyD44ftHZeV2I2GFHooO7WN3zIyJR_zNkeY",
      authDomain: "kwit-a33ca.firebaseapp.com",
      databaseURL: "https://kwit-a33ca-default-rtdb.firebaseio.com",
      projectId: "kwit-a33ca",
      storageBucket: "kwit-a33ca.appspot.com",
      messagingSenderId: "46433189586",
      appId: "1:46433189586:web:cd1a5bd26135880cb2f70b"
    };
    
 
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById ("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      
      });
      });
      }
      getData();
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            windows.location = "kwitter_page.html";
      }

      function logout()
      {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
      }