let subTotal = 0;
let discount = 0;
let fee = 0;
let total = 0;
let Quantity=0
var user=localStorage.getItem("chao")

// check from cart
let check=localStorage.getItem("checkoutFromCart")
console.log(check=="true");
if (check=="true") {
    let dataCart=localStorage.getItem(`${user}newcart`)
dataCart=JSON.parse(dataCart)
// console.log(data);
let listOder=document.getElementById("product-list")
for (let index = 0; index < dataCart.length; index++) {
  if (dataCart[index][1]!==0) {
    listOder.innerHTML +=`
    <div class="product-detail">
    <img src="${dataCart[index][0].img}" alt="">
    <div class="product-name">
        <h4>${dataCart[index][0].title} </h4><br>
        <p>Qty. ${dataCart[index][1]}</p>
    </div>
    </div>
    `
    Quantity+=dataCart[index][1]
  }
    
}

// total price



for (let index = 0; index < dataCart.length; index++) {
  subTotal += dataCart[index][1] * dataCart[index][0].price

}

if (subTotal >= 1000) {
  discount = subTotal * 0.02
  fee = 0
}
if (subTotal >= 5000) {
  discount = subTotal * 0.05
  fee = 5
}
if (subTotal >= 10000) {
  discount = subTotal / 10
  fee = 20
}
total = subTotal - discount + fee
let priceList=document.getElementById("price-list")
priceList.innerHTML +=`
<div>
<p>Sub total</p>
<p>$ ${new Intl.NumberFormat('de-DE').format(subTotal)}</p>
</div>
<div>
<p>Discount</p>
<p>$ ${discount}</p>
</div>
<div>
<p>Delivery Fee</p>
<p>$ ${fee}</p>
</div>
<div>
<p style="font-size:17px;font-weight: bold;">Grand Total</p>
<p style="font-size:17px;font-weight: bold;">$ ${new Intl.NumberFormat('de-DE').format(total)}</p>
</div>
`
    
}else{ // checkout from outside cart
     Quantity=1
    let index=localStorage.getItem("checkoutfromoutsidecart");
    
    //import
    let listOder=document.getElementById("product-list")
    let arr=localStorage.getItem("data")
    console.log(arr);
    arr=JSON.parse(arr)
    listOder.innerHTML +=`
    <div class="product-detail">
    <img src="${arr[index].img}" alt="">
    <div class="product-name">
        <h4>${arr[index].title} </h4><br>
        <p>Qty.1</p>
    </div>
    </div>
    `
    


// total price




  subTotal =  arr[index].price



if (subTotal >= 1000) {
  discount = subTotal * 0.02
  fee = 0
}
if (subTotal >= 5000) {
  discount = subTotal * 0.05
  fee = 5
}
if (subTotal >= 10000) {
  discount = subTotal / 10
  fee = 20
}
total = subTotal - discount + fee
let priceList=document.getElementById("price-list")
priceList.innerHTML +=`
<div>
<p>Sub total</p>
<p>$ ${new Intl.NumberFormat('de-DE').format(subTotal)}</p>
</div>
<div>
<p>Discount</p>
<p>$ ${discount}</p>
</div>
<div>
<p>Delivery Fee</p>
<p>$ ${fee}</p>
</div>
<div>
<p style="font-size:17px;font-weight: bold;">Grand Total</p>
<p style="font-size:17px;font-weight: bold;">$ ${new Intl.NumberFormat('de-DE').format(total)}</p>
</div>
`
}

console.log(total);
console.log(Quantity);

// Purchase
function purchase() {
  // const a = document.querySelectorAll(".div1> div")
  // console.log(a);
  // const matches=a.querySelectorAll("input")
  // console.log(matches); 
  // 
//   const container = document.querySelectorAll(".div1");
//   console.log(container);
// const matches = container.querySelectorAll("input");
// console.log(matches);
let container= document.getElementsByClassName("inp")
console.log(container);
let flag=0
for (let index = 0; index < container.length; index++) {
  console.log(container[index].value);
  if (container[index].value=="") {
    flag=1;
    container[index].setAttribute("style","border-bottom:2px solid red")
  }else{
    container[index].setAttribute("style","border-bottom:none")
  }  
  
}
// check tel number
// let tel=container[1].value;
// console.log(tel);

// const re = /\(?([0-9]{10})\)/g;
// console.log(re);
// if (tel.match(re)) {
//   document.getElementById("errortel").style.display="block"
//   console.log("test");
// }


// Action Bost
if (flag==0) {
  if (check=="true") {
    localStorage.removeItem(`${user}newcart`)
  }
  let i=0;  //Bost infomation // Update info to local
  let datauser=JSON.parse(localStorage.getItem("cuong"))
  let curentUser=localStorage.getItem("chao")
  for (let index = 0; index < datauser.length; index++) {
    if (curentUser==datauser[index].user) {
      i=index
      break;
    } 
    
  }
  // getdate
  var currentdate = new Date();
var datetime = currentdate.getDate() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() +" "+ "-"+" " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes()
console.log(datetime);

  
  
  datauser[i]["name"]=container[0].value;
  datauser[i]["phone"]=container[1].value;
  datauser[i]["Adress"]=`${container[2].value} - ${container[3].value} - ${container[4].value}`;
  datauser[i]["OrderRecently"]={"date": datetime,"qty":Quantity,"total":total}

// load về trang chủ
alert("ALL done-Continue shopping <3")
localStorage.setItem("cuong",JSON.stringify(datauser))
  setTimeout(() => {
    window.location.href="index.html"
  }, 1000);
}
  
}
// let datauser=JSON.parse(localStorage.getItem("cuong"))
// delete datauser[0]
// console.log(datauser);
// localStorage.setItem("cuong",JSON.stringify(datauser))
  // let curentUser=localStorage.getItem("chao")
  // console.log(datauser);
  // console.log(curentUser);


  
// console.log(JSON.stringify(b));

// const d=new date()
// console.log(d);

function logout() {
  localStorage.removeItem("chao")
  localStorage.removeItem("boolLogin")
  window.location.href="index.html"
}
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
  for (let index = 0; index < datauser.length; index++) {
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
      alert("All Done-Continue Shopping <3")
      setTimeout(() => {
          document.getElementById("changepass").style.display="none"
        }, 1000)
   }
  }
  // Funtion cancel
function cancel() {
  document.getElementById("changepass").style.visibility="hidden"
}
function profile(params) {
  window.location.href="Profile.html"
}

function clickuser() {
    
    
       
  let a = document.getElementById("dropdown")
  console.log(a.style.visibility);
  if (a.style.visibility === "hidden") {
      a.style.visibility = "visible";
  }
  else {
      a.style.visibility = "hidden"
  }



}
// if (localStorage.getItem("boolLogin")) {
//   // console.log(localStorage.getItem("boolLogin"));
//   // document.getElementById("btLogin").style.display = "none"
//   // document.getElementById("btSignup").style.display = "none"
//   let user = localStorage.getItem("chao")
//   // let hi = document.getElementById("sayHi");
//   // hi.textContent = user
// }

let hi = document.getElementById("sayhi");
hi.innerHTML = user

function cartpage() {
  window.location.href="cart.html"
}
//click logo
function clicklogo(params) {
  window.location.href="index.html"
}