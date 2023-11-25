let text = document.getElementById('text')
let lists = document.getElementById('lists')
const save =()=> {
    localStorage.setItem("data", lists.innerHTML)
}

const showTasks =()=> {
    lists.innerHTML = localStorage.getItem("data")
}

const addList =() => {
    let li = document.createElement('li')
    let button = document.createElement("button")
    li.innerText = text.value
    lists.appendChild(li)
    button.innerHTML = "X"
    li.appendChild(button)
    button.classList.add('button')
    text.value = ""
    save()
}

lists.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove()
        save()
    } else if(event.target.tagName === "LI") {
        event.target.classList.toggle("check")
        save()
    }
})

showTasks()