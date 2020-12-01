"use strict";

let newButton;

const $periodos = document.getElementsByName("periodo");

let inputsMateria = document.querySelector("#materia");
let inputAssunto = document.querySelector("#assunto");

let $newElement;

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖👽➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

function createButton(buttonTxt, callbackButton) {
	newButton = document.createElement("button");
	newButton.textContent = buttonTxt;
	const $buttonBox = document.querySelector(".buttonBox");
	$buttonBox.insertAdjacentElement("beforeend", newButton);

	callbackButton(newButton);

	return newButton;
}
//💩
createButton("Adicionar➕", (buttonSubmit) => {
	buttonSubmit.style.cssText = `
  color: #f7f1e3;
  background-color: #6c5ce7;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 15pt;
  box-shadow: 0 0 7px black;
	`;

	buttonSubmit.addEventListener("click", function (radioResult, newInput) {
		newInput = (callbackInput) => {
			$newElement = document.createElement("div");
			const $outPut = document.querySelector(".outPut");
			$outPut.insertAdjacentElement("beforeend", $newElement);

			callbackInput($newElement);

			if ($periodos[0].checked) {
				radioResult = " ";
			} else if ($periodos[1].checked) {
				radioResult = "Manhã";
			} else if ($periodos[2].checked) {
				radioResult = "Tarde";
			} else {
				radioResult = "Noite";
			}

			return ($newElement.innerHTML = `${inputsMateria.value} <br> ${inputAssunto.value} <br> ${radioResult}`.toUpperCase());
		};

		newInput((style) => {
			style.style.cssText = `
		  color: #30336b;
		  background-color: #f7f1e3;
		  border-radius: 10px;
		  padding: 20px;
		  font-size: 20pt;
		  margin: 20px 20px ;
			`;
		});
	});
	buttonSubmit.addEventListener("mouseup", () => {
		buttonSubmit.style.background = "#6c5ce7";
		buttonSubmit.style.scale = "1.0";
	});

	buttonSubmit.addEventListener("mousedown", () => {
		buttonSubmit.style.background = " red";
		buttonSubmit.style.scale = "0.95";
	});
});

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖👽➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

createButton("Limpar➖", (buttonClear) => {
	buttonClear.style.cssText = `
   color: #f7f1e3;
   background-color: #6c5ce7;
   padding: 10px;
   margin: 5px;
   border-radius: 5px;
   font-size: 15pt;
	box-shadow: 0 0 7px black;
  `;

	buttonClear.addEventListener("mouseup", () => {
		buttonClear.style.background = "#6c5ce7";
		buttonClear.style.scale = "1.0";
	});

	buttonClear.addEventListener("mousedown", () => {
		buttonClear.style.background = " red";
		buttonClear.style.scale = "0.95";
	});

	buttonClear.addEventListener("click", () => {
		inputsMateria.value = "";
		inputAssunto.value = "";
	});
});