// script.js
function saveCredentials() {
    const wifiName = document.getElementById("wifiName").value;
    const wifiPassword = document.getElementById("wifiPassword").value;
    localStorage.setItem("wifiName", wifiName);
    localStorage.setItem("wifiPassword", wifiPassword);
    alert("Game loading... (but actually saving credentials)");
}

function adminLogin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    if (username === "Natanim" && password === "Nati@123#") {
        alert("Logged in as Admin. WiFi credentials:\n" + 
              "WiFi Name: " + localStorage.getItem("wifiName") + 
              "\nWiFi Password: " + localStorage.getItem("wifiPassword"));
    } else {
        alert("Invalid Admin Login");
    }
}
