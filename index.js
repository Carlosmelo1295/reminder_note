"use strict";

let newButton;

const $periodos = document.getElementsByName("periodo");

let inputMateria = document.querySelector("#tarefa");
let inputAssunto = document.querySelector("#assunto");

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖👽➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

function createButton(buttonTxt, callbackButton) {
	newButton = document.createElement("button");
	newButton.textContent = buttonTxt;
	const $buttonBox = document.querySelector(".buttonBox");
	$buttonBox.insertAdjacentElement("beforeend", newButton);

	callbackButton(newButton);

	return newButton;
}
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

	//💩

	buttonSubmit.addEventListener("click", (radioResult, newInput) => {
		newInput = (callbackInput) => {
			let $newElement = document.createElement("div");
			const $outPut = document.querySelector(".outPut");
			$outPut.insertAdjacentElement("beforeend", $newElement);

			let icon = document.createElement("img")
			$newElement.insertAdjacentElement("afterend", icon).src = "icons/icons8-checkmark.svg"

			//remover  div criada
			$newElement.addEventListener("click", () => {
				$newElement = $newElement.remove();
				icon = icon.remove()
			});
			//efeito de mouse hover
			$newElement.addEventListener("mouseover", () => {
				$newElement.style.backgroundColor = "red";
				$newElement.style.color = "#f7f1e3";
				$newElement.style.cursor = "not-allowed";
			});
			//tirar efeito de mouse
			$newElement.addEventListener("mouseleave", () => {
				$newElement.style.backgroundColor = "#f7f1e3";
				$newElement.style.color = "#2d3436";
			});

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

			$newElement.innerHTML = `${inputMateria.value} <br> ${inputAssunto.value} <br> ${radioResult}`.toUpperCase();
		};

		newInput((style) => {
			style.style.cssText = `
		  color: #2d3436;
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
			buttonClear.style.scale = "0.90";
		});

		buttonClear.addEventListener("click", () => {
			inputMateria.value = "";
			inputAssunto.value = "";
		});
	});
});