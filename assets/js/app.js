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



function createArr(arr){ 
         
       let result =' ';
      
    arr.forEach(ele=>{ 
         result += `<li class="list-group-item d-flex justify-content-between" id="todoItem">
                           <strong>${ele.todoItem}</strong> 
                         <div>
                             <i class="fa-solid fa-pen-to-square fa-2x  text-primary"></i>
                             <i class="fa-solid fa-trash fa-2x text-danger "></i>   
                         </div>
                        </li>`    
       })


     todoContainer.innerHTML =result;

}


createArr(todoArr)















// todoContainer.addEventListener()