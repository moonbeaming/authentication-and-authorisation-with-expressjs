async function loadUserProfile() {
	const response = await fetch('http://127.0.0.1:4001/auth/user',{
		credentials:"include"
	});
	const user = (await response.json())?.payload;
	if (!user) {
		alert('Failed to load user profile');
		window.location.href = './index.html';
		return
	}
	document.getElementById('username').value = user.username;
	document.getElementById('contact_number').value = user.contact_number;
	document.getElementById('email').value = user.email;
}

loadUserProfile();

document.getElementById('profile-form').addEventListener('submit', async function (event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const contact_number = document.getElementById('contact_number').value;
	const email = document.getElementById('email').value;
	const response = await fetch('http://127.0.0.1:4001/auth/user', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, email, contact_number }),
		credentials: "include"

	});
	const result = await response.json();
	// handle response
	if (result.ok) {
		alert('Profile updated successfully');
		return;
	} else{
		alert(result.message);
	}
});

document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
	event.preventDefault();
	const username = document.getElementById("other-username").value;
	const response = await fetch(`http://127.0.0.1:4001/auth/delete/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username
		}),
		credentials: "include"
	});
	const result = await response.json();
	if (result.ok) {
		alert('User deleted');
		return;
	} else{
		alert(result.message);
	}
});

var modal = document.getElementById("modal");
var deleteModalBtn = document.getElementById("delete-modal-button");
var closeBtn = document.getElementById("close");

deleteModalBtn.onclick = function() {
	modal.style.display = "block";
}

closeBtn.onclick = function() {
	modal.style.display = "none";
}
  
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}