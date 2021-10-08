const button= document.getElementById("mobile-menu")

const menu= document.getElementById("header-ul")

const links=document.querySelectorAll(".header-li")

button.addEventListener("click",()=>{
    menu.classList.toggle("mobile-menu")
})

 links.forEach((elem) => {
    elem.addEventListener("click", () => {
        menu.classList.remove("mobile-menu")
    })
})
