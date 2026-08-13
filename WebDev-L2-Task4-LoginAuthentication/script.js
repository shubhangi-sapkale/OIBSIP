function register(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username===""||password===""){
        alert("Fill all fields");
        return;
    }
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    alert("Registration Successful");
    window.location="index.html";
}
function login(){
    let user=document.getElementById("loginUser").value;
    let pass=document.getElementById("loginPass").value;
    let storedUser=localStorage.getItem("username");
    let storedPass=localStorage.getItem("password");
    if(user===storedUser && pass===storedPass){
        localStorage.setItem("loggedIn","true");
        window.location="dashboard.html";
    }else{
        alert("Invalid Username or Password");
    }
}
if(window.location.pathname.includes("dashboard.html")){
    if(localStorage.getItem("loggedIn")!=="true"){
        window.location="index.html";
    }else{
        document.getElementById("welcome").innerHTML=
        "Hello, "+localStorage.getItem("username")+"!";
    }
}
function logout(){
    localStorage.removeItem("loggedIn");
    window.location="index.html";
}
