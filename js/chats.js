let hamburger = document.getElementById("hamburger");
let chats = document.getElementById("chats")

let toggled = false;

hamburger.addEventListener("click", (e) => {
    if (toggled)
        hideSideBar()
    else 
        showSideBar()

    toggled = !toggled
})

const showSideBar = () => {
    chats.classList.add("absolute")
    chats.classList.add("w-80")
    chats.classList.remove("md:w-96")
    chats.classList.remove("w-0")

    hamburger.classList.remove("left-0")
    hamburger.classList.add("left-80")

}

const hideSideBar = () => {
    chats.classList.remove("absolute")
    chats.classList.remove("w-80")
    chats.classList.add("md:w-96")
    chats.classList.add("w-0")

    hamburger.classList.add("left-0")
    hamburger.classList.remove("left-80")

}
