// for the mobile menu bar
const menu = document.getElementById("menu-bar");
const navLinks = document.getElementById("mobileNav");
const links = navLinks.querySelectorAll("a");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.onclick = () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
  };
});

const form = document.getElementById("formInput");

form.addEventListener("submit", function (e) {
  const myName = document.getElementById("myName").value.trim();
  const myEmail = document.getElementById("myEmail").value.trim();
  const myMessage = document.getElementById("myMessage").value.trim();

  if (!myName || !myEmail || !myMessage) {
    alert("Fields cannot be empty");
    e.preventDefault();
  }
});
