// Initialize Firebase (ADD YOUR OWN DATA)
let config = {
    apiKey: "AIzaSyA9UVjmb-Ucpq2pN0ADiQoUAJnvUnJrFtw",
    authDomain: "kewa-cafe-firebase.firebaseapp.com",
    databaseURL: "https://kewa-cafe-firebase.firebaseio.com",
    projectId: "kewa-cafe-firebase",
    storageBucket: "kewa-cafe-firebase.appspot.com",
    messagingSenderId: "663076662472",
    appId: "1:663076662472:web:1c98e424ef8199e718c9fd",
    measurementId: "G-3RT18K7FT2"
};
firebase.initializeApp(config);
  
// Reference messages collection
let messagesRef = firebase.database().ref('contact_messages');

// Listen for form send
document.getElementById('contact_form').addEventListener('submit', sendForm);

// send form
function sendForm(e){
  e.preventDefault();

  // Get values
  let name = getInputVal('contact_name');
  let email = getInputVal('contact_email');
  let phone = getInputVal('contact_phone');
  let message = getInputVal('contact_message');

  // Save message
  saveMessage(name, email, phone, message);

  // Clear form
  document.getElementById('contact_form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  let newMessageRef = messagesRef.push();
  alert(123);
  newMessageRef.set({
    "name": name,
    "email": email,
    "phone": phone,
    "message": message
  });
}