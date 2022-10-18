// check from cart
let check=localStorage.getItem("checkoutFromCart")
console.log(check=="true");
if (check=="true") {
    let dataCart=localStorage.getItem("newcart")
dataCart=JSON.parse(dataCart)
// console.log(data);
let listOder=document.getElementById("product-list")
for (let index = 0; index < dataCart.length; index++) {
    listOder.innerHTML +=`
    <div class="product-detail">
    <img src="${dataCart[index][0].img}" alt="">
    <div class="product-name">
        <h4>${dataCart[index][0].title} </h4><br>
        <p>Qty. ${dataCart[index][1]}</p>
    </div>
    </div>
    `
    
}

// total price
let subTotal = 0;
let discount = 0;
let fee = 0;
let total = 0;


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
let subTotal = 0;
let discount = 0;
let fee = 0;
let total = 0;



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