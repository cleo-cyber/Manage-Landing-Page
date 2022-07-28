
const navSlide=()=>{
const burger = document.querySelector(".ham");
const menu = document.querySelector(".container");
const navLinks = document.querySelectorAll(".nav_links li");

burger.addEventListener("click", openMenu);

function openMenu(e) {
  
  menu.classList.toggle("open-nav");
  
  burger.classList.toggle('toggle');
  
  
}
navLinks.forEach(function (link, index) {
  link.style.animation = `fadelinks 0.5s ease forwards ${index / 7 + 0.3}s`;
});
}
navSlide()
// EVENTS //

const slider_links = document.querySelectorAll(".slider_links li");
const slideContainer = document.querySelector(".said_container .sub_container");
const slideElements = document.querySelectorAll(".said_content");
const right = document.querySelector(".right");
const indicatorParents =document.querySelector('.slider_links');

right.addEventListener("click", slide);


i = 0;
var sectionIndex = 0;

slider_links.forEach(function (indicator, index) {
  indicator.addEventListener("click", function () {
    sectionIndex = index;
    document.querySelector('.selected').classList.remove('selected')
    indicator.classList.add('selected')
    slideContainer.style.transform =
      "translateX(" + sectionIndex * slideElements.length * -11.2 + "%)";
  });
});


// FUNCTIONS//
function slide(e) {
  if (sectionIndex < slideElements.length - 1) {
    sectionIndex = sectionIndex + 1;
  } 
  
  else if (sectionIndex == slideElements.length - 1) {
    sectionIndex = 0;
  } else {
    sectionIndex = slideElements.length - 1;
  }
  selectedItem()
  slideContainer.style.transform =
    "translateX(" + sectionIndex * slideElements.length * -11.2 + "%)";
}

function slideLeft(e) {
  if (sectionIndex > slideElements.length - 1) {
    sectionIndex = sectionIndex - 1;
  } else if (sectionIndex == slideElements.length - 1) {
    sectionIndex = slideElements.length - 1;
  } else {
    sectionIndex = 0;
  }
  selectedItem()
  slideContainer.style.transform =
    "translateX(" + sectionIndex * slideElements.length * -11.2 + "%)";
}

function selectedItem(){
  document.querySelector('.selected').classList.remove('selected')
  indicatorParents.children[sectionIndex].classList.add('selected')
}

//EMAIL VALIDATION //

const email= document.querySelector('.email');

const submitBtn=document.querySelector('.submitBtn');

submitBtn.addEventListener('click',validateInput);

function validateInput(e){
 if(email.value.length==0){
  e.preventDefault()
  email.classList.add('invalid_input');
  email.style.border='1px solid red';
  alert('The email address is not formatted correctly')
 }
}

setTimeout(function(){
  email.classList.remove('invalid_input');
  email.style.border='';
},3000)