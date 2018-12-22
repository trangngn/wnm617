<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="static/css/nav.css">



  
</head>
<body>

  

<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="home.html"><img src="static/resources/nav/nav.jpg"  width="30" height="30" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="home.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="detail.html">Products</a>
      </li>
     <!-- Please add this code to your html page 33-36 -->
           <a id="signin" class="nav-link" href="sign-in.html">Sign In</a>
        <span id="signout"class="nav-link" href="sign-in.html">
          <span id="user_para"></span>
          <a class="nav-link" href="home.html">Sign Out</a>
          
        </span>
    </ul>
    <!--  <button onclick="signIn()">Sign in</button> -->
    

    <!-- <div class="nav-link"><a href="sign-in.html">Sign In</a></div> -->
    <!-- <div class="nav-link"><a href="sign-out.html">Sign out</a></div> -->
  </div>
</nav>
<main>
  
  
</main>


<footer class="footer bg-light">

        <p class="text-muted">Final project 2018</p>

    </footer>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

      
      
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxbnHLQTFJHPTRLMhvD88A70NAxdmCcQk",
    authDomain: "bok7-314bb.firebaseapp.com",
    databaseURL: "https://bok7-314bb.firebaseio.com",
    projectId: "bok7-314bb",
    storageBucket: "",
    messagingSenderId: "75637353165"
  };
  firebase.initializeApp(config);
</script>
     <!--   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> -->
      <script src="static/js/auth.js"></script>
</body>

</html>
