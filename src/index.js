document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', function(event) {
    //prevents default action of submit event
    event.preventDefault()

    createTasks(event.target.newTaskDescription.value)
    
  })
});


function createTasks(task){
  
  // p is <p> element, btn is <btn> element
  let p = document.createElement('p')
  let btn = document.createElement('btn')

  // content for p and btn
  p.textContent = `${task} `
  btn.textContent = '|x|'
 
  p.appendChild(btn)
  btn.addEventListener('click', event => event.target.parentNode.remove())
  
  document.querySelector('#tasks').appendChild(p)
}