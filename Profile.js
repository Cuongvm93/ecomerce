let login = localStorage.getItem("boolLogin")
function clickuser() {

if (login == "true") {
   
    let a = document.getElementById("dropdown")
    console.log(a.style.visibility);
    if (a.style.visibility === "hidden") {
        a.style.visibility = "visible";
    }
    else {
        a.style.visibility = "hidden"
    }
}


}
 //Funtion Change Pass
 function changepass() {
    document.getElementById("changepass").style.visibility="visible"
    document.getElementById("dropdown").style.visibility="hidden"

}
//Update password
function update() {
let flag=0;
let i=0;
let arremail=[];
let arrpass=[];
let re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
let mail=document.getElementById("emailcheck").value
let pass=document.getElementById("oldpass").value
let newpass=document.getElementById("newpass").value
let user=localStorage.getItem("chao")
let datauser=JSON.parse(localStorage.getItem("cuong"))
// console.log(datauser[1].user);
for (let index = 1; index < datauser.length; index++) {
    if (user==datauser[index].user) {
        i=index
        break;
        
    }
    
}  
// console.log(i);

if (mail!== datauser[i].email) {
    flag=1
    document.getElementById("emailnotmatch").style.display="block"
}
else{
    document.getElementById("emailnotmatch").style.display="none"
}   
if (pass!==datauser[i].pass) {
    flag=1
    document.getElementById("passnotmatch").style.display="block"
}else{
    document.getElementById("passnotmatch").style.display="none"
}
if (!newpass.match(re)) {
    flag=1
    document.getElementById("passincorrect").style.display="block"
}else{
    document.getElementById("passincorrect").style.display="none"
}

 if (pass!=""&&newpass===pass) {
    flag=1
    document.getElementById("matcholdpass").style.display="block"
 }else{
    document.getElementById("matcholdpass").style.display="none"
 }
 console.log(flag);
 if (flag==0) {
    datauser[i].pass=newpass
    localStorage.setItem("cuong",JSON.stringify(datauser))
    document.getElementById("done").style.display="block"
    
    setTimeout(() => {
        document.getElementById("changepass").style.display="none"
      }, 2000)
 }
}
function cancel() {
    document.getElementById("changepass").style.visibility="hidden"
}



    // buy now Button
    function buynow() {
        localStorage.setItem("checkoutFromCart","false")
        localStorage.setItem("checkoutfromoutsidecart",x)
        window.location.href="chechout.html"
    }

    // Hide - Visible Icon Cart
if (localStorage.getItem("boolLogin")!="true") {
    document.getElementsByClassName("fi-rr-shopping-bag")[0].style.display="none"

}else{
    document.getElementsByClassName("fi-rr-shopping-bag")[0].style.display="block"
}

// funtion Login
function gologin() {
    window.location.href="login.html"
}
function gosingup() {
    window.location.href="signup.html"
}
// if (localStorage.getItem("boolLogin")=="true") {
//     document.getElementById("btLogin").style.display="none"
//     document.getElementById("btSignup").style.display="none"
// }
// else{
//     document.getElementById("btLogin").style.display="block"
//     document.getElementById("btSignup").style.display="block"
// }
// Function Log out
function logout() {
    localStorage.removeItem("chao")
    localStorage.removeItem("boolLogin")
    
    window.location.href="index.html"
}   


//funtion show UserName and Cart
if (localStorage.getItem("boolLogin")=="true") {
    console.log(localStorage.getItem("boolLogin"));
    // document.getElementById("btLogin").style.display = "none"
    // document.getElementById("btSignup").style.display = "none"
    let user = localStorage.getItem("chao")
    let hi = document.getElementById("sayhi");
    hi.textContent = user
}

// import infomation
let datainfo= JSON.parse(localStorage.getItem("cuong"))
let currentUser=localStorage.getItem("chao")
for (let index = 1; index < datainfo.length; index++) {
    if (datainfo[index].user==currentUser) {
        document.getElementById("fullname").textContent =datainfo[index].name
        document.getElementById("username").textContent=currentUser
        document.getElementById("email").textContent=datainfo[index].email
        document.getElementById("tel").textContent=datainfo[index].phone
        document.getElementById("adress").textContent=datainfo[index].Adress
        document.getElementById("date").textContent=datainfo[index].OrderRecently.date
        document.getElementById("unit").textContent=`Item: ${datainfo[index].OrderRecently.qty}`
        document.getElementById("Total").textContent=`Tolal: ${new Intl.NumberFormat('de-DE').format(datainfo[index].OrderRecently.total)} $` 
    }
    
}

// click cart icon
function cartpage() {
    window.location.href="cart.html"
}

//click logo
function clicklogo(params) {
    window.location.href="index.html"
}