let button = document.querySelector("#add_task")
button.addEventListener("click",function(){
    let input = document.querySelector("#task")
    let variavel = input.value
   
    let lista = document.querySelector("#list")
    lista.innerHTML = "<br>"+ "<h4>"+input.value+"</h4>" + lista.innerHTML 
    
})
