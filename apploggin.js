
   
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
        let arruser=[]
        let arrpass=[]
        for (let index = 1; index < data.length; index++) {
             arruser.push(data[index].user)
            
            
        }
        let index=arruser.indexOf(user)
        if (index== -1) {
            document.getElementById("usererror").style.display="block"
            i=1;
        }else{
            document.getElementById("usererror").style.display="none"
            i=0;
            if (data[index+1].pass!=pass) {
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
            localStorage.setItem("chao",data[index+1].user)
            // if (localStorage.getItem("productChoice") ==null) { // check xem đã choice product chưa
                window.location.href="index.html"
            // }else{
            //     window.location.href="productPage.html"
            // }
            
            // option thêm 1 đoạn boollogin nua, neu nó true khi nguoi dùng login trang thì moi hiện username           
        }
        
        
    }
    function forgetpass() {
       let body= document.getElementsByClassName("opacity")
       body[0].style.display="block"
       document.getElementsByClassName("forgetpass")[0].style.display="block"
    }
