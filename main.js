// Initialize Firebase
var config = {
    apiKey: "AIzaSyAQHOYy5hEarM_EVwwIqUq7f94eV6-er24",
    authDomain: "clubhouse-registration.firebaseapp.com",
    databaseURL: "https://clubhouse-registration.firebaseio.com",
    projectId: "clubhouse-registration",
    storageBucket: "clubhouse-registration.appspot.com",
    messagingSenderId: "521549056665"
  };
  firebase.initializeApp(config);

   // Reference massages collection
   var messagesRef = firebase.database().ref('massages');


//Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
    
   //Get values
   var surname = getInputVal("surname"); 
   var name = getInputVal("name"); 
   var idNumber = getInputVal("idNumber"); 
   var nationality = getInputVal("nationality"); 
   var gender = getInputVal("gender"); 
   var age = getInputVal("age"); 
   var homeLanguage = getInputVal("homeLanguage"); 
   var cell = getInputVal("cell");
   var tel = getInputVal("tel");  
   var email = getInputVal("email"); 

    // Save message
   saveMessage(surname,name,idNumber,nationality,gender,age,homeLanguage,cell,tel,email);

   //Show Alert
   document.querySelector('.alert').style.display = "block";

   //Hide alert after 3 seconds

   setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
   },3000)

   //clear form
   document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save massage to firebase
function saveMessage(surname,name,idNumber,nationality,gender,age,homeLanguage,cell,tel,email){
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
    surname: surname,   
    name: name,
    idNumber: idNumber,
    nationality: nationality,
    gender: gender,
    age: age,
    homeLanguage: homeLanguage,
    cell: cell,
    tel: tel,
    email: email
   });
}