function selectRole(role) {
    // Hide role selection and show sport selection
    document.getElementById('sportSelection').classList.remove('hidden');

    // You can send the selected role to the server or perform other actions
    console.log('Selected Role:', role);
}

function selectSport(sport) {
    // You can send the selected sport to the server or perform other actions
    console.log('Selected Sport:', sport);
}

let roles = [];
let sports = [];

function addRole() {
    const role = prompt("Enter a role:");
    if (role) {
        roles.push(role);
        displayRoles();
    }
}

function addSport() {
    const sport = prompt("Enter a sport:");
    if (sport) {
        sports.push(sport);
        displaySports();
    }
}

function displayRoles() {
    const roleList = document.getElementById("roleList");
    roleList.innerHTML = roles.map(role => `<li>${role}</li>`).join('');
}

function displaySports() {
    const sportList = document.getElementById("sportList");
    sportList.innerHTML = sports.map(sport => `<li>${sport}</li>`).join('');
}

function sortItems() {
    roles.sort();
    sports.sort();
    displayRoles();
    displaySports();
}
