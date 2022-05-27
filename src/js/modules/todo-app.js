export default class TodoApp {
  constructor() {
    this.input = document.querySelector('[type="text"]')
    this.resultado = document.querySelector('.resultado')
    this.btnAdd = document.querySelector('[data-btn="add"]')

    this.addEvent = this.addEvent.bind(this)
  }

  deleteEvent(event) {
    if (event.target.classList.contains('delete')) {
      event.target.parentElement.parentElement.remove()
    }
  }

  editEvent(event) {
    if (event.target.classList.contains('edit')) {
      const text = prompt('Digite aqui sua nova tarefa')
      const element = event.target.parentElement.parentElement.querySelector('p')
      element.innerText = text
    }
  }

  addEvent() {
    if (!this.input.value) {
      alert('Campo de tarefas vazio.')
      return
    }

    const div = document.createElement('div')
    div.classList.add('todo')
    div.innerHTML = `<p>${this.input.value}</p>
                      <div>
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                      </div>`
    this.resultado.appendChild(div)
    this.input.value = ''
    this.input.focus()
  }

  setEvent(item, callback) {
    item.addEventListener('click', callback)
  }

  init() {
    this.setEvent(this.btnAdd, this.addEvent)
    this.setEvent(document, this.editEvent)
    this.setEvent(document, this.deleteEvent)
  }
}
