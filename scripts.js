// for the mobile menu bar

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
