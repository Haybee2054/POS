let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let place = document.getElementById("place");
let business = document.getElementById("business");
let sales = document.getElementById("sales");
let interest = document.querySelector('input[name="yes"]');
let check = document.getElementById("check");


let btn = document.getElementById("btn")

btn.addEventListener('click', function () {
    let payload = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        number: number.value,
        location: place.value,
        business: business.value,
        sales: sales.value,
        interest: interest.value
    }

    if(check.value !== true) {
        alert("Agree to policy before submit")
    }
    localStorage.setItem('data', JSON.stringify(payload))
    console.log("payload", payload)
})
