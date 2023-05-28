let shhopinglist =[]
const inputEL = document.getElementById("input-el")
const addbtn = document.getElementById("add-el")

addbtn.addEventListener("click",function(){
    shhopinglist.push(inputEL.value)
    
})