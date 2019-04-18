
firebase.initializeApp(config);
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
e.preventDefault();
var firstname = getInputVal('firstname');
var lastname = getInputVal('lastname');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');
saveMessage(firstname, lastname, email, phone, message);
document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

document.getElementById('contactForm').reset();
}

function getInputVal(id){
return document.getElementById(id).value;
}

function saveMessage(firstname, lastname, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
  firstname:firstname,
  lastname:lastname,
  email:email,
  phone:phone,
  message:message
});
}
