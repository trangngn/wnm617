function handleSignUp() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    if(email.length < 4) {
        alert('Please enter a valid email');
        return;
    }
    if(password.length < 4) {
        alert('Please enter a stronger password');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            //success
            alert("User Name Created !!!");
        })
        .catch(function(error){
            alert(error.message);
        })
}
function handleSignIn() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function(){
            location.replace("home.html");
        })
        .catch(function(error){
            alert(error.message);
        })
}

function handleSignOut(){
	firebase.auth().signOut().then(function(){
            alert("Sign Out Success !!!");
        })
        .catch(function(error){
            console.error('Sign Out error'.error);
        })
}