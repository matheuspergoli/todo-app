const btnAdd = document.querySelector('[data-btn="add"]')
// const btnEdit = document.querySelector('[data-btn="edit"]')
// const btnDelete = document.querySelector('[data-btn="delete"]')
const input = document.querySelector('[type="text"]')
const resultado = document.querySelector('.resultado')

function createTodo() {
  if (!input.value) {
    alert('Campo de tarefa vazio.')
    return
  }

  const div = document.createElement('div')
  div.classList.add('todo')
  const todo = `${input.value}
                 <div>
                  <button type="button" data-btn="edit">Edit</button>
                  <button type="button" data-btn="delete">Delete</button>
                 </div>`
  div.innerHTML = todo

  resultado.appendChild(div)
  input.value = ''
}
btnAdd.addEventListener('click', createTodo)
