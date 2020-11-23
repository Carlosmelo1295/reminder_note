"use strict";
const newInputName = document.getElementById("newInputName");
const newInputAge = document.getElementById("newInputAge");
const newInputLastName = document.getElementById("newInputLastName");
const btn = document.getElementById("btn");

btn.addEventListener("click", (checarRadio) => {
  const about = {
    name: newInputName.value,
    lastName: newInputLastName.value,
    age: newInputAge.value,
  };

  let sexo = document.querySelectorAll("#sexo");
  let sexoEscolha = null;
  checarRadio = () => {
    if (sexo[0].checked) {
      sexoEscolha = "Masculino";
    } else {
      sexoEscolha = "Feminino";
    }
  };
  checarRadio();

  if (about.name + about.age == "" || about.age <= 0) {
    Swal.fire({
      title: "Oops🚨",
      text: "Preencha os campos corretamente!",
    });
  } else {
    Swal.fire(
      `<br> Nome: ${about.name} <br> Sobrenome: ${about.lastName} <br> Idade: ${about.age} <br> Sexo: ${sexoEscolha}`
    );
  }
});