let formData = [];
let flag;
let nav_signup = document.querySelector(".signup");
let nav_profile = document.querySelector(".prf");
let form = document.querySelector(".form");
let profile = document.querySelector(".profile");
console.log(nav_signup);

document.querySelector(".signup").addEventListener("click", () => {
    console.log("hi");
    profile.style.display = "none";
    form.style.display = "flex";
    document.querySelector(".name-inp").value = "";
    document.querySelector(".email-inp").value = "";
    document.querySelector(".pass-inp").value = "";
    document.querySelector(".pass2-inp").value = "";
});

document.querySelector(".logout-btn").addEventListener("click", () => {
    profile.style.display = "none";
    form.style.display = "flex";
    flag=0;
 document.querySelector(".name-inp").value = "";
    document.querySelector(".email-inp").value = "";
    document.querySelector(".pass-inp").value = "";
    document.querySelector(".pass2-inp").value = "";    
});

document.querySelector(".prf").addEventListener("click",()=>{
   console.log("profile");
    if(flag===1){
        let name = document.querySelector(".name-inp").value;
        let email = document.querySelector(".email-inp").value;
        let pass= document.querySelector(".pass-inp").value;
        showProfile(name, email, pass);
    }
});

function showProfile(name, email, pass) {
    document.getElementById("comment").innerHTML = ``;
    profile.style.display = "flex";
    form.style.display = "none";
    var namein = document.getElementById("name");
    var emailin = document.getElementById("email");
    var passin = document.getElementById("password");
    namein.innerText = `Name: ${name}`;
    emailin.innerText = `Email: ${email}`;
    passin.innerText = `Password: ${pass}`;
}
let signup_btn = document.querySelector(".signup-btn");

signup_btn.addEventListener("click", () => {
    flag=0;
    let name = document.querySelector(".name-inp").value;
    let email = document.querySelector(".email-inp").value;
    let password = document.querySelector(".pass-inp").value;
    let password2 = document.querySelector(".pass2-inp").value;
    console.log(name);
    if (name == "" || email === "" || password === "" || password2 === "") {
        document.getElementById("comment").innerHTML = `<div class="error">Error : All the fields are mandatory</div>`;
        return;
    }
    var user = {
        name: name,
        email: email,
        password: password,
    };

    const formDataString = JSON.parse(localStorage.getItem("formData"));
    console.log(formDataString);
    console.log(user.name);
    let ans = 0;
    if (formData.length == 0) {
        login(user, name, email, password, password2, formData);
        return;
    }
    formDataString.forEach((element) => {
        if (element.name == user.name && element.email == user.email &&
            element.password == user.password)
            ans = 1;
    });

    if (ans == 1) {
        document.getElementById("comment").innerHTML = `<div class="already">You are already a User !</div>`;
        flag=1;
        return;
    }
    else {
        login(user, name, email, password, password2, formData);
    }

});


function login(user, name, email, password, password2, formData) {
    formData.push(user);
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(name, email, password, password2);
    document.getElementById("comment").innerHTML = `<div class="succses">Successfully Signed Up!</div>`;
    flag=1;
}

