const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover',
    dragover)
    placeholder.addEventListener('dragenter',
    dragenter)
    placeholder.addEventListener('dragleave',
    dragleave)
    placeholder.addEventListener('drop',
    dragdrop)
}

function dragstart(event) {
  event.target.classList.add('Bro')
  event.target.classList.add('dragging');
  setTimeout(() => event.target.classList.add('notbro'), 0)
}

function dragend(event){
event.target.classList.remove('Bro')
event.target.classList.remove('notbro')
event.target.classList.remove('dragging')
}
function dragover(event){
  event.preventDefault()
}
function dragenter(event){
    event.target.classList.add('hovered')
    
}
function dragleave(event){
    event.target.classList.remove('hovered')
 
}
function dragdrop(event){
    event.target.classList.remove('hovered')
 event.target.append(item)
}
    
