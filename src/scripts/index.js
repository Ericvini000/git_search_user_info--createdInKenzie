import { getUser, getRepositories} from './requests.js'

function saveUser() {
    const input = document.querySelector('.input__user');
    const button = document.querySelector('.button__user');
    button.addEventListener('click', async (e) => {
        const user = await getUser(input.value.trim());
        console.log(user)
        const repos = await getRepositories(input.value.trim())
        if(user.message === "Not Found") {
            window.location.href = "./src/pages/error.html"
        
        }else {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("repos", JSON.stringify(repos));
            window.location.href = "./src/pages/profile.html"
        }
    })
}

saveUser()