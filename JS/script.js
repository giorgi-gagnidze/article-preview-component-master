function showDiv() {
  let element = document.getElementById("social-icons-container");
  if (screen.width > 600) {
    element.classList.toggle("show-div");
  } else {
    document.getElementById("social-icons-container").style.display = "flex";
  }
}

function hideDiv() {
  document.getElementById("social-icons-container").style.display = "none";
}
