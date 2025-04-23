const input = document.getElementById("add-item")
const addButton = document.getElementById("btn")
const lista = document.querySelector("ul")

addButton.addEventListener('click', function(){
  const item = document.createElement('li')
  item.classList.add('input-check')
  item.innerHTML = `<input type="checkbox" name="bread" value="bread" id="bread">
          <label for="bread">
            ${input.value}
          </label>
          <span>
            <img src="/assets/icons/Lista de compras/icon delete.svg" alt="icone de lixeira" id="trash">
          </span>`
  lista.appendChild(item)
})