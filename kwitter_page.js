var firebaseConfig = {
    apiKey: "AIzaSyCwdTGwuHKdAxf_F9XlrhHbdNrcBpZcSmk",
    authDomain: "kwitter-209ce.firebaseapp.com",
    databaseURL: "https://kwitter-209ce-default-rtdb.firebaseio.com",
    projectId: "kwitter-209ce",
    storageBucket: "kwitter-209ce.appspot.com",
    messagingSenderId: "753925777863",
    appId: "1:753925777863:web:86a05ca5302a75e81151e2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  username=localStorage.getItem("username")
  roomname=localStorage.getItem("roomname")