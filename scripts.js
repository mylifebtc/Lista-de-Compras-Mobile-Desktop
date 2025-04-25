const input = document.getElementById("add-item")
const addButton = document.getElementById("btn")
const lista = document.querySelector("ul")

addButton.addEventListener('click', function(){
  const item = document.createElement('li')
  item.classList.add('input-check')
  item.innerHTML = `<input type="checkbox" name="${input.value}" value="${input.value}" id="${input.value}">
          <label for="${input.value}">
            ${input.value}
          </label>
          <span>
            <img src="assets/icons/Lista de compras/icon-delete.svg" alt="icone de lixeira" id="trash">
          </span>`
  lista.appendChild(item)


  const trash = document.getElementById('trash')
    trash.addEventListener('click', function(){
  item.remove()

  setTimeout(function(){
    document.getElementById("alert").style.display = "flex";

  const del = document.getElementById('delete')
    del.addEventListener("click", function(){
      document.getElementById("alert").style.display = "none";})

  }, 1)
  
})
})

