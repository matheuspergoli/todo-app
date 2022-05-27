const btnAdd = document.querySelector('[data-btn="add"]')
// const btnEdit = document.querySelector('[data-btn="edit"]')
// const btnDelete = document.querySelector('[data-btn="delete"]')
const input = document.querySelector('[type="text"]')
const resultado = document.querySelector('.resultado')

function createTodo(text) {
  const div = document.createElement('div')
  div.classList.add('todo')
  const todo = `${text}
                 <div>
                  <button type="button" data-btn="edit">Edit</button>
                  <button type="button" data-btn="delete">Delete</button>
                 </div>`
  div.innerHTML = todo

  resultado.appendChild(div)
}

function addTodo() {
  if (!input.value) {
    alert('Campo de tarefa vazio.')
    return
  }

  createTodo(input.value)

  input.value = ''
}
btnAdd.addEventListener('click', addTodo)
