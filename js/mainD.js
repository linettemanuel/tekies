var firstNum = document.querySelector('.integrity');
var secondNum = document.querySelector('.multi-device');
var thirdNum = document.querySelector('.process');
var menu = document.querySelectorAll(".nav");
var sectionNames = document.querySelectorAll(".section");
var body = document.getElementsByTagName("body");
var copyParents = document.querySelectorAll(".tooltip");
var copy = document.querySelectorAll(".copy");
var copyIcon = document.querySelectorAll(".fa-copy");
var copyConfirm = document.querySelectorAll(".tooltiptext-confirm");
var menuOnOffButton = document.querySelector(".material-icons");
var mobileMenuArea = document.querySelector(".nav-area-mobile");
var __valueSection = document.querySelector("#values");
var menuSections =  document.querySelectorAll(".menu-section")
var counter = 0;
var groups = document.querySelectorAll(".join-group");

groups.forEach ( group => {
  displayBar(group);
});

function displayBar(group) {
  var bar = group.querySelector(".bar");
  group.onmouseover = () => {
    bar.style.visibility = "visible";
    bar.style.animation = "show 4s ease forwards";
  }
}



function menuOnOff() {
  if(counter % 2 === 0) {
    mobileMenu.style.pointerEvents = "all"
    mobileMenu.style.transition = "1s opacity ease"
    mobileMenu.style.opacity = 1;
    menuOnOffButton.innerHTML = "clear";
    mobileMenuArea.style.zIndex = 100000;

  } else {
    mobileMenu.style.transition = "1s opacity ease"
    mobileMenu.style.opacity = 0;
    mobileMenu.style.pointerEvents = "none"
    menuOnOffButton.innerHTML = "reorder";
    mobileMenuArea.style.transition = "1s all ease"
    mobileMenuArea.style.zIndex = -100000;
  }
  counter++;
}

copyParents.forEach( (copyParent, index) => {
  copyParent.onclick = () => {
    copy[index].select();
    document.execCommand("copy");
    copyConfirm[index].style.visibility = "visible";
    setTimeout(() => {
      copyConfirm[index].style.visibility = "hidden";
    },1000);
  }
})

copy.forEach( (input, index) => {
  input.onclick = () => {
    input.select();
    document.execCommand("copy");
    copyConfirm[index].style.visibility = "visible";
    setTimeout(() => {
      copyConfirm[index].style.visibility = "hidden";
    },1000);
  }
});

copyIcon.forEach( icon => {
  changeColorOfIcon(icon);
});

function changeColorOfIcon(x) {
  x.onclick = () => {
    x.style.backgroundColor = "#54f9ba";
    setTimeout(() => {
      x.style.backgroundColor = "#2a2d2e";
    },1100);
  }
}

window.onload = () => {
  var preloader = document.querySelector(".preloader");
  preloader.style.animation = "fadeOut 1s ease forwards";
  preloader.style.zIndex = -20;
}



function changeActiveFieldsOnBoth(a) {
  a.forEach( b => {
    b.className = b.className.replace("active", "");
  });
}


function countNumber(a, n) {
  if(a.innerHTML == "<span>%</span>") {
    for (let i=1; i < n + 1 ; i++) {
      setTimeout( function timer(){
          a.innerHTML = i + "%";
      }, i*20 );
    }
  }
}

function changeActiveFields() {
  for (var i = 0; i < menu[0].children.length; i++) {
    activatingField(menu[0].children[i]);
  }
  for (var i = 0; i < menu[1].children.length; i++) {
    activatingField(menu[1].children[i]);
  }
}

function activatingField(a) {
    a.addEventListener("click", (e) => {
    var current = document.querySelectorAll(".active");
    changeActiveFieldsOnBoth(current);
    e.target.classList.add("active");
  });
}


var formPage = document.querySelector(".page-behind");
var closingButton = document.querySelector(".close-button");
closingButton.onclick = () => {
  formPage.style.display = "none";
}

var joinGroups = document.querySelectorAll(".join-group");
joinGroups.forEach( joinGroup => {
  joinGroup.onclick = () => {
    formPage.style.display = "block";
  }
})

var submitButton = document.querySelector(".submit");
submitButton.onclick = () => {
}

var menuIcon = document.querySelector(".burger-menu");
var menuArea = document.querySelector(".main-menu-area");

let menuCounter = 0;
menuIcon.onclick = () => {
  if (menuCounter % 2 == 0) {
    menuArea.style.display = "block";
    menuIcon.innerHTML = '<svg class="close-button" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224"style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#ffffff"><path d="M43.93229,30.73438l-13.19792,13.19792l68.06771,68.06771l-68.06771,68.06771l13.19792,13.19791l68.06771,-68.06771l68.06771,68.06771l13.19791,-13.19791l-68.06771,-68.06771l68.06771,-68.06771l-13.19791,-13.19792l-68.06771,68.06771z"></path></g></g></svg>';
    menuCounter++
  } else {
    menuArea.style.display = "none";
    menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 224 224" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g id="Layer_1" fill="#ffffff"><path d="M199.5,38.5v7h-175v-7zM24.5,115.5h175v-7h-175zM73.5,80.5h126v-7h-126zM73.5,150.5h126v-7h-126zM24.5,185.5h175v-7h-175z"></path><path d="M199.5,56v7h-14v-7zM199.5,91v7h-14v-7zM199.5,126v7h-14v-7zM199.5,161v7h-14v-7z"></path></g></g></svg>';
    menuCounter++
  }
}
