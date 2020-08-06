// $(".main-menu li") // loop each menu item
//   .each(function(i) {
//     if (i != 0) {
//       // only clone if more than one needed
//       $("#beep")
//         .clone()
//         .attr("id", "beep-" + i)
//         .appendTo($(this).parent());
//     }
//     $(this).data("beeper", i); // save reference
//   })
//   .mouseenter(function() {
//     $("#beep-" + $(this).data("beeper"))[0].play();
//   });
// $("#beep").attr("id", "beep-0"); // get first one into naming convention

function clickSound() {
  document.getElementById("click").play();
}

function clickStop(){
  document.getElementById("click").pause();
  document.getElementById("click").currentTime = 0;
}

function upSound() {
  document.getElementById("menuup").play();
}

function downSound() {
  document.getElementById("menudown").play();
}

function mainMenuItemsFunction(){
  clickStop();
  upSound();
  var menucode = this.getAttribute("data-item");
  console.log(menucode);
  var menucodefull = menucode + 'menu';
  document.getElementById("homepagemenu").classList.add('hidden');
  document.getElementById("marquee").classList.add('hidden');
  document.getElementById("subheading").classList.remove('hidden');
  var menuNiceText = menucode.replace(/-/g, ' ');
  document.getElementById("subheading").getElementsByTagName("span")[0].innerHTML = menuNiceText;
  document.getElementById("subheading").getElementsByTagName("span")[1].innerHTML = menuNiceText;
  document.getElementById(menucodefull).classList.remove('hidden');
}

function secondMenuItemsFunction(){
  clickStop();
  var menucode = this.getAttribute("data-item");
  if (menucode == 'done') {
    downSound();
  } else {
    upSound();
  }
  if (menucode == 'done') {
    document.getElementById("subheading").classList.add('hidden');
    document.getElementById("marquee").classList.remove('hidden');
    var secondMenuNavs = document.getElementsByClassName("second-menu-nav");
    for (var i = 0; i < secondMenuNavs.length; i++) {
      secondMenuNavs[i].classList.add('hidden');
    }
    document.getElementById("homepagemenu").classList.remove('hidden');
  }
}

var mainMenuItems = document.getElementsByClassName("main-menu-item");
var secondMenuItems = document.getElementsByClassName("second-menu-item");

for (var i = 0; i < mainMenuItems.length; i++) {
  mainMenuItems[i].addEventListener('mousedown', clickSound, false);
  mainMenuItems[i].addEventListener('mouseup', mainMenuItemsFunction, false);
}

for (var i = 0; i < secondMenuItems.length; i++) {
  secondMenuItems[i].addEventListener('mousedown', clickSound, false);
  secondMenuItems[i].addEventListener('mouseup', secondMenuItemsFunction, false);
}
