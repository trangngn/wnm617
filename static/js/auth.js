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
    // then navigate to the homepage
    localStorage.setItem('user', email);
    window.location.href = "/home.html"
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
    // then navigate to the homepage
    window.location.href = "home.html"
  })
	.catch(function(error){
		alert(error.message);
	});
}

function handleLoggedIn(){
	var user = firebase.auth().currentUser;
  if(user != null){
  	var email_id = user.email;

  	//change the nav item
  	$('.signin-item').text(email_id);

  	//now change the sign-in page
  	$('.signin-view').hide();
		$('.signout-view').show();
  } else {
  	//change the nav item
  	$('.signin-item').text('Sign In');

  	//now change the sign-out page
  	$('.signin-view').show();
		$('.signout-view').hide();
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
	handleLoggedIn();
	firebase.auth().onAuthStateChanged(handleLoggedIn);
})

