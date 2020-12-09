let newButton;

const $periodos = document.getElementsByName("periodo");

let inputMateria = document.querySelector("#tarefa");
let inputAssunto = document.querySelector("#assunto");

const inpTime = document.querySelector("#horaInicio");
const outTime = document.querySelector("#horaFim");

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
  color: #120f16;
  background-color: #e9e4ee;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 15pt;
  box-shadow: 0 0 10px black;
	`;

	//💩

	buttonSubmit.addEventListener("click", (radioResult, newInput) => {
		newInput = (callbackInput) => {
			let $newElement = document.createElement("li");
			const $outPut = document.querySelector(".outPut");
			$outPut.insertAdjacentElement("beforeend", $newElement);

			//remover div criada
			$newElement.addEventListener("click", () => {
				$newElement = $newElement.remove();
			});
			//efeito de mouse hover
			$newElement.addEventListener("mouseover", () => {
				$newElement.style.backgroundColor = "red";
				$newElement.style.color = "#f7f1e3";
				$newElement.style.cursor = "not-allowed";
			});
			//tirar efeito de mouse
			$newElement.addEventListener("mouseleave", () => {
				$newElement.style.backgroundColor = "#ffd166";
				$newElement.style.color = "#2d3436";
			});

			callbackInput($newElement);

			if ($periodos[0].checked) {
				radioResult = "Indefinido";
			} else if ($periodos[1].checked) {
				radioResult = "Manhã";
			} else if ($periodos[2].checked) {
				radioResult = "Tarde";
			} else {
				radioResult = "Noite";
			}

			$newElement.innerHTML = `<br> Tarefa: ${inputMateria.value}
       <br>
       Descrição: ${inputAssunto.value} 
       <br>
       Período: ${radioResult}
       <br>
       Inicio: ${inpTime.value}
       <br>
       Fim: ${outTime.value}`;
		};

		newInput((style) => {
			style.style.cssText = `
		  color: #120f16;
		  background-color:  #ffd166;
		  border-radius: 10px;
		  padding: 20px;
		  font-size: 21pt;
        margin: 10px 20px;
		  word-wrap: break-word;
		  list-style: decimal;
		  
			`;
		});
	});
});

createButton("Limpar➖", (buttonClear) => {
	buttonClear.style.cssText = `
   color: #120f16;
  background-color: #e9e4ee;
   padding: 10px;
   margin: 5px;
   border-radius: 5px;
   font-size: 15pt;
	box-shadow: 0 0 10px black;
  `;
	buttonClear.addEventListener("click", () => {
		inputMateria.value = "";
		inputAssunto.value = "";
	});
});