

const button = document.querySelector('div.open')

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




button.addEventListener('click', ()=>{
    content.classList.toggle('open')
})




// SECT A ===================================================================================

sectAContent.style.opacity=1 

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

    }, 00);

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

    }, 300);



    // OPACITY FUNCTIONS==============================================
    setTimeout(function(){ 
        sectAContent.style.opacity = 1

        }, 200);

    setTimeout(function(){ 
        sectBContent.style.opacity = 0
        sectCContent.style.opacity = 0
        sectDContent.style.opacity = 0
        sectEContent.style.opacity = 0
        sectFContent.style.opacity = 0
        }, 00);



})





// SECT B ===================================================================================

sectB.addEventListener('click', ()=>{



    // container on top is open
    if(sectA.classList.contains('full')){
        console.log('top-open')

        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        //   do not need the delay on A since there's no scrolling to the top
        setTimeout(function(){ 
            sectA.classList.remove('full')
            sectA.classList.add('min')
            sectA.classList.add('a-min')

        }, 00);

        setTimeout(function(){ 
            sectB.classList.add('full')
            sectB.classList.remove('min')
            sectB.classList.remove('b-min')
    
         }, 500);

        // OPACITY FUNCTIONS==============================================
        setTimeout(function(){ 
        sectBContent.style.opacity = 1

        }, 200);

    setTimeout(function(){ 
        sectAContent.style.opacity = 0
        }, 800);
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

                    // OPACITY FUNCTIONS==============================================
        setTimeout(function(){ 
            sectBContent.style.opacity = 1
    
            }, 200);
    
        setTimeout(function(){ 
            sectCContent.style.opacity = 0
            sectDContent.style.opacity = 0
            sectEContent.style.opacity = 0
            sectFContent.style.opacity = 0
            }, 800);
    
            sectC.classList.remove('full')
            sectC.classList.remove('c-min')
            sectC.classList.remove('min')
            sectD.classList.remove('full')
            sectD.classList.remove('d-min')
            sectD.classList.remove('min')
            sectE.classList.remove('full')
            sectE.classList.remove('min')
            sectE.classList.remove('e-min')
            sectF.classList.remove('full')
    }


})





// SECT C ===================================================================================

sectC.addEventListener('click', ()=>{


 

    // container on top is open & container is section A
    // if section A is open - do not need the delay on A since there's no scrolling to the top
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

        }, 00);

        setTimeout(function(){ 
            sectB.classList.remove('full')
            sectB.classList.add('min')
            sectB.classList.add('b-min')

        }, 00);

        setTimeout(function(){ 
            sectC.classList.add('full')
            sectC.classList.remove('min')
            sectC.classList.remove('c-min')
    
         }, 500);

        // OPACITY FUNCTIONS==============================================
        setTimeout(function(){ 
            sectCContent.style.opacity = 1

            }, 200);

        setTimeout(function(){ 
            sectAContent.style.opacity = 0
            }, 800);
    } 
    // container on top is open & container is section B
    else if(sectB.classList.contains('full')){
        console.log('top-open')
    
        content.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        //  CLOSE THESE SECTIONS
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

        //  OPEN THIS SECTION
         setTimeout(function(){ 
            sectC.classList.add('full')
            sectC.classList.remove('min')
            sectC.classList.remove('c-min')
    
         }, 800);

    // OPACITY FUNCTIONS==============================================
     setTimeout(function(){ 
        sectCContent.style.opacity = 1

     }, 200);

    setTimeout(function(){ 
        sectAContent.style.opacity = 0
        sectBContent.style.opacity = 0
        sectDContent.style.opacity = 0
        sectEContent.style.opacity = 0
        sectFContent.style.opacity = 0

     }, 800);
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
                sectD.classList.remove('min')
                sectD.classList.remove('d-min')
                sectE.classList.remove('full')
                sectE.classList.remove('min')
                sectE.classList.remove('e-min')
                sectF.classList.remove('full')

                    // OPACITY FUNCTIONS==============================================
                setTimeout(function(){ 
                    sectCContent.style.opacity = 1

                }, 200);

                setTimeout(function(){ 
                    sectAContent.style.opacity = 0
                    sectBContent.style.opacity = 0
                    sectDContent.style.opacity = 0
                    sectEContent.style.opacity = 0
                    sectFContent.style.opacity = 0

                }, 800);
        }

   
})






// SECT D ===================================================================================


sectD.addEventListener('click', ()=>{

   
 
    // container on top is open & container is section A

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

        }, 00);

        setTimeout(function(){ 
            sectB.classList.add('min')
            sectB.classList.add('b-min')

        }, 00);

        setTimeout(function(){ 
            sectC.classList.add('min')
            sectC.classList.add('c-min')

        }, 00);


        setTimeout(function(){ 
            sectD.classList.add('full')
            sectD.classList.remove('min')
            sectD.classList.remove('d-min')
    
         }, 500);

            // OPACITY FUNCTIONS==============================================
            setTimeout(function(){ 
            sectDContent.style.opacity = 1

            }, 200);

        setTimeout(function(){ 
            sectAContent.style.opacity = 0
            }, 800);
    }

    // container on top is open & container is section B or C
    else if(sectB.classList.contains('full') || sectC.classList.contains('full')){
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
            sectD.classList.add('full')
            sectD.classList.remove('min')
            sectD.classList.remove('d-min')
    
         }, 800);


        // OPACITY FUNCTIONS==============================================
         setTimeout(function(){ 
            sectDContent.style.opacity = 1
    
         }, 200);

        setTimeout(function(){ 
            sectAContent.style.opacity = 0
            sectBContent.style.opacity = 0
            sectCContent.style.opacity = 0
            sectEContent.style.opacity = 0
            sectFContent.style.opacity = 0
    
         }, 800);
  
    }


    // container on bottom is open
    if(sectE.classList.contains('full') || sectF.classList.contains('full')){
        console.log('bottom-open')

        sectDContent.style.opacity = 1

        sectAContent.style.opacity = 0
        sectBContent.style.opacity = 0
        sectCContent.style.opacity = 0
        sectEContent.style.opacity = 0
        sectFContent.style.opacity = 0

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
            sectE.classList.remove('min')
            sectE.classList.remove('e-min')
            sectF.classList.remove('full')
    }
})



// SECT E YELLOW ===================================================================================


sectE.addEventListener('click', ()=>{
 
   
    // container on top is open & container is section A

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

        }, 00);

        setTimeout(function(){ 
            sectB.classList.add('min')
            sectB.classList.add('b-min')

        }, 00);

        setTimeout(function(){ 
            sectC.classList.add('min')
            sectC.classList.add('c-min')

        }, 00);

        setTimeout(function(){ 
            sectD.classList.add('min')
            sectD.classList.add('d-min')

        }, 00);


        setTimeout(function(){ 
            sectE.classList.add('full')
            sectE.classList.remove('min')
            sectE.classList.remove('d-min')
    
         }, 500);

            // OPACITY FUNCTIONS==============================================
            setTimeout(function(){ 
            sectEContent.style.opacity = 1

            }, 200);

        setTimeout(function(){ 
            sectAContent.style.opacity = 0
            }, 800);
    }

    // container on top is open & is not container A
    if(sectB.classList.contains('full') || sectC.classList.contains('full') || sectD.classList.contains('full')){
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


// OPACITY FUNCTIONS =====================================================
         setTimeout(function(){ 
            sectEContent.style.opacity = 1
    
         }, 200);

        setTimeout(function(){ 
            sectAContent.style.opacity = 0
            sectBContent.style.opacity = 0
            sectCContent.style.opacity = 0
            sectDContent.style.opacity = 0
            sectFContent.style.opacity = 0
    
         }, 800);
    
    }


    // container on bottom is open
    if(sectF.classList.contains('full')){
        console.log('bottom-open')

        sectEContent.style.opacity = 1

        sectAContent.style.opacity = 0
        sectBContent.style.opacity = 0
        sectCContent.style.opacity = 0
        sectDContent.style.opacity = 0
        sectFContent.style.opacity = 0

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