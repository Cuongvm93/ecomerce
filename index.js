let data=[
    {   id: "id0",
        img:"./adidas/adidasID1.jpg",
        title:"CAMPUS 80S SOUTH PARK TOWELIE",
        des:"Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.",
        price:80,
        cate:"adidas"

    },
    {
        id:"id1",
        img:"./adidas/adidasId2.jpg",
        title:"Sam smith Shoe", 
        des:"Inspired by the original AJ1",
        price:120,
        cate:"adidas"
    },
    {
        id:"id2",
        img:"./adidas/adidasID3.jpg",
        title:"Ultimashow Shoes",
        des:"Inspired by the original id2",
        price:85,
        cate:"adidas"
    },
    {
        id:"id3",
        img:"./adidas/AdidasID4.JPG",
        title:"Manchester United 22/23 Home Jersey",
        des:"Inspired by the original id3",
        price:170,
        cate:"adidas"
    },
    {
        id:"id4",
        img:"./adidas/AdidasID5.Jpg",
        title:"Forum Low CL",
        des:"Inspired by the original id4",
        price:75,
        cate:"adidas"
    },
    {
        id:"id5",
        img:"./Nike/id1.jpg",
        title:"Air Jordan 1 Mid",
        des:"Inspired by the original id5",
        price:125,
        cate:"nike"
    },
    {
        id:"id6",
        img:"./Nike/id2.jpg",
        title:"Nike Air Force",
        des:"Inspired by the original id6",
        price:130,
        cate:"nike"
    },
    {
        id:"id7",
        img:"./Nike/id3.jpg",
        title:"Nike Dunk High Retro",
        des:"Inspired by the original id7",
        price:125,
        cate:"nike"
    },
    {
        id:"id8",
        img:"./Nike/nike4.jpg",
        title:"Men wear leg",
        des:"Inspired by the original id8", 
        price:135,
        cate:"nike"
    },
    {
        id:"id9",
        img:"./Nike/nike5.jpg",
        title:"Nike SB Force 58",
        des:"Inspired by the original id9",
        price:80,
        cate:"nike",
        
    },
    {
        id:"id10",
        img:"./dior/dior3.jpg",
        title:"Large DiorAlps Dior Book Tote",
        des:"Inspired by the original id10",
        price:3788,
        cate:"dior"
    },
    {
        id:"id11",
        img:"./dior/dior4.jpg",
        title:"Large Dior Book Tote",
        des:"Inspired by the original id111",
        price:4095,
        cate:"dior"
    },
    {
        id:"id12",
        img:"./dior/dior1.jpg",
        title:"Mini dior Bag",
        des:"Inspired by the original id12",
        price:4200,
        cate:"dior"
    },
    {
        id:"id13",
        img:"./dior/dior2.jpg",
        title:"Medium Dior book Tole",
        des:"Inspired by the original id13",
        price:4150,
        cate:"dior"
    }   
]





localStorage.setItem("data",JSON.stringify(data))
let y=document.getElementById("adidaslist")
let nikelist=document.getElementById("nikelist")
let diorlist=document.getElementById("diorlist")
for (let index = 0; index < data.length; index++) {
//   if (data[index].cate=="adidas") {
//     y.innerHTML +=`
//     <div id="${data[index].id}" class="cardproduct">
//     <img src=${data[index].img} alt="">
//     <p style="font-size:15px ;text-align:center">${data[index].title}</p>
//     <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
//     <button style="color: red;"><i class="fi fi-rr-shopping-cart-add"></i> Add to cart</button>
//        <button>Buy Now</button>          
//     `
//   }else if (data[index].cate=="nike") {
//     nikelist.innerHTML +=`
//     <div id="${data[index].id}" class="cardproduct">
//     <img src=${data[index].img} alt="">
//     <p style="font-size:15px ;text-align:center">${data[index].title}</p>
//     <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
//     <button style="color: red;"><i class="fi fi-rr-shopping-cart-add"></i> Add to cart</button>
//        <button>Buy Now</button>          
//     `
//   }else{
//     diorlist.innerHTML +=`
//     <div id="${data[index].id}" class="cardproduct">
//     <img src=${data[index].img} alt="">
//     <p style="font-size:15px ;text-align:center">${data[index].title}</p>
//     <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
//     <button style="color: red;"><i class="fi fi-rr-shopping-cart-add"></i> Add to cart</button>
//        <button>Buy Now</button>          
//     `
//   }

    let dat = `
         <div id="${data[index].id}" class="cardproduct">
         <img src=${data[index].img} alt="">
        <p style="font-size:15px ;text-align:center">${data[index].title}</p>
        <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
         <button style="" ><i class="fi fi-rr-shopping-cart-add" ></i> Add to cart</button>
           <button>Buy Now</button>          
        ` ;
    if (data[index].cate=="adidas") {y.innerHTML += dat}
    else if(data[index].cate=="nike"){nikelist.innerHTML += dat}
    else{
        diorlist.innerHTML += dat;
    }
}
// }
// let nikelist=document.getElementById("nikelist")
// for (let index = 5; index < 10; index++) {

//   nikelist.innerHTML +=`
//   <div id="${data[index].id}" class="cardproduct">
//   <img src=${data[index].img} alt="">
//   <p style="font-size:15px ;text-align:center">${data[index].title}</p>
//   <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
//   <button style="color: red;"><i class="fi fi-rr-shopping-cart-add"></i> Add to cart</button>
//      <button>Buy Now</button>          
//   `
// }
// let diorlist=document.getElementById("diorlist")
// for (let index = 10; index < data.length; index++) {

//   diorlist.innerHTML +=`
//   <div id="${data[index].id}" class="cardproduct">
//   <img src=${data[index].img} alt="">
//   <p style="font-size:15px ;text-align:center">${data[index].title}</p>
//   <p style="font-size: 15px; font-weight: bold;text-align:center"">${data[index].price}</p>
//   <button style="color: red;"><i class="fi fi-rr-shopping-cart-add"></i> Add to cart</button>
//      <button>Buy Now</button>          
//   `
// }













if (localStorage.getItem("boolLogin")) {
    console.log(localStorage.getItem("boolLogin"));
    document.getElementById("btLogin").style.display = "none"
    document.getElementById("btSignup").style.display = "none"
    let user = localStorage.getItem("chao")
    let hi = document.getElementById("sayHi");
    hi.textContent = user
}
let user = localStorage.getItem("chao")
let hi = document.getElementById("sayHi");
hi.textContent = user

function logout() {
    localStorage.removeItem("chao")
    location.reload()
}
function changePass() {
    document.getElementById("passPannel").style.display = "block"
}
function submit() {
    let oldPass = document.getElementById("oldPass").value;
    let arr = localStorage.getItem("cuong")
    let arrPass = []
    arr = JSON.parse(arr)
    let i = 0;
    for (let index = 0; index < arr.length; index++) {

        if (user == arr[index].email) {
            i = index;
            break;
        }
    }
    // check trùng pass
    for (let index = 0; index < arr.length; index++) {
        arrPass.push(arr[index].pass)

    }
    if (arrPass.indexOf(oldPass) == -1) {
        alert("Pass Word nhập không đúng")
    } else {
        console.log("222222");
        document.getElementById("newPassFeild").style.display = "block"
        let newPass = document.getElementById("newPassFeild").value;
        console.log("111", newPass);
        if (newPass == oldPass) {
            alert("New pass trùng old pass")
        }
        else {
            arr[i].pass = newPass;
            console.log(arr[i].pass);
            console.log(arr);
            //localStorage.setItem("cuong",JSON.stringify(arr))
        }


    }
}
// console.log(mouse());
//    while (true) {

function mouse() {
    // random màu của he hello
    setInterval(() => {

        let red = Math.floor(Math.random() * 255)

        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        document.getElementById("sayHi").style.color = `Rgb(${red},${green},${blue})`


    }, 700);
}
function userClick() {
    let login = localStorage.getItem("boolLogin")
    if (login == true) {
        let a = document.getElementById("pannellogin")
        if (a.style.display == "none") {
            a.style.display = "block";
        }
        else {
            a.style.display = "none"
        }
    }


}

// slide show
// setInterval(() => {
//     let a=document.getElementsByClassName("mySlides");
//     let x=Math.floor(Math.random()*4)
//     console.log(x);
//     a[0].setAttribute("src",`./image/slide${x}.jpg`)
// }, 1200 );


// show tapMenu -- done
let tabBrand = document.querySelectorAll(".tap-brand")
let tabContent = document.querySelectorAll(".tap-content");
tabBrand.forEach((tap, index) => {
    tap.onclick = function () {
        document.getElementsByClassName("tap-brand active")[0].classList.remove("active")
        this.classList.add("active")
        document.getElementsByClassName("tap-content active")[0].classList.remove("active")
        tabContent[index].classList.add("active")
    }
})

// Get produc property
// let productList=[]
// let productShow1=[]
// let productShow2=[]
// let x=document.querySelectorAll(".adidascard")
// console.log(x);

//     let a=x[0].children
//     productShow1.push(a[0].src)
//     for (let j = 1; j <3; j++) {
//         productShow1.push(a[j].textContent)
        
//     }
//     let b=x[1].children
//     productShow2.push(b[0].src)
//     for (let j = 1; j <3; j++) {
//         productShow2.push(b[j].textContent)
        
//     }
//     productList.push(productShow1,productShow2)
// localStorage.setItem("producProperty",JSON.stringify(productList))

// Onclick product Card -- done
let x=document.querySelectorAll(".cardproduct")
console.log(x);

x.forEach((tap,index)=>{
    tap.children[0].onclick=function () {
        console.log(index);
        localStorage.setItem("productChoice",index)
        window.location.href="productPage.html"
    }
})

//ADD TO CART
// localStorage.removeItem("cart")
// localStorage.removeItem("newcart")

let cart=[]
x.forEach((tap,index)=>{
    tap.children[3].onclick=function () {
        cart=(JSON.parse(localStorage.getItem("newcart")))
        // console.log(cart);
        // console.log(cart==null);
        // let g=JSON.stringify(cart[0][0])
        // let h=JSON.stringify(data[index])
        // console.log(g==h);
        // console.log(cart);
        if (cart==null) {
            cart=[]
            cart.push([data[index],1])
            console.log(cart);
        }else{
            let flag =0;
            for (let i = 0; i < cart.length; i++) {
                //JSON.stringify(cart[i][0])==JSON.stringify(data[index])
                if (cart[i][0].id==data[index].id) {
                    cart[i][1]++
                    flag=1;
                }
                
            } 
            if (flag==0) {
                cart.push([data[index],1])
            }
        }
        
        
        localStorage.setItem("newcart",JSON.stringify(cart))
    }
})



