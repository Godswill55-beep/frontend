function showMessage() {
  document.getElementById("output").textContent = "You clicked the button!";
}

function toggleMenu() {
  const navLinks=document.getElementsById("navLinks");
  navLinks.classList.toggle("show");

}
