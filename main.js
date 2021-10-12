var menuList = document.getElementById("menuList");
var iconMenu = document.getElementById("icon_menu");
iconMenu.onclick = function () {
  if (menuList.style.display == "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
};
