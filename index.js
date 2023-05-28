let shoppinglist =[]
const inputEL = document.getElementById("input-el")
const addbtn = document.getElementById("add-el")
const ulEL = document.getElementById("ul-el")

addbtn.addEventListener("click",function(){
    shoppinglist.push(inputEL.value) 
    render(shoppinglist)  
    inputEL.value=""
})

function render(shoppinglist){
    let listitem = ""
    for(let i = 0; i<shoppinglist.length; i++){
        listitem += `
            <li>
                ${shoppinglist[i]}
            </li>
        `
    }
    ulEL.innerHTML = listitem
}
