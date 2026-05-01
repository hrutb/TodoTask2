let todoArr =[ 
         { 
           todoId:'asdf123-123AS-21asd3',
           todoItem:'HTML and CSS'
         },

        { 
          todoId:'sdfg-123AS-21asd3',
          todoItem:'HTML and CSS'
         },

         { 
          todoId:'zasasd23-123AS-21asd3',
          todoItem:'JS and TS'
         },
] 


const todoForm =document.getElementById('todoForm'); 
const  todoContainer=document.getElementById('todoContainer') ;
const todoItemControl=document.getElementById('todoItem');
const addTodoItem= document.getElementById('addTodo');

function createArr(arr){ 
       let result ='';
    arr.forEach(ele=>{ 
         result += `<li class="list-group-item d-flex justify-content-between" id=${ele.todoId}>
                           <strong>${ele.todoItem}</strong> 
                         <div>
                             <i   class="fa-solid fa-pen-to-square fa-2x  text-primary"></i>
                             <i onclick="onRemove(this)" class="fa-solid fa-trash fa-2x text-danger "></i>   
                         </div>
                        </li>`    
       })
     
     todoContainer.innerHTML=result;
}
 createArr(todoArr)

function snackbar(msg){
          swal.fire({ 
             title:msg,
             timer:2000,
             icon:'success'
          })
}

function onTodoSubmit(eve){
      eve.preventDefault(); 
    let addTodo={ 
            todoItem:todoItemControl.value,
            todoId:Date.now().toString()
        }

todoArr.unshift(addTodo);
 
 let li = document.createElement('li') ;
     li.className='list-group-item d-flex justify-content-between';
     li.innerHTML =`
                      <strong>${addTodo.todoItem}</strong> 
                         <div>
                             <i  role="button " class="fa-solid fa-pen-to-square fa-2x  text-primary"></i>
                             <i  role="button" onclick="onRemove(this)" class="fa-solid fa-trash fa-2x text-danger "></i>   
                         </div>
                           
                    `
let ul =document.querySelector('ul') 
    ul.append(li);

todoForm.reset();

   snackbar(`new todo Item is added successfully`)



}



function onRemove(eve){
    let remove_id = eve.closest('li').id;
    let getIndex = todoArr.findIndex(ele=>ele.todoId===remove_id); 
    todoArr.splice(getIndex,1);

   eve.closest('li').remove();   
}



todoForm.addEventListener('submit',onTodoSubmit)
// todoItemControl.addEventListener('')

// todoContainer.addEventListener()