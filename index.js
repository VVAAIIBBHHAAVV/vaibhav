
// api url
const api_url =
	"https://reqres.in/api/users?delay=3";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	// console.log(data);
	if (response) {
		hideloader();
	}
	createCard(data)
	show(data);
	console.log(data["data"])
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}


function createCard(data) {
	let card = ``
	for (let r of data["data"]) {
		card +=
			`

        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-0 shadow " onclick="getdata(${r.id})" style="width: 18rem;">
              <img src="${r.avatar}" class="card-img-top" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Name</h5>
                <div class="card-text text-black-50">${r.first_name} ${r.last_name}</div>
              </div>
            </div>
          </div>
    
        `


	}
	document.getElementById("employeesdata").innerHTML = card;
}

function getdata(id) {
	var u = `https://reqres.in/api/users/${id}`
	getdetails(u)
}

function hideeverything() {
	document.getElementById('employeesdata').style.display = 'none';
}

async function getdetails(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	// console.log(data);
	if (response) {
		hideloader();
	}
	hideeverything();
	console.log(data["data"]);
	createDetails(data["data"]);
	console.log("done")
}

function createDetails(data) {
	console.log("called")
	let cardd =
		`
          <div style="text-align:center" class="container">
         <div class="card" style="width: 18rem;">
        <img src="${data.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">id:  ${data.id}</h5>
          <h5 class="card-title">First Name: ${data.first_name} </h5>
          <h5 class="card-title">Second Name: ${data.last_name} </h5>
          <h5 class="card-title">email address: ${data.email} </h5>

          
          </div>
        </div>
        </div>
                
    
        `


	document.getElementById("employeesdetails").innerHTML = cardd;
	console.log("final reach")
}

