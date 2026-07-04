const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let curUserId = 0;

// Toggle between local users
function toggle() {
    curUserId = (curUserId + 1) % users.length;

    document.getElementById("img").src = users[curUserId].image;
    document.getElementById("card-name").innerText = users[curUserId].name;
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}

// Fetch a random user from API
async function getRandomUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("Failed to fetch user. Status: " + response.status);
        }

        const data = await response.json();

        const user = data.results[0];

        document.getElementById("img").src = user.picture.large;
        document.getElementById("card-name").innerText =
            `${user.name.first} ${user.name.last}`;

        document.getElementById("card-gender").innerText =
            user.gender.charAt(0).toUpperCase() + user.gender.slice(1);

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to fetch user. Please check your internet connection or try again later.");
    }
}