// For Register
function signup(e){
	event.preventDefault();

	var uname = document.getElementById('username').value;
	var pass = document.getElementById('password').value;

	var user = {
		username : uname,
		password : pass
	};

	let data = localStorage.getItem("Data");

	if(data == null){
		dataObj =[];
	}
	else{
		dataObj = JSON.parse(data);
	}

	let fetchUser = [];

	for (var i = 0; i < dataObj.length; i++) {
		fetchUser.push(dataObj[i].username);
	}

	if (fetchUser.indexOf(uname) != -1) {
		alert("You are alreay register");window.location.assign('login.html');
	}
	else{
		dataObj.push(user);
		localStorage.setItem("Data",JSON.stringify(dataObj));
		alert("Register Sucessfully..");window.location.assign('login.html');
	}

}

// For Login
function loginfun(e) {
	var luname = document.getElementById('lusername').value;
	var lpass = document.getElementById('lpassword').value;

	let data = localStorage.getItem("Data");

	if(data == null){
		dataObj =[];
	}
	else{
		dataObj = JSON.parse(data);
	}

	let fetchUser = [];

	for (var i = 0; i < dataObj.length; i++) {
		fetchUser.push(dataObj[i].username);
	}
	let position = fetchUser.indexOf(luname);
	console.log(position);

	if (fetchUser.indexOf(luname) != -1) {
		if (dataObj[position].password == lpass) {
			console.log("Login Sucessfully");
			alert("Login Sucessfully..");window.location.assign('home.html');
		}
		else{
			console.log("Invalid password..");
			alert("Invalid Password");
		}
	}
	else{
		alert("Invalid Username Sorry..");
		console.log("Invalid Username Sorry..");
	}

}

// For Forget
function myfun(){

	var username = document.getElementById('lusername').value;
	var password = document.getElementById('lpassword').value;

	let data = localStorage.getItem("Data");

	if(data == null){
		dataObj =[];
	}
	else{
		dataObj = JSON.parse(data);
	}

	let fetchUser = [];

	for (var i = 0; i < dataObj.length; i++) {
		fetchUser.push(dataObj[i].username);
	}
	let position = fetchUser.indexOf(username);
	// console.log(position);

	if (fetchUser.indexOf(username) != -1) {
		dataObj[position].password = password;
		console.log("Password update Sucessfully..");
		alert("Password update Sucessfully..");window.location.assign('login.html');
	}
	else{
		console.log("You are not Register User..");
		alert("You are not Register User..");
	}

	localStorage.setItem('Data', JSON.stringify(dataObj));
   	// console.log(dataObj);
  }