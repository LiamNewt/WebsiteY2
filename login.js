document.getElementById('user-login').addEventListener('submit', (event) => {


    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="example@email.com" && password=="password1")  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);    
        window.location.href = "/shop";  // redirect to shop page
    }
    else {
        alert("invalid login details");
        
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
       
    }
    event.preventDefault();
  });


