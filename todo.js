const getAddTodoBtn = document.getElementById('add-todo')
const getContainer = document.getElementById('container')
const getModal = document.getElementById('modal')
const getOverlay = document.getElementById('overlay')
const getCancle = document.getElementById('cancle')
const getClose = document.querySelector('.task')
const getCloseIcon = document.getElementById('close-icon')
const getInput = document.getElementById('input')
const getAddBtn = document.getElementById('btn-add')
const getStatusContent = document.getElementById('status-content')

function modalHandler() {
    // getContainer.style.display = 'none'
    getModal.style.display = 'flex'
    getOverlay.style.display = 'flex'
    // getContainer.style.
}
function modalCancle() {
    getContainer.style.display = 'flex'
    getModal.style.display = 'none'
    getOverlay.style.display = 'none'
    
}

// getAddBtn.addEventListener('click', function () {
//     console.log(getInput.value)
// })
function elementTaskHandler() {
    let createDivElem = document.createElement('div')
    let createPElem = document.createElement('p')
    let createIconElem = document.createElement('ion-icon')
    createDivElem.className = 'task'
    createDivElem.draggable = 'true'
    createPElem.id = 'desc'
    createPElem.innerHTML = getInput.value
    createIconElem.id = 'close-icon'
    createIconElem.setAttribute('name', 'close-outline')
    getStatusContent.appendChild(createDivElem)
    createDivElem.appendChild(createPElem)
    createDivElem.appendChild(createIconElem)
    
}
function deleteIcon() {
    getClose.remove()
}

console.log(getInput)

getAddTodoBtn.addEventListener('click', modalHandler)
getCancle.addEventListener('click', modalCancle)
getCloseIcon.addEventListener('click', deleteIcon)
getAddBtn.addEventListener('click', elementTaskHandler)