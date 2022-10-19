
   
    function login() {
        let user=document.getElementById("user").value;
        let pass=document.getElementById("pass").value;
        let data=localStorage.getItem("cuong");
        data=JSON.parse(data);
        console.log(data);
        console.log(data[2].user);
        console.log(data[2].pass);
        let i=0;
        let j=0;
        for (let index = 1; index < data.length; index++) {
            if (user!==data[index].user||pass!==data[index].pass) {
              i=1
            } else{
                i=0;
                j=index
                break;
            }
            
        }
        if (i==1) {
            alert("tai khoan khong ton tai");
        }
        if (i==0) {
            localStorage.setItem("boolLogin","true")
            window.location.href="index.html"
            localStorage.setItem("chao",data[j].user)
            // option thêm 1 đoạn boollogin nua, neu nó true khi nguoi dùng login trang thì moi hiện username           
        }
        
        
    }
    function forgetpass() {
       let body= document.getElementById("body")
       body.style.backGroundImage.opacity="1.5"
    }
