function changeMode() {
  if (mode.className == "fa-solid fa-sun") {
    mode.className = "fa-solid fa-moon";
  } else {
    mode.className = "fa-solid fa-sun";
  }
  let body = document.querySelector("body");
  if (mode.classList.contains("fa-sun")) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
}
function calc() {
  let replaced = res.value;
  if (res.value.includes("÷") || res.value.includes("×")) {
    replaced = res.value.replaceAll("÷", "/").replaceAll("×", "*");
  }
  res.value = eval(replaced);
}
