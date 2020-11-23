"use strict";
const newInputName = document.getElementById("newInputName");
const newInputAge = document.getElementById("newInputAge");
const newInputLastName = document.getElementById("newInputLastName");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const about = {
    name: newInputName.value,
    lastName: newInputLastName.value,
    age: newInputAge.value,
  };
  if (about.name + about.age == "" || about.age <= 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente!",
    });
  } else {
    Swal.fire(
      `<br> Nome: ${about.name} <br> Sobrenome: ${about.lastName} <br> Idade: ${about.age}`
    );
  }
});
