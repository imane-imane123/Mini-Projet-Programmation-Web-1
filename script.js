document.addEventListener("DOMContentLoaded", function () {

    // MENU
    let menuToggle = document.querySelector(".menu-toggle");
    let navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // FORM VALIDATION
    document.querySelector("form").addEventListener("submit", function (e) {

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let msg = "";

        if (name.length < 3) {
            msg += "Nom invalide\n";
        }

        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(pattern)) {
            msg += "Email invalide\n";
        }

        if (msg !== "") {
            e.preventDefault();
            alert(msg);
        }
    });

});