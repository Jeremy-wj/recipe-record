const myImage = document.querySelector("img");

// Click logo to flip
myImage.onclick = () => {
    let new_img_path;
    if (myImage.getAttribute("src") === "images/sushibowl.png") {
        new_img_path = "images/sushibowlflipped.png";
    } else {
        new_img_path = "images/sushibowl.png";
    }
    localStorage.setItem("source", new_img_path);
    myImage.setAttribute("src", new_img_path);
}

// localStorage.removeItem("name");
const changeUserButton = document.querySelector("#log_in_button");
const footerText = document.querySelector(".footer_text");

function setUserName() {
    let myName = prompt("Enter your name");
    if (myName) {
        localStorage.setItem("name", myName);
        footerText.textContent = `Logged in as ${myName}`;
        changeUserButton.textContent = "Change User";
    }
}

if (localStorage.getItem("name")) {
    const storedName = localStorage.getItem("name");
    footerText.textContent = `Logged in as ${storedName}`;
    changeUserButton.textContent = "Change User";
}

if (localStorage.getItem("source") !== null) {
    myImage.setAttribute("src", localStorage.getItem("source"));
}

changeUserButton.onclick = () => {
    setUserName();
}