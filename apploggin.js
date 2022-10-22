
   
    function login() {
        let user=document.getElementById("user").value;
        let pass=document.getElementById("pass").value;
        let data=localStorage.getItem("cuong");     
        data=JSON.parse(data)
        
        // console.log(data);
        // console.log(data[2].user);
        // console.log(data[2].pass);
        let i=0;
        let j=0;
        let arruser=[]
        let arrpass=[]
        for (let index = 0; index < data.length; index++) {
             arruser.push(data[index].user)
            
            
        }
        let index=arruser.indexOf(user)
        if (index== -1) {
            document.getElementById("usererror").style.display="block"
            i=1;
        }else{
            document.getElementById("usererror").style.display="none"
            i=0;
            if (data[index].pass!=pass) {
                document.getElementById("passerroe").style.display="block"
                j=1
            }else{
                document.getElementById("passerroe").style.display="none"
                j=0;
            }
        }
       console.log(index);

      console.log(i);
      console.log(j);
       
        if (i==0 &&j==0) {
            localStorage.setItem("boolLogin","true")
            localStorage.setItem("chao",data[index].user)
            // if (localStorage.getItem("productChoice") ==null) { // check xem đã choice product chưa
                window.location.href="index.html"
            // }else{
            //     window.location.href="productPage.html"
            // }
            
            // option thêm 1 đoạn boollogin nua, neu nó true khi nguoi dùng login trang thì moi hiện username           
        }
        
        
    }
    function forgetpass() {
       let login= document.getElementsByClassName("login")
       login[0].classList.add("gethidden")
       document.getElementsByClassName("forgetpass")[0].style.display="block"
    }
    function updatepass(params) {
        let data=localStorage.getItem("cuong");
        data=JSON.parse(data)
        console.log(data);
        let flag=0;
        let mailforget=document.getElementById("mailforget").value
        let newpass=document.getElementById("newpass").value
        let repass=document.getElementById("repass").value
        let arr=[]
        for (let index = 0; index < data.length; index++) {
         arr.push(data[index].email)
         
        }
        console.log(arr);
        if (arr.indexOf(mailforget) == -1) {
            console.log(111);
         document.getElementById("emailfoul").style.display="block"
         flag=1
        }
        else{
         let index=arr.indexOf(mailforget)
         console.log(index);
         document.getElementById("emailfoul").style.display="none"
         let re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
         if (!newpass.match(re)) {
             flag=1
             document.getElementById("passfoul").style.display="block"
         }else{
             document.getElementById("passfoul").style.display="none"
             if (newpass!==repass) {
                 flag=1
                 document.getElementById("repassfoul").style.display="block"
             }else{
                 document.getElementById("repassfoul").style.display="none"
             }
        }
        if (flag==0) {
         data[index].pass=newpass
         localStorage.setItem("cuong",JSON.stringify(data))
         alert("Done!")
         document.getElementsByClassName("forgetpass")[0].style.display="none"
         document.getElementsByClassName("login")[0].classList.remove("gethidden")
        }
     }
    }
    

function cancelforget(params) {
    document.getElementsByClassName("forgetpass")[0].style.display=("none")
    document.getElementsByClassName("login")[0].classList.remove("gethidden")
}

function see(params) {
    let a=document.getElementById("pass")
    if (a.type=="password") {
        a.setAttribute("type","text")
        document.getElementById("eye").classList.remove("fa-eye")
        document.getElementById("eye").classList.add("fa-eye-slash")
    }else{
        a.setAttribute("type","password")
        document.getElementById("eye").classList.remove("fa-eye-slash")
        document.getElementById("eye").classList.add("fa-eye")
    }
}

function see2(params) {
    let a=document.getElementById("newpass")
    if (a.type=="password") {
        a.setAttribute("type","text")
        document.getElementById("eye2").classList.remove("fa-eye")
        document.getElementById("eye2").classList.add("fa-eye-slash")
    }else{
        a.setAttribute("type","password")
        document.getElementById("eye2").classList.remove("fa-eye-slash")
        document.getElementById("eye2").classList.add("fa-eye")
    }
}

function see3(params) {
    let a=document.getElementById("repass")
    if (a.type=="password") {
        a.setAttribute("type","text")
        document.getElementById("eye3").classList.remove("fa-eye")
        document.getElementById("eye3").classList.add("fa-eye-slash")
    }else{
        a.setAttribute("type","password")
        document.getElementById("eye3").classList.remove("fa-eye-slash")
        document.getElementById("eye3").classList.add("fa-eye")
    }
}