const form = document.getElementById("formInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const myName = document.getElementById("myName").value.trim();
  const myEmail = document.getElementById("myEmail").value.trim();
  const myMessage = document.getElementById("myMessage").value.trim();

  if (!myName || !myEmail || !myMessage) {
    alert("Fields cannot be empty");
  } else {
    alert(`${myName} your message have been delivered`);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");

  const onScroll = () => {
    slideElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run once on load
});
