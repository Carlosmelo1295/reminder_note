const header = document.querySelector("header");
let createBtn;

let divRadio = document.querySelector(".checkRadio");

function createBtnMode(value, handle) {
  createBtn = document.createElement("button");
  createBtn.textContent = value;
  header.insertAdjacentElement("beforeend", createBtn);

  handle(createBtn);

  return createBtn;
}

createBtnMode("Light Mode💡", (light) => {
  light.style.cssText = `
    padding: 10px;
    border-radius: 7px;
    margin:5px;
    `;

  light.addEventListener("click", () => {
    document.body.style.backgroundColor = "  #e9e4ee";
    divRadio.style.backgroundColor = "#ccc5b9";
    divRadio.style.color = " #120f16";
  });
});

createBtnMode("Dark Mode🕶️", (dark) => {
  dark.style.cssText = `
    padding: 10px;
    border-radius: 7px;
     margin:5px;
     background-color: #1e272e;
     color: #e9e4ee;
    `;

  dark.addEventListener("click", () => {
    document.body.style.backgroundColor = null;
  });
});
