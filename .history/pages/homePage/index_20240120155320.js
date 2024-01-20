let openBtn =document.querySelector('.open-btn')
let closeBtn =document.querySelector('.close-btn')
let menuList =document.querySelector('.menu-list')
// open  menu list
openBtn.addEventListener('click', openMenu)
function openMenu(){
menuList.style.display='flex'
closeBtn.style.display='block'
openBtn.style.display='none'
}

// close menu list

closeBtn.addEventListener('click',closeMenu)
function closeMenu(){
    menuList.style.display='none'
    closeBtn.style.display='none'
    openBtn.style.display=''
}