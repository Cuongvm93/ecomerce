// localStorage.removeItem("cuong")
// show/hide eye
function see() {
    let z = document.getElementById("pw").type;
    let y = document.getElementById("eye")
    if (z == "password") {
        document.getElementById("pw").type = "text"
        y.classList.remove("fa-eye");
        y.classList.add("fa-eye-slash");

    } else {
        document.getElementById("pw").type = "password"
        y.classList.remove("fa-eye-slash");
        y.classList.add("fa-eye");
    }
}


function validateEmail(email1) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email1);
}

// onload
// call function
console.log('adad',checkemail());// nó sẽ chạy 1 lần còn muốn cho nó chạy tiếp thì sẽ phải gán nó vào 1 event
// vì cái email và passord đang là oninput sự kiện, nên gọi nó cần phải 1 envent nào đó

// function signup() {
//     console.log(checkemail());
// }

// define funaction
function checkemail() {
    var mail = 0;
    let panel = document.getElementById("pannel");
    console.log("111111: start");

    panel.style.display = "none";

    let check = document.getElementById("check").value;
    valid = validateEmail(check);
    console.log("222222: " + valid);

    if (valid == true) {
        document.getElementById("check").style.color = "black";
        document.getElementById("tick2").style.display = "block"
        mail++;
    } else {
        document.getElementById("check").style.color = "red";
        document.getElementById("tick2").style.display = "none"
    }

    console.log("333333: " + mail);
    return mail;
}


// focus out
// function clickout() {
//     document.getElementById("pannel").style.display="none"
// }
function checkpass() {//khi input pass thì nó chỉ chạy cái funtion này nên log checkpass() vòng ngoài ko được gọi nữa vì sự kiên oninput gắn call cái funton checkemail() này
    var i = 0;
    document.getElementById("pannel").style.display = "block";

    let nhap = document.getElementById("pw").value;
    if (nhap.match(/[a-z]/g)) {
        document.getElementById("letter").style.color = "green"
    } else {
        document.getElementById("letter").style.color = "red"
        i = 1;
    }
    if (nhap.match(/[A-Z]/g)) {
        document.getElementById("capital").style.color = "green"
    } else {
        document.getElementById("capital").style.color = "red"
        i = 1;
    }
    if (nhap.match(/[0-9]/g)) {
        document.getElementById("number").style.color = "green"
    } else {
        document.getElementById("number").style.color = "red"
        i = 1;
    }
    if (nhap.match(/[?!.* @ $ &]/g)) {
        document.getElementById("special").style.color = "green"
    } else {
        document.getElementById("special").style.color = "red"
        i = 1;
    }
    if (nhap.trim().length >= 8) {
        document.getElementById("length").style.color = "green"
    } else {
        document.getElementById("length").style.color = "red"
        i = 1;
    }
    if (i == 0) {
        document.getElementById("tick").style.display = "block"
        document.getElementById("pannel").style.display="none"

    }
    else {
        document.getElementById("tick").style.display = ("none")


    }
    console.log(i);
    return i;
    
}
let a= localStorage.getItem("cuong")
function signup() {
    console.log(checkemail());
    let email1=document.getElementById("check").value;
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pw").value;
    let info=[]
    let ojb={
        email:email1,
        user:user,
        pass:pass,
    }
   
   console.log(info);
// function check user
let newarr=JSON.parse(a)
if (a==null&&user!="") {
    
    info.push(ojb)
    localStorage.setItem("cuong",JSON.stringify(info))
    window.location.href="login.html"
    return;
}else{
    
    let checkuser=0;
    for (let index = 0; index < newarr.length; index++) {
        if (newarr[index].user==user) {
            document.getElementById("erroruser").style.display="block"
            checkuser=1
            break;
        }
        
    }
    if (user=="") {
        checkuser=1;
    }
        
    
    if (checkemail()==1&& checkpass()==0 &&checkuser==0 ) {
        document.getElementById("erroruser").style.display="none"
    //    let a= localStorage.getItem("cuong")
       
    
    //    if (a==null) {
    //     localStorage.setItem("cuong",JSON.stringify(ojb))
    //     // window.location.href="login.html"
        
    //    }else{
         let getinfo=JSON.parse(localStorage.getItem("cuong"))
         let flag=0;
        for (let index = 0; index <getinfo.length; index++) {
            
            if (email1==getinfo[index].email) {
                document.getElementById("erroremail").style.display="block"
                flag=1;
            }
                
            
        }
        
        if (flag==0) {
            getinfo.push(ojb)
            localStorage.setItem("cuong",JSON.stringify(getinfo))
            window.location.href="login.html"
        }
    
       }
        
        console.log(getinfo);
     
    }
    
}


