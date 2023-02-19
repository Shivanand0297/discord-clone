// functionality for mobile menu

// grabing openmenu button
const openMenu = document.querySelector("#openMenu")

// grabing mobileMenu button
const mobileMenu = document.querySelector("#mobileMenu")

// grabing closeMenu button
const closeMenu = document.querySelector("#closeMenu")

// onclicking the menu button the menu should open so adding evend listner for it

openMenu.addEventListener("click",()=>{
  if(mobileMenu.classList.contains("hidden")){
    mobileMenu.classList.remove("hidden")
    mobileMenu.classList.add("block")
  }
})

// onclicking close button the menu should disappear
closeMenu.addEventListener("click",()=>{
  if(mobileMenu.classList.contains("block")){
    mobileMenu.classList.remove("block")
    mobileMenu.classList.add("hidden")
  }
})
