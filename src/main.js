const display = document.querySelector('.display')
const addButton = document.querySelector('.add')
const inputField = document.querySelector('input')
let todos = []

//функция для создания элемента записи
function createTodo(value){
    //создаем главный обьект записи
    let todo = document.createElement('div')
    todo.setAttribute('class', 'todo')
    
    //создаем обьект параграфа
    let p = document.createElement('p')
    p.innerHTML = value

    //создаем обьект картинки удаления и сразу
    //вешаем ивент листенер
    let img = document.createElement('img')
    img.setAttribute('src', 'src/remove.png')
    img.setAttribute('class', 'delete')
    img.setAttribute('value', value)
    img.addEventListener('click', e => {
        let index = todos.indexOf(value)
        todos.splice(index, 1)
        showToDos()
    })

    todo.appendChild(p)
    todo.appendChild(img)
    display.appendChild(todo)
}

//функция для отображения всех записей
function showToDos(){
    display.innerHTML = ''
    if(todos.length != 0){
        for (let i = 0; i < todos.length; i++) {
            createTodo(todos[i])
        }
    }
    else{
        let empty = document.createElement('h3')
        empty.innerHTML = 'Empty...'
        empty.setAttribute('class', 'empty')
        display.appendChild(empty)
    }
    
}

showToDos()
//работа кнопки 'add'
addButton.addEventListener('click', e => {
    let value = inputField.value
    inputField.value = ''
    todos.push(value)
    showToDos()
})

