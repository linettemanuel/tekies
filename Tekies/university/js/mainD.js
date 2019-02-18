var firstNum = document.querySelector('.integrity');
var secondNum = document.querySelector('.multi-device');
var thirdNum = document.querySelector('.process');
var circles = document.querySelectorAll('.app_round_image');
var menu = document.querySelectorAll(".nav");
var sectionNames = document.querySelectorAll(".section");
var body = document.getElementsByTagName("body");
var copyParents = document.querySelectorAll(".tooltip");
var copy = document.querySelectorAll(".copy");
var copyIcon = document.querySelectorAll(".fa-copy");
var copyConfirm = document.querySelectorAll(".tooltiptext-confirm");
var menuOnOffButton = document.querySelector(".material-icons");
var mobileMenu = document.querySelector(".nav-mobile");
var mobileMenuArea = document.querySelector(".nav-area-mobile");
var mobileMenuTags = mobileMenu.querySelectorAll(".nav-item");
var __valueSection = document.querySelector("#values");
var menuSections =  document.querySelectorAll(".menu-section")
var counter = 0;




mobileMenuTags.forEach( tag => {
  tag.onclick = () => {
    if(window.innerWidth < 410) {
      menuOnOff();
    }
  }
})


menuOnOffButton.onclick = () => {
  menuOnOff();
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
  //changeActiveFields();
}

window.onscroll = () => {
  if(circles[0].getBoundingClientRect().top < 450) {
    countNumber(firstNum, 84);
    countNumber(secondNum, 89);
    countNumber(thirdNum, 91);
  }
  menuSections.forEach( (section, index) => {
    if ((section.getBoundingClientRect().top < 0 ) && (section.getBoundingClientRect().bottom > 0)) {
      var current = document.querySelectorAll(".active");
      changeActiveFieldsOnBoth(current);
      menu[0].children[index].classList.add("active");
      menu[1].children[index].classList.add("active");
    }
  })
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
