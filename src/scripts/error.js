function redirect() {
  const button = document.querySelector(".main__warning--button");
  return button.addEventListener("click", (e) => {
    window.location.replace("../../index.html");
  });
}

redirect();
