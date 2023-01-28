const navBar = document.querySelector('.navbar');
const todasLi = document.querySelectorAll('li');

todasLi.forEach((li, index) => {

    li.addEventListener("click", e => {
        navBar.querySelector(".activ-list").classList.remove("activ-list");
        li.classList.add("activ-list");

        const indicador = document.querySelector(".indicator");
        indicador.style.transform = `translateX(calc(${index * 90}px ))`

    })
});


