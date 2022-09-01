
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAymweSdjgpkQlXZXZEqksOfiNNwifjrwc",
    authDomain: "e-commerce-436ac.firebaseapp.com",
    databaseURL: "https://e-commerce-436ac.firebaseio.com",
    projectId: "e-commerce-436ac",
    storageBucket: "e-commerce-436ac.appspot.com",
    messagingSenderId: "232416050355",
    appId: "1:232416050355:web:67944b18e385d5875e44c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth()


  function signUp() {
      var email = document.querySelector('#email');
            var password = document.querySelector("#password");
            const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
            promise.catch(e => alert(e.message))
            alert('signed up')

      
  }
  

  function signIn() {
       var email = document.querySelector("#email");
       var password = document.querySelector("#password");
       auth.signInWithEmailAndPassword(
         email.value,
         password.value
       ).then((res) => {
            window.location.href = "page.html";

       }).catch(e => alert('wrong credentials'))
       
      
    
      
    //    take user to different page

  }


  function signOut() {
      auth.signOut()
      alert('signed out')
       window.location.href = "index.html";

  }
  auth.onAuthStateChanged(function (user) {
    if (user) {
      var email = user.email;
      alert("Active User" + email);
    } else {
      alert("No Active User");
    }
  });
