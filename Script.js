const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')

function toggleNavbar() {
    const dropDownMenu = document.querySelector('.dropdown_menu')
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    isOpen ? document.querySelector('.navbar').classList.add('opened')
        : document.querySelector('.navbar').classList.remove('opened')
    toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
    
}

toggleBtn.onclick = function () {
    toggleNavbar()
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

// TO DO LIST
// const arrowContainer = document.querySelectorAll('.arrow-container');


const arrowContainer = document.querySelector('.arrow-container');
arrowContainer.addEventListener('click', () => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        });

// for (let i = 0; i < arrowContainer.length; i++) {
//     arrowContainer[i].addEventListener('click', () => {
//       window.scrollTo({
//         top: window.innerHeight,
//         behavior: 'smooth'
//       });
//     });
// }

/*hide on click*/

let div = document.getElementsByClassName('close');
for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function(e){
        toggleNavbar()
      });
}

