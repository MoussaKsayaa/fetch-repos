// 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
// https://api.github.com/users/MoussaKsayaa/repos

let username = document.querySelector(".username");
let getRepos = document.querySelector(".get-repos");
let showRepos = document.querySelector(".show-repos");

window.onload = () => {
  username.focus();
}

getRepos.onclick = () => {

    if (username.value === "") {
      showRepos.innerHTML =
      "<span>the username is empty, please fill it before.</span>";
  } else {
    showRepos.innerHTML = "<span>the repos: </span>";
    fetch(`https://api.github.com/users/${username.value}/repos`)
      .then((response) => {
          if (response.ok) {
          return response.json();
        } else {
          throw Error('the username is not found!')
          }
      })
      .then((data) => {
        i = 0;
        let myiterval = setInterval(() => {
          let repo = document.createElement("a");
          let createdAt = document.createElement("span");
          createdAt.innerHTML = data[i].created_at.slice(0, 10);
          createdAt.className = "createdAt";
          repo.className = "repo";
          repo.href = data[i]["html_url"];
          repo.target = "_blank";
          repo.innerHTML = data[i].name;
          repo.appendChild(createdAt);
          showRepos.appendChild(repo);
          i++;
          if (i === data.length) {
            clearInterval(myiterval);
          }
        }, 50);
      }).catch((reason) => showRepos.innerHTML =
      `<span class='error'>${reason}</span>`);
    }
    username.value = "";
    setTimeout(() => console.clear(), 2000)
  };
