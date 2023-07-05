const getAddTodoBtn = document.getElementById('add-todo')
const getContainer = document.getElementById('container')
const getModal = document.getElementById('modal')
const getOverlay = document.getElementById('overlay')
const getCancle = document.getElementById('cancle')
const getClose = document.getElementById('task')
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

function dragStartHandler(event) {
    event.dataTransfer.setData('text/plain', event.target.id)
    
}

function dropHandler(event) {
    let targetText = event.dataTransfer.getData('text')
    let targetElem = document.getElementById(targetText)
    let dropZone = event.target

    dropZone.appendChild(targetElem)
    event.dataTransfer.clearData()
}

function dragOverHandler(event) {
    event.preventDefault()
    
}

function elementTaskHandler() {
    let createDivElem = document.createElement('div')
    let createPElem = document.createElement('p')
    let createIconElem = document.createElement('ion-icon')
    createDivElem.className = 'task'
    createDivElem.id = 'task'
    createDivElem.draggable = 'true'
    createPElem.id = 'desc'
    createPElem.innerHTML = getInput.value
    createIconElem.id = 'close-icon'
    createIconElem.setAttribute('name', 'close-outline')
    createDivElem.ondragstart = "dragStartHandler(event)"
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





// function dragStartHandler (event) {
//     console.log('Drag Start');

//     event.dataTransfer.setData('elemId', event.target.id)

// }

// function dropHandler (event) {
//     let targetId = event.dataTransfer.getData('elemId')
//     let targetElem = document.getElementById(targetId)

//     event.target.append(targetElem)

//     console.log('Drop');

// }

// function dragOverHandler (event) {
//     event.preventDefault()
// }
