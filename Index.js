

alert("funciono");
var btnsave = document.getElementById('save')
var tittle = document.getElementById('tittle')
var description = document.getElementById('description')
var responsable = document.getElementById('responsable')
var date = document.getElementById('dateend')
var doing = document.getElementById('Doing')
var todo = document.getElementById('ToDo')
var taskdo = document.getElementById('TaskDo')


function myFunction() {
   document.querySelector('#ToDo').insertAdjacentHTML('beforeend', ' <div  draggable = "true" id="container" >'+
   ' <div style="height: 5px;"></div>'+
   ' <div class="card" >'+
    '<div class="card-content" >'+
    
      
      '<h3 class="has-text-left" style="height: 100%;">'+
      '<strong>Tarea:    </strong>'+ tittle.value +
      '</h3>'+
      '<h1 class="has-text-left" style="height: 100%;">'+
      '<strong>Descripción:    </strong>' + description.value +
      '</h1>'+
      '<h1 class="has-text-left" style="height: 100%;">'+
      '<strong>Responsable:    </strong>' + responsable.value +
      '</h1>'+
      '<h1 class="has-text-left" style="height: 100%;">'+
      '<strong>Responsable:    </strong>' + date.value +
      '</h1>'+
      

      

      
    '</div>'+
    '<footer class="card-footer">'+
    '<a href="#" class="card-footer-item">Editar</a>'+
    '<a href="#" class="card-footer-item">Eliminar</a>'+
  '</footer>'+
  '</div>'
    

)

tittle.value = ''
description.value = ''
responsable.value = ''
date.value = ''

  }

btnsave.addEventListener("click", myFunction

)




doing.addEventListener('dragover', e =>{
  e.preventDefault();
  console.log("dragover");
  
})

doing.addEventListener("drop", e =>{
  card = document.getElementById('container')
  doing.appendChild(card)
})


todo.addEventListener('dragover', e =>{
  e.preventDefault();
  console.log("dragover");
  
})

todo.addEventListener("drop", e =>{
  card = document.getElementById('container')
  todo.appendChild(card)
})

taskdo.addEventListener('dragover', e =>{
  e.preventDefault();
  console.log("dragover");
  
})

taskdo.addEventListener("drop", e =>{
  card = document.getElementById('container')
  taskdo.appendChild(card)
})

