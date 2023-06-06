const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

submit.addEventListener("click", function(e){
    e.preventDefault(); /* this prevents the default settings of the input type submit. it wants to go somewhere so it always refreshed for me */
let firstVal = firstName.value;
let lastVal = lastName.value;
let ageVal = age.value;
if(firstVal.length > 5){
    list.innerHTML = `<li class="green">${firstVal}</li>`;
} else{
    list.innerHTML = `<li class="red">${firstVal}</li>`;
}
list.innerHTML += `<li>${lastVal}</li>`;
list.innerHTML += `<li>${ageVal}</li>`;
})