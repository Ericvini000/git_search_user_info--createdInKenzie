import { getUser, getRepositories} from './requests.js'

function saveUser() {
    const input = document.querySelector('.input__user');
    const a = document.querySelector('.button__user');
    a.addEventListener('click', async (e) => {
        const user = await getUser(input.value.trim());
        const repos = await getRepositories(input.value.trim())
        if(user.message === "Not Found") {
            window.location.replace("./src/pages/error.html")
        }else {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("repos", JSON.stringify(repos));
            window.location.replace("./src/pages/profile.html")
        }
    })
}

saveUser()