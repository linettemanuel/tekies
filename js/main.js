var firstNum = document.querySelector('.integrity');
var secondNum = document.querySelector('.multi-device');
var thirdNum = document.querySelector('.process');
var circles = document.querySelectorAll('.app_round_image');
var menu = document.querySelector(".nav");
var menuItems = menu.querySelectorAll(".nav-item");
var sectionNames = document.querySelectorAll(".section");
var body = document.getElementsByTagName("body");

window.onload = () => {
  changeActiveFields();
  body.children[0].classList.add("fadeIn");
  addClassToChildren(body.children[0].children, "fadeIn");
  changeOpacity(body.children[0]);
  changeActiveFields()
}

circles[0].onmouseover = () => {
  countNumber(firstNum, 84)
}

circles[1].onmouseover = () => {
  countNumber(secondNum, 89)
}

circles[2].onmouseover = () => {
  countNumber(thirdNum, 91)
}

function countNumber(a, n) {
  for (let i=1; i < n + 1 ; i++) {
    setTimeout( function timer(){
        a.innerHTML = i + "%";
    }, i*20 );
  }
}

function changeActiveFields() {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", (e) => {
      var current = document.getElementsByClassName("active");
      console.log(current[0]);
      current[0].className = current[0].className.replace("active", "");
      e.target.classList.add("active");
    });
  }
}

body.onscroll = () => {
  sectionNames.forEach ( (item, index) => {

    if ((item.getBoundingClientRect().top < 500) && (item.getBoundingClientRect().top > 0)){
      findActiveField(item);
    }

    if ((item.getBoundingClientRect().top < 500) && (item.getBoundingClientRect().top > 0) && (index != 0)){
      var childrenList = item.children;
      item.classList.add("appearUp");
      addClassToChildren(childrenList, "appearUp");
      changeOpacity(item);
    }
  })
}

function findActiveField (fieldName) {
  for (var i = 0; i < menuItems.length; i++) {
    activeFieldName = fieldName.children[0].attributes[0].value.toLowerCase()
    if(activeFieldName == menuItems[i].childNodes[0].nodeValue.toLowerCase()){
      menuItems[i].classList.add("active");
    } else {
      menuItems[i].classList.remove("active");
    }
  }
}

function addClassToChildren(e, choosenclass) {
  for (var i = 0; i < e.length; i++) {
    e[i].classList.add(choosenclass);
    var newChildren = e[i].children;
    addClassToChildren(newChildren, choosenclass);
  }
}

function changeOpacity(e) {
  e.style.opacity = 1;
  removeAnimation(e,("appearUp", "fadeIn"));
}

function removeAnimation(e, choosenclass) {
  e.classList.remove(choosenclass);
}
