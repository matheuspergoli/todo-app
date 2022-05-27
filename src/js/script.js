class TodoApp {
  constructor() {
    this.input = document.querySelector('[type="text"]')
    this.resultado = document.querySelector('.resultado')
    this.btnAdd = document.querySelector('[data-btn="add"]')

    this.addEvent = this.addEvent.bind(this)
  }

  addEvent() {
    if (!this.input.value) {
      alert('Campo de tarefas vazio.')
      return
    }

    const div = document.createElement('div')
    div.classList.add('todo')
    div.innerHTML = `${this.input.value}
                      <div>
                        <button>Edit</button>
                        <button>Delete</button>
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
  }
}

const todoApp = new TodoApp()
todoApp.init()
