const toggleBtn = document.querySelector('.toggle_btn')
            const toggleBtnIcon = document.querySelector('.toggle_btn i')
            const dropDownMenu = document.querySelector('.dropdown_menu')

            toggleBtn.onclick = function () {
                dropDownMenu.classList.toggle('open')
                const isOpen = dropDownMenu.classList.contains('open')

                toggleBtnIcon.classList = isOpen
                    ? 'fa-solid fa-xmark'
                    : 'fa-solid fa-bars'
            }

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header div ul li a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop -60
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active")
                document.querySelector("header div ul li [href*=" + id + "]").classList.add("active")
            })
        }
    })
}