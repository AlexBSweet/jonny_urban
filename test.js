const content = document.querySelector('section.content')
const body = document.querySelector('body')
const sectA = document.querySelector('section.a')
const sectB = document.querySelector('section.b')
const sectC = document.querySelector('section.c')
const sectD = document.querySelector('section.d')
const sectE = document.querySelector('section.e')
const sectF = document.querySelector('section.f')

let pixels
window.addEventListener('scroll', ()=>{
    pixels=window.pageYOffset

    let px = pixels/800

    if(content.style.opacity <= 1){
        content.style.opacity= px
    }


    if(content.style.opacity >= 1){
        content.classList.add('opacity')
        body.classList.add('fixed')
    }
  

})


sectA.addEventListener('click', ()=>{
    // On click, scroll to top of content container
    content.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    // After scrolled to top of container open sect A container
      setTimeout(function(){ 
        sectA.classList.add('full')
        sectA.classList.remove('min')
        sectA.classList.remove('a-min')

    }, 300);

 

    sectB.classList.remove('full')
    sectB.classList.remove('min')

    sectC.classList.remove('full')
})

sectB.addEventListener('click', ()=>{

// close top section, scroll to top, open B section

    sectA.classList.remove('full')
    sectA.classList.add('min')
    sectA.classList.add('a-min')
    


      setTimeout(function(){ 
        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, 1100);

    setTimeout(function(){ 
        sectB.classList.add('full')
    sectB.classList.remove('min')
    sectB.classList.remove('b-min')

    }, 500);
  

    sectC.classList.remove('full')
})

sectC.addEventListener('click', ()=>{
    content.scrollTo(0,0)
    sectA.classList.remove('full')
    sectA.classList.add('min')
    sectA.classList.add('a-min')
    
    sectB.classList.remove('full')
    sectB.classList.add('min')
    sectB.classList.add('b-min')

    setTimeout(function(){ 
        sectC.classList.add('full')
    }, 500);


   
})

