function returnMainPage() {
  const button = document.querySelector(".nav__a");
  return button.addEventListener("click", (e) => {
    localStorage.removeItem("user");
    window.location.href = "../../index.html";
  });
}

returnMainPage();

function createAvatar({name, avatar_url}) {
  const div = document.querySelector(".header__user");
  div.innerHTML = "";
  div.insertAdjacentHTML(
    "beforeend",
    `
    <img
    class="user__img"
    src="${avatar_url}"
    alt="${name} image"
    />
    <h1 class="user__name">${name}</h1>
    `
  );
}

function createRepositoryCard({name, description, html_url}) {
  const list = document.querySelector(".main__list");
  list.insertAdjacentHTML(
    "afterbegin",
    `
    <li class="list__item">
        <h2 class="list__item--h2">${name}</h2>
        <p class="list__item--p">
        ${description}
        </p>
        <a class="list__item--a" href="${html_url}" target="blank">Repositório</a>
    </li>
    `
  );
}

function renderProfile() {
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const repositories = JSON.parse(localStorage.getItem("repos"));
  createAvatar(user)
  repositories.forEach(repos => {
    createRepositoryCard(repos)
  });
  
}

renderProfile()
