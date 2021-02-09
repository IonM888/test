let body= document.querySelector('body')
const button= document.createElement("button")

button.textContent="Creaza un patrat"

body.appendChild(button)


const create= ()=>{
    const patrat= document.createElement("div")
    patrat.classList.add("patrat")
    body.appendChild(patrat)
}


button.addEventListener("click",create)

555