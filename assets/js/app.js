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
const updateTodo = document.getElementById('updateTodo');

const cl =console.log;
function createArr(arr){ 
       let result ='';
    arr.forEach(ele=>{ 
         result += `<li class="list-group-item d-flex justify-content-between" id=${ele.todoId}>
                           <strong>${ele.todoItem}</strong> 
                         <div>
                             <i onclick=onEdit(this)  class="fa-solid fa-pen-to-square fa-2x  text-primary"></i>
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
                             <i  onclick="onEdit(this)" role="button " class="fa-solid fa-pen-to-square fa-2x  text-primary"></i>
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

let Edit_id;
function onEdit(eve){  
     Edit_id= eve.closest('li').id; 
         cl(Edit_id); // we will get the id of todoItem
    let Edit_obj= todoArr.find(t=>t.todoId ===Edit_id); 
         cl(Edit_obj);       // it will give object...
    todoItemControl.value =Edit_obj.todoItem;  //it will patch the data on todo control 
    addTodo.classList.add('d-none');  //adding d-none class... 
    updateTodo.classList.remove('d-none'); //  showing update button....

}
function todoUpdateHandler(){ 
   let update_obj ={ 
       todoItem: todoItemControl.value, 
       todoId:Edit_id
   } 

 let getIndex =todoArr.findIndex(ele=>ele.todoId ===Edit_id); 
     todoArr[getIndex] =update_obj;
 addTodo.classList.remove('d-none'); 
 updateTodo.classList.add('d-none');
  snackbar('New todo item is updated....!!!')
}

todoForm.addEventListener('submit',onTodoSubmit);
 updateTodo.addEventListener('click',todoUpdateHandler);

// todoItemControl.addEventListener('')

// todoContainer.addEventListener()