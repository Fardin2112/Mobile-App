// firbase connecting
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://shopping-list-2666f-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB =ref(database,"ShoopingList")

// App
let array = []
const inputEl = document.getElementById("input-el")
const addbtn = document.getElementById("add-el")
const ulEL = document.getElementById("ul-el")

addbtn.addEventListener("click",function(){
    let shoppinglist = inputEl.value
    push(shoppingListInDB,shoppinglist) 
    array.push(shoppinglist)
    render(array)  
    inputEl.value=""
})

function render(list){
    let listitem = ""
    for(let i = 0; i<list.length; i++){
        listitem += `
            <li>
                ${list[i]}
            </li>
        `
    }
    ulEL.innerHTML = listitem
}
