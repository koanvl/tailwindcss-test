function burgerMenu(){
  let header = document.querySelector("#header");
let menu = document.querySelector("#menu-mobile");
let burger = document.querySelector("#nav-icon");

burger.addEventListener('click', ()=> {
  burger.classList.toggle('open');
  menu.classList.toggle('hidden');
  header.classList.toggle('bg-black'); 
})
}

burgerMenu();