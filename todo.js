const getAddTodoBtn = document.getElementById('add-todo')
const getContainer = document.getElementById('container')
const getModal = document.getElementById('modal')
const getOverlay = document.getElementById('overlay')
const getCancle = document.getElementById('cancle')

function modalHandler() {
    // getContainer.style.display = 'none'
    getModal.style.display = 'flex'
    getOverlay.style.display = 'flex'
    // getContainer.style.
}
function modalcancle() {
    getContainer.style.display = 'flex'
    getModal.style.display = 'none'
    getOverlay.style.display = 'none'
    
}

getAddTodoBtn.addEventListener('click', modalHandler)
getCancle.addEventListener('click', modalcancle)