const baseUrl = "https://api.github.com";

async function getUser(name) {
  const user = await fetch(`${baseUrl}/users/${name}`)
    .then((res) => res.json())
    .catch((res) => console.log(res));
  return user;
}

async function getRepositories(name) {
  const repos = await fetch(`${baseUrl}/users/${name}/repos`)
    .then((res) => res.json())
    .catch((res) => res.json());
  return repos;
}

export { getUser, getRepositories };