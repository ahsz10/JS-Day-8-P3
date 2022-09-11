// Lab 8 part 3 Fetch the data from url and Display it
async function getUsers() {
    let url = "https://reqres.in/api/users?page=2";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users = users['data']
    for (var user in users){
        let htmlSegment = `<div class="user">
                            <img src="${users[user].avatar}">
                            <h2>${users[user].first_name} ${users[user].last_name}</h2>
                            <div class="email"><a href="email:${users[user].email}">${users[user].email}</a></div>
                            </div>`;
        html += htmlSegment;
    }

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
