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
    console.log(pixels)

    if(content.style.opacity >= 1){
        content.classList.add('opacity')
        body.classList.add('fixed')
    }
  

})


let scroll = 0

content.addEventListener('scroll', ()=>{
     scroll = 1
})



sectA.addEventListener('click', ()=>{

        // On click, scroll to top of content container
        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        //   Close all other containers
        sectB.classList.remove('full')
        sectB.classList.remove('min')

        sectC.classList.remove('full')

        // Open Section A container
        setTimeout(function(){ 
            sectA.classList.add('full')
            sectA.classList.remove('min')
            sectA.classList.remove('a-min')
    
        }, 300);
   

    scroll=0
    
})

sectB.addEventListener('click', ()=>{

// close top section, scroll to top, open B section
    // setTimeout(function(){ 
    //     sectB.classList.add('full')
    // sectB.classList.remove('min')
    // sectB.classList.remove('b-min')

    // }, 500);


    //   Close all other containers
    sectA.classList.remove('full')
    sectA.classList.add('min')
    sectA.classList.add('a-min')

    sectC.classList.remove('full')


     //   Open Sect B container

    setTimeout(function(){ 
        sectB.classList.add('full')
    sectB.classList.remove('min')
    sectB.classList.remove('b-min')

    }, 500);
  

   
})

sectC.addEventListener('click', ()=>{
    // content.scrollTo(0,0)
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

