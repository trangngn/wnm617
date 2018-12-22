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
        .then(function(user){
            // handleLoggedIn(user);

            console.log(user)
            location.href = "home.html";
        })
        .catch(function(error){
            alert(error.message);
        })



}

function handleLoggedIn(user){

    console.log(user)

if (user) {
    // User is signed in.

    $("#signin").hide();
    $("#signout").show();
    // document.getElementById("signout").style.display = "block";
    // document.getElementById("signin").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      $("#user_para").html(email_id);

    }

  } else {
    // No user is signed in.

    $("#signin").show();
    $("#signout").hide();
    // document.getElementById("signout").style.display = "none";
    // document.getElementById("signin").style.display = "block";

  }
}

// on the home page code needs something like this
// firebase.auth().onAuthStateChanged(handleLoggedIn);

function handleSignOut(){
	firebase.auth().signOut().then(function(){
            alert("Sign Out Success !!!");
        })
        .catch(function(error){
            console.error('Sign Out error'.error);
        })

      
}

$(function(){
    firebase.auth().onAuthStateChanged(handleLoggedIn);
})
