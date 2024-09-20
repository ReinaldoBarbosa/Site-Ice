const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
      
//Menu show

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//Menu hidden

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*================= REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remoe the show-menu click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*================= ADD BLUR HEADER ====================*/

const blurHeader = () => {
    const header = document.getElementById('header');
    //Add a class if the bottom offset is graet than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*================= SHOW SCROLL UP ====================*/

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*================= SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              secitonClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            secitonClass.classList.add('active-link')
        }
        else
        {
            secitonClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
})

sr.reveal('.home__img, .new__data, .proposals__img, .contact__content')
sr.reveal('.home__data, .proposals__list, .contact__img', {delay: 500})
sr.reveal('.new__card', {delay: 500, interval: 100})
sr.reveal('.project__card', {interval: 100})