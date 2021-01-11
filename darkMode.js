const header = document.querySelector(".containerTextInput");
let createBtn;

function createBtnMode(value, handle) {
  createBtn = document.createElement("button");
  createBtn.textContent = value;
  header.insertAdjacentElement("afterbegin", createBtn);

  handle(createBtn);

  return createBtn;
}

createBtnMode("Light Mode💡", (light) => {
  light.style.cssText = `
    padding: 10px;
    border-radius: 7px;
    margin:5px;
    font-size: 14pt;
    `;

  light.addEventListener("click", () => {
    document.body.style.backgroundColor = "  #e9e4ee";

  });
});

createBtnMode("Dark Mode🕶️", (dark) => {
  dark.style.cssText = `
    padding: 10px;
    border-radius: 7px;
     margin:5px;
     background-color: #1e272e;
     color: #e9e4ee;
     font-size: 14pt;
    `;

  dark.addEventListener("click", () => {
    document.body.style.backgroundColor = '#1e272e';
  });
});