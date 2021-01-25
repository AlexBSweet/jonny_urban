



const content = document.querySelector('section.content')
const body = document.querySelector('body')
const sectA = document.querySelector('section.a')
const sectAContent = document.querySelector('section.a p')
const sectB = document.querySelector('section.b')
const sectBContent = document.querySelector('section.b p')
const sectC = document.querySelector('section.c')
const sectCContent = document.querySelector('section.c p')
const sectD = document.querySelector('section.d')
const sectDContent = document.querySelector('section.d p')
const sectE = document.querySelector('section.e')
const sectEContent = document.querySelector('section.e p')
const sectF = document.querySelector('section.f')
const sectFContent = document.querySelector('section.f p')

let pixels
// window.addEventListener('scroll', ()=>{
//     pixels=window.pageYOffset

//     let px = pixels/800

//     if(content.style.opacity <= 1){
//         content.style.opacity= px
//     }


//     if(content.style.opacity >= 1){
//         content.classList.add('opacity')
//         body.classList.add('fixed')
//     }
  

// })

// SECT A ===================================================================================


sectA.addEventListener('click', ()=>{

     content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

      setTimeout(function(){ 
        sectA.classList.add('full')
        sectA.classList.remove('min')
        sectA.classList.remove('a-min')

    }, 300);

    setTimeout(function(){ 
        sectB.classList.remove('full')
        sectB.classList.remove('min')
    
        sectC.classList.remove('full')
        sectC.classList.remove('min')
    
        sectD.classList.remove('full')
        sectD.classList.remove('min')
    
        sectE.classList.remove('full')
        sectE.classList.remove('min')
    
        sectF.classList.remove('full')
        sectF.classList.remove('min')

    }, 500);

    sectAContent.style.opacity = 1

    sectBContent.style.opacity = 0
    sectCContent.style.opacity = 0
    sectDContent.style.opacity = 0
    sectEContent.style.opacity = 0
    sectFContent.style.opacity = 0

// if container on top is open
// 1. scroll to top
// 2. close container on top
// 3. open clicked container

// if container on bottom is open
// 1. open the clicked container
// 2. close any containers below it
    
})





// SECT B ===================================================================================

sectB.addEventListener('click', ()=>{

    
    sectBContent.style.opacity = 1

    sectAContent.style.opacity = 0
    sectCContent.style.opacity = 0
    sectDContent.style.opacity = 0
    sectEContent.style.opacity = 0
    sectFContent.style.opacity = 0

    // container on top is open
    if(sectA.classList.contains('full')){
        console.log('top-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        setTimeout(function(){ 
            sectA.classList.remove('full')
            sectA.classList.add('min')
            sectA.classList.add('a-min')

        }, 500);

        setTimeout(function(){ 
            sectB.classList.add('full')
            sectB.classList.remove('min')
            sectB.classList.remove('b-min')
    
         }, 1100);
    }


    // container on bottom is open 

    if(sectC.classList.contains('full') || sectD.classList.contains('full') || sectE.classList.contains('full') || sectF.classList.contains('full')){
        console.log('bottom-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    
            setTimeout(function(){ 
            sectB.classList.add('full')
            sectB.classList.remove('min')
            sectB.classList.remove('b-min')
    
            }, 00);
    
            sectC.classList.remove('full')
            sectD.classList.remove('full')
            sectE.classList.remove('full')
            sectF.classList.remove('full')
    }


})





// SECT C ===================================================================================

sectC.addEventListener('click', ()=>{

    sectCContent.style.opacity = 1

    sectAContent.style.opacity = 0
    sectBContent.style.opacity = 0
    sectDContent.style.opacity = 0
    sectEContent.style.opacity = 0
    sectFContent.style.opacity = 0
 
        // container on top is open
        if(sectA.classList.contains('full') || sectB.classList.contains('full')){
            console.log('top-open')
    
            content.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
    
            setTimeout(function(){ 
                sectA.classList.remove('full')
                sectA.classList.add('min')
                sectA.classList.add('a-min')
    
            }, 500);
    
            setTimeout(function(){ 
                sectB.classList.remove('full')
                sectB.classList.add('min')
                sectB.classList.add('b-min')
        
             }, 500);

            sectC.classList.add('full')
            sectC.classList.remove('min')
            sectC.classList.remove('c-min')
        }

        // container on bottom is open

        if(sectD.classList.contains('full') || sectE.classList.contains('full') || sectF.classList.contains('full')){
            console.log('bottom-open')
    
            content.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        
                setTimeout(function(){ 
                sectC.classList.add('full')
                sectC.classList.remove('min')
                sectC.classList.remove('c-min')
        
                }, 00);
                
                sectD.classList.remove('full')
                sectE.classList.remove('full')
                sectF.classList.remove('full')
        }
   
})






// SECT D ===================================================================================


sectD.addEventListener('click', ()=>{

    sectDContent.style.opacity = 1

    sectAContent.style.opacity = 0
    sectBContent.style.opacity = 0
    sectCContent.style.opacity = 0
    sectEContent.style.opacity = 0
    sectFContent.style.opacity = 0
 
    // container on top is open
    if(sectA.classList.contains('full') || sectB.classList.contains('full') || sectC.classList.contains('full')){
        console.log('top-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        setTimeout(function(){ 
            sectA.classList.remove('full')
            sectA.classList.add('min')
            sectA.classList.add('a-min')

        }, 500);

        setTimeout(function(){ 
            sectB.classList.remove('full')
            sectB.classList.add('min')
            sectB.classList.add('b-min')
    
         }, 500);

         setTimeout(function(){ 
            sectC.classList.remove('full')
            sectC.classList.add('min')
            sectC.classList.add('c-min')
    
         }, 500);

         sectD.classList.add('full')
         sectD.classList.remove('min')
         sectD.classList.remove('d-min')
    }


    // container on bottom is open
    if(sectE.classList.contains('full') || sectF.classList.contains('full')){
        console.log('bottom-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    
            setTimeout(function(){ 
            sectD.classList.add('full')
            sectD.classList.remove('min')
            sectD.classList.remove('d-min')
    
            }, 00);
            
            sectE.classList.remove('full')
            sectF.classList.remove('full')
    }
})



// SECT E ===================================================================================


sectE.addEventListener('click', ()=>{
 
    sectEContent.style.opacity = 1

    sectAContent.style.opacity = 0
    sectBContent.style.opacity = 0
    sectCContent.style.opacity = 0
    sectDContent.style.opacity = 0
    sectFContent.style.opacity = 0

    // container on top is open
    if(sectA.classList.contains('full') || sectB.classList.contains('full') || sectC.classList.contains('full') || sectD.classList.contains('full')){
        console.log('top-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        setTimeout(function(){ 
            sectA.classList.remove('full')
            sectA.classList.add('min')
            sectA.classList.add('a-min')

        }, 500);

        setTimeout(function(){ 
            sectB.classList.remove('full')
            sectB.classList.add('min')
            sectB.classList.add('b-min')
    
         }, 500);

         setTimeout(function(){ 
            sectC.classList.remove('full')
            sectC.classList.add('min')
            sectC.classList.add('c-min')
    
         }, 500);

         setTimeout(function(){ 
            sectD.classList.remove('full')
            sectD.classList.add('min')
            sectD.classList.add('d-min')
    
         }, 500);

         setTimeout(function(){ 
            sectE.classList.add('full')
            sectE.classList.remove('min')
            sectE.classList.remove('e-min')
    
         }, 800);

       
    }


    // container on bottom is open
    if(sectF.classList.contains('full')){
        console.log('bottom-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    
            setTimeout(function(){ 
            sectE.classList.add('full')
            sectE.classList.remove('min')
            sectE.classList.remove('e-min')
    
            }, 00);
            
           
            sectF.classList.remove('full')
    }
})



// SECT F ===================================================================================


sectF.addEventListener('click', ()=>{
 
    // container on top is open
    if(sectA.classList.contains('full') || sectB.classList.contains('full') || sectC.classList.contains('full') || sectD.classList.contains('full') || sectE.classList.contains('full')){
        console.log('top-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        setTimeout(function(){ 
            sectA.classList.remove('full')
            sectA.classList.add('min')
            sectA.classList.add('a-min')

        }, 500);

        setTimeout(function(){ 
            sectB.classList.remove('full')
            sectB.classList.add('min')
            sectB.classList.add('b-min')
    
         }, 500);

         setTimeout(function(){ 
            sectC.classList.remove('full')
            sectC.classList.add('min')
            sectC.classList.add('c-min')
    
         }, 500);

         setTimeout(function(){ 
            sectD.classList.remove('full')
            sectD.classList.add('min')
            sectD.classList.add('d-min')
    
         }, 500);

         setTimeout(function(){ 
            sectE.classList.remove('full')
            sectE.classList.add('min')
            sectE.classList.add('e-min')
    
         }, 500);

         sectF.classList.add('full')
         sectF.classList.remove('min')
         sectF.classList.remove('d-min')
    }


})