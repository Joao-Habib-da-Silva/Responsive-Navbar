var navbar = window.document.getElementById("navbar")
function Click() {
    navbar.classList.toggle('open')
    if (navbar.classList.contains('open')) {
        navbar.style.display = 'flex'
    }
   
}