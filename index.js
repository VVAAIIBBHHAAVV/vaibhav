function fetchdata() {

    fetch("https://reqres.in/api/users?delay=3")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {

            console.log(data.data);
            const html = data.data.map(user => {
                return `
                <div class="user">
                <p><img src="${user.avatar}" alt="${user.first_name}" ></p>
                 <p> Name : ${user.first_name}</p>
                 <p> Email : ${user.email}</p>
                 </div>
                 `;
            })
                .join('');
            console.log(html)
            document.querySelector('#app')
                .insertAdjacentHTML('afterbegin', html);

        })
        .catch(error => {
            console.log(error)
        });
}
fetchdata();


function postdata() {

    fetch("https://reqres.in/api/users?delay=3",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "morpheus",
            "job" : "leader"
        })
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
        console.log(data)
    })
        .catch (error => {
    console.log(error)
});
}

fetchdata();

