   
    document.getElementById("loginForm").addEventListener("submit",function(event){ // get the valu form main page 
        event.preventDefault(); // prevent the referesh 

        const User =document.getElementById("username").value;// get username from user input username
        const Pass =document.getElementById("Password").value;// get password form user input password

        if( User == "Username" && Pass == "Password"){ // compare user detalis for ture using &
            alert("Login successful");
          
        }
        else{ // for false show the detalis 
            document.getElementById("msg").innerHTML="Invalid login or password"
        }
    });
