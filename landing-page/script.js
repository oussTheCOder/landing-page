// navigation menu :click on menu-btn to show the navigation
const menuBtn=document.querySelector(".menu-btn");
const navigation=document.querySelector(".navigation");
let menuOpen=false;
menuBtn.addEventListener("click",showNav);

function showNav(){
    navigation.classList.toggle("show");
    if(!menuOpen){
        menuBtn.classList.add("open");
        menuOpen=true;
    }else{
        menuBtn.classList.remove("open");
        menuOpen=false;
    }
}
//close the navigation when click on nav-list-item if the windows width is <1000px;
let x=window.matchMedia("(max-width: 1000px)");
function closeNav(){
    if(x.matches){
      console.log("hello");
      navigation.classList.remove("show");
    }
}
let navItems=document.querySelectorAll(".nav-list-item");
navItems.forEach(navItem=>{
    navItem.addEventListener("click",closeNav);
})
//remove notVisible class from social head when hovering on contact head
const contSocialPrent=document.querySelector(".header-lang-contact");
const contactHead=document.querySelector(".header-lang-contact .contact");
const socialHead=document.querySelector(".social-header");

contactHead.addEventListener("pointerover",(e)=>{
    socialHead.classList.remove("notVisible");
})
contSocialPrent.addEventListener("pointerleave",(e)=>{
    socialHead.classList.add("notVisible");
})
// swiper js
    let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next-cost",
      prevEl: ".swiper-button-prev-cost",
    },
    breakpoints:{
        650:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        775:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
  });
// form validation client-side 
const form=document.getElementById("form");
const userName=document.getElementById("name");
const userEmail=document.getElementById("email");
const userPhone=document.getElementById("phone");
form.addEventListener("submit",(e)=>{
    // e.preventDefault();
    checkInputs(e);
})
function checkInputs(e){
    const userNameValue=userName.value.trim();
    const userEmailValue=userEmail.value.trim();
    const userPhoneValue=userPhone.value.trim();
    if(userNameValue===""){ 
        e.preventDefault();
        setErrorFor(userName,"userName must be filled");
    }else{
        setSuccessFor(userName);
    }

    if(userEmailValue===""){
        e.preventDefault();
        setErrorFor(userEmail,"Email must be filled");
    }else if(validateEmail(userEmailValue)==null){
        e.preventDefault();
        setErrorFor(userEmail,"Email is not valid");
    }
    else{
        setSuccessFor(userEmail);
    }

    if(userPhoneValue===""){
        e.preventDefault();
        setErrorFor(userPhone,"userPhone must be filled");
    }else{
        setSuccessFor(userPhone);
    }
}
function setErrorFor(inputElement,message){
    const parentElement=inputElement.parentElement;
    const messageElement=parentElement.lastElementChild;
    parentElement.className="form-control error";
    messageElement.innerText=message; 
}
function setSuccessFor(inputElement){
    const parentElement=inputElement.parentElement;
    const messageElement=parentElement.lastElementChild;
    parentElement.className="form-control confirm";
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //color palettes


  //change color properties while changing the color
let lis=document.querySelectorAll(".color-items li");
let coloredElement=document.querySelectorAll(".colored");
let darkBtn=document.querySelectorAll(".btn-dark");
let lightBtn=document.querySelectorAll(".btn-light");
let navs=document.querySelectorAll(".fancy-link");
let featInput=document.querySelector(".feat-pro-btn input");
let serviceItems=document.querySelectorAll(".service-item");
let serviceItemsImg=document.querySelectorAll(".service-item-img");
//if we have already color key in local storage
if(window.localStorage.getItem("color")){
    //1 colored element must have the local storage color value
    console.log("yes");
    coloredElement.forEach((element)=>{
        element.style.color=`${window.localStorage.getItem("color")}`;
    });
    darkBtn.forEach((btn)=>{
        btn.style.backgroundColor=`${window.localStorage.getItem("color")}`;
        btn.style.borderColor=`${window.localStorage.getItem("color")}`;
    })
    lightBtn.forEach((btn)=>{
        btn.style.color=`${window.localStorage.getItem("color")}`;
        btn.style.borderColor=`${window.localStorage.getItem("color")}`;
    })
    navs.forEach((nav)=>{
        nav.style.color=`${window.localStorage.getItem("color")}`;
       
    })
    featInput.style.borderColor=`${window.localStorage.getItem("color")}`;
    //2 remove active class from ll lis
    lis.forEach((li)=>{
        li.classList.remove("active");
    });
    //3 add active class to the li which is has the same color of local storage color value
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

//add click event to lis
lis.forEach((li)=>{
    if(!li.classList.contains("mode")){
    
        li.addEventListener("click",(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        //add this color to local storage
        window.localStorage.setItem("color",`${e.currentTarget.dataset.color}`);
        //add this current color to colord element
        coloredElement.forEach((element)=>{
            element.style.color=`${e.currentTarget.dataset.color}`;
        })
        darkBtn.forEach((btn)=>{
            btn.style.backgroundColor=`${e.currentTarget.dataset.color}`;
            btn.style.borderColor=`${e.currentTarget.dataset.color}`;
        })
        lightBtn.forEach((btn)=>{
            btn.style.color=`${e.currentTarget.dataset.color}`;
            btn.style.borderColor=`${e.currentTarget.dataset.color}`;
        })
        navs.forEach((nav)=>{
            nav.style.color=`${e.currentTarget.dataset.color}`;
        
        })
        
        featInput.style.borderColor=`${e.currentTarget.dataset.color}`;
        })
    }
 
})
  //color palette btn-color
  const colorParent=document.querySelector(".color-palettes");
  const colorBtn=document.querySelector(".color-btn img");
  const exitColor=document.querySelector(".exit-color");
  colorBtn.addEventListener("click",()=>{
      colorParent.classList.add("activated");
  })
  exitColor.addEventListener("click",()=>{
      colorParent.classList.remove("activated");
  })
  



//dark and light mode
//which elements have to change their color
            //--the logo/the layer /the background-image of the form/the background-color of service item
            //--the src of the background-mode img has to be changed also
let darkModeBtn=document.querySelector(".mode");
let colorPalette=document.querySelector(".color-items");
let socialIcons=document.querySelectorAll(".social-icons>a>div>i");
if(window.localStorage.getItem("dark-mode")=="true"){
    console.log("mkjsdfljsdjfsldkjf")
    document.body.classList.add("dark");
    serviceItems.forEach((service)=>{
        service.classList.add("dark");
    })
    socialIcons.forEach((icon)=>{
        icon.classList.add("dark");
    })
    colorPalette.classList.add("dark");
    darkModeBtn.classList.add("active");
}
darkModeBtn.addEventListener("click",(e)=>{
    window.localStorage.setItem("dark-mode",document.body.classList.toggle("dark"));    
    serviceItems.forEach((service)=>{
        service.classList.toggle("dark");
    })
    socialIcons.forEach((icon)=>{
        icon.classList.toggle("dark");
    })
    colorPalette.classList.toggle("dark");
    darkModeBtn.setAttribute("src","images/light-mode.png");
    darkModeBtn.classList.toggle("active");
    
})



