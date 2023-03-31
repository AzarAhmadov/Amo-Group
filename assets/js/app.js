const search_btn = document.querySelector(".search")
const search = document.querySelector('.search-area')
const close_btn = document.querySelector(".close-btn ");

search_btn.addEventListener('click', () => {
    search.classList.add('active')
})

close_btn.addEventListener('click', () => {
    search.classList.remove('active')
})

const others = document.querySelector('.others');
const getOthers = document.querySelector('.getOthers');

getOthers.addEventListener('click', () => {
    others.classList.toggle('active')
})

const close_btn_for_mobile = document.querySelector(".close-btn-for-mobile");
const mobil_menu_icon = document.querySelector(".mobil-menu-icon");
const mobil_menu = document.querySelector(".mobil-menu");

mobil_menu_icon.addEventListener('click', () => {
    mobil_menu.classList.add('active')
})

close_btn_for_mobile.addEventListener('click', () => {
    mobil_menu.classList.remove('active')
})

const carrerTop = document.querySelectorAll('.carrer-faq');
const faqText = document.querySelectorAll(".faq-text")
const arrowSvg = document.querySelectorAll(".arrow")

for (let i = 0; i < carrerTop.length && faqText.length; i++) {
    carrerTop[i].addEventListener('click', () => {
        faqText[i].classList.toggle('active')
        arrowSvg[i].classList.toggle('active')
    })
}