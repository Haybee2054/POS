let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let place = document.getElementById("place");
let business = document.getElementById("business");
let sales = document.getElementById("sales");
let interest = document.querySelector('input[name="yes"]');
let check = document.getElementById("check");

let allInputs = document.querySelectorAll("input");

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let payload = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    number: number.value,
    location: place.value,
    business: business.value,
    sales: sales.value,
    interest: interest.value,
  };

  if (check.checked !== true) {
    alert("Agree to policy before submit");
  } else if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    number.value === "" ||
    place.value === "" ||
    business.value === "" ||
    sales.value === "" ||
    interest.value === ""
  ) {
    alert("All fields are required");
  } else {
    localStorage.setItem("data", JSON.stringify(payload));
    alert("All Data saved successfully");
  }
});