document.addEventListener("DOMContentLoaded", function () {
  // Select the menu element
  var menu = document.querySelector("#menu");

  // Clone the menu
  var clonedMenu = menu.cloneNode(true);

  // Select the div where you want to append the cloned menu
  var targetDiv = document.querySelector("#mbl_menu");

  // Append the cloned menu to the target div
  targetDiv.appendChild(clonedMenu);
});

$(document).ready(function () {
  $("#mbl_menu #menu").mmenu({
    slidingSubmenus: false,
    navbar: { add: false },
  });
});

//code for the check the nested  ul

// Get the parent <ul> element
const menu = document.getElementById("menu");

// Get all <li> elements inside the menu
const menuItems = menu.querySelectorAll("li");

// Iterate over each <li> element and check if it contains a nested <ul>
menuItems.forEach((item) => {
  const nestedUl = item.querySelector("ul");
  if (nestedUl) {
    // If it contains a nested <ul>, add a dropdown icon
    const dropdownIcon = document.createElement("span");
    dropdownIcon.className = "dropdown-icon";
    dropdownIcon.innerHTML = "&#8964;"; // Unicode for down arrow
    item.appendChild(dropdownIcon);
  }
});
