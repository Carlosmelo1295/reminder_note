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
  background-image: linear-gradient(to right top, #a63bf8, #914afa, #7b55fa, #655df9, #4c64f6, #2f77fc, #0e87ff, #0096ff, #00b2ff, #00caff, #00dff6, #15f2e4);
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 17pt;
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
        Swal.fire({
          title: "Deseja mesmo excluir?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, excluir!",
        }).then((result) => {
          if (result.isConfirmed) {
            $newElement = $newElement.remove();
            Swal.fire("Deletado!", "Sua tarefa foi excluída", "success");
          }
        });
      });

      //efeito de mouse hover
      $newElement.addEventListener("mouseover", () => {
        $newElement.style.color = "red";
        $newElement.style.cursor = "not-allowed";
      });
      //tirar efeito de mouse
      $newElement.addEventListener("mouseleave", () => {
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

      if (inpTime.value == "") {
        inpTime.value = "00:00"
      }
      if (outTime.value == "") {
        outTime.value = "00:00"
      }

      const saida = {};
      Object.defineProperty(saida, "Tarefa", {
        enumerable: true,
        value: inputMateria.value,
      });

      Object.defineProperty(saida, "Descrição", {
        enumerable: true,
        value: inputAssunto.value,
      });

      Object.defineProperty(saida, "Período", {
        enumerable: true,
        value: radioResult,
      });

      Object.defineProperty(saida, "Inicio", {
        enumerable: true,
        value: inpTime.value,
      });

      Object.defineProperty(saida, "Fim", {
        enumerable: true,
        value: outTime.value,
      });

      Object.entries(saida).forEach(([chave, valor]) => {
        chave = chave.fontcolor(" #050609");
        valor = valor.fontcolor("#e9e4ee");
        $newElement.innerHTML += `${chave}: ${valor}🏷️<br>`.toUpperCase();
      });
    };

    newInput((style) => {
      style.style.cssText = `
		  background-image: linear-gradient(to right top, #a63bf8, #914afa, #7b55fa, #655df9, #4c64f6, #2f77fc, #0e87ff, #0096ff, #00b2ff, #00caff, #00dff6, #15f2e4);
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