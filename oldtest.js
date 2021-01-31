

const button = document.querySelector('.open')

const content = document.querySelector('section.content')
const sections = content.querySelectorAll('section')
const innerDivs = document.querySelectorAll('div.content-inner')
const body = document.querySelector('body')
const sectA = document.querySelector('section.a')
const sectAContent = document.querySelector('section.a div')
const sectB = document.querySelector('section.b')
const sectBContent = document.querySelector('section.b div')
const sectC = document.querySelector('section.c')
const sectCContent = document.querySelector('section.c div')
const sectD = document.querySelector('section.d')
const sectDContent = document.querySelector('section.d div')
const sectE = document.querySelector('section.e')
const sectEContent = document.querySelector('section.e div')
const sectF = document.querySelector('section.f')
const sectFContent = document.querySelector('section.f div')



const mobile = window.matchMedia('(max-width: 900px)')
const desktop = window.matchMedia('(min-width:900px)')


const openFunc = function(){
    sections.forEach(section =>{
        section.classList.remove('initial')
        sectA.classList.add('full')
    })
}

const closeFunc = function(){
    sections.forEach(section =>{
        section.classList.add('initial')
        section.classList.remove('full')
        section.classList.remove('min')
        sectA.classList.remove('a-min')
        sectB.classList.remove('b-min')
        sectC.classList.remove('c-min')
        sectD.classList.remove('d-min')
        sectE.classList.remove('e-min')
    })
}

button.addEventListener('click', ()=>{

    if(mobile.matches){
        content.classList.toggle('open')

        if(content.classList.contains('open')){
        //   open the sections
        openFunc()
        } else{
        //    close the sections
        closeFunc()
        }
    }
})



window.addEventListener('resize', ()=>{
    if(desktop.matches){
        innerDivs.forEach(div=>{
            div.style.opacity = 1
        })
        sections.forEach(section=>{
            section.classList.add('initial')
            content.classList.remove('open')
            section.classList.remove('min')
            section.classList.remove('full')
            sectA.classList.remove('a-min')
            sectB.classList.remove('b-min')
            sectC.classList.remove('c-min')
            sectD.classList.remove('d-min')
            sectE.classList.remove('e-min')
        })
    } else if(mobile.matches){
        
        content.classList.remove('open')
        section.forEach(section=>{
            section.classList.add('initial')
        })
        innerDivs.forEach(div=>{
            // sectA.classList.add('full')
            sectBContent.style.opacity = 0
            sectCContent.style.opacity = 0
            sectDContent.style.opacity = 0
            sectEContent.style.opacity = 0
        })
    }
})



// DESKTOP POSITIONING FUNCTIONS=====================================

const desktopA = ()=>{
    sectA.classList.add('desktop-1')
    sectA.classList.remove('desktop-3')

    sectB.classList.add('desktop-2')
    sectB.classList.remove('desktop-1')
    sectB.classList.remove('desktop-3')

    sectC.classList.add('desktop-3')
    sectC.classList.remove('desktop-2')
    sectC.classList.remove('desktop-1')

    sectD.classList.add('desktop-3')
    sectD.classList.remove('desktop-2')
    sectD.classList.remove('desktop-1')

    sectE.classList.add('desktop-3')
    sectE.classList.remove('desktop-2')
    sectE.classList.remove('desktop-1')
}

const desktopB = ()=>{
    sectA.classList.add('desktop-3')
    sectA.classList.remove('desktop-1')

    sectB.classList.add('desktop-1')
    sectB.classList.remove('desktop-2')
    sectB.classList.remove('desktop-3')

    sectC.classList.add('desktop-2')
    sectC.classList.remove('desktop-3')
    sectC.classList.remove('desktop-1')

    sectD.classList.add('desktop-3')
    sectD.classList.remove('desktop-2')
    sectD.classList.remove('desktop-1')

    sectE.classList.add('desktop-3')
    sectE.classList.remove('desktop-2')
    sectE.classList.remove('desktop-1')
}

const desktopC = ()=>{
    sectA.classList.add('desktop-3')
    sectA.classList.remove('desktop-1')

    sectB.classList.add('desktop-3')
    sectB.classList.remove('desktop-1')
    sectB.classList.remove('desktop-2')

    sectC.classList.add('desktop-1')
    sectC.classList.remove('desktop-2')
    sectC.classList.remove('desktop-3')

    sectD.classList.add('desktop-2')
    sectD.classList.remove('desktop-3')
    sectD.classList.remove('desktop-1')

    sectE.classList.add('desktop-3')
    sectE.classList.remove('desktop-2')
    sectE.classList.remove('desktop-1')
}

const desktopD = ()=>{
    sectA.classList.add('desktop-3')
    sectA.classList.remove('desktop-1')

    sectB.classList.add('desktop-3')
    sectB.classList.remove('desktop-1')
    sectB.classList.remove('desktop-2')

    sectC.classList.add('desktop-3')
    sectC.classList.remove('desktop-1')
    sectC.classList.remove('desktop-2')

    sectD.classList.add('desktop-1')
    sectD.classList.remove('desktop-3')
    sectD.classList.remove('desktop-2')

    sectE.classList.add('desktop-2')
    sectE.classList.remove('desktop-3')
    sectE.classList.remove('desktop-1')
}

const desktopE = ()=>{
    sectA.classList.add('desktop-3')
    sectA.classList.remove('desktop-1')

    sectB.classList.add('desktop-3')
    sectB.classList.remove('desktop-1')
    sectB.classList.remove('desktop-2')

    sectC.classList.add('desktop-3')
    sectC.classList.remove('desktop-1')
    sectC.classList.remove('desktop-2')

    sectD.classList.add('desktop-2')
    sectD.classList.remove('desktop-3')
    sectD.classList.remove('desktop-1')

    sectE.classList.add('desktop-1')
    sectE.classList.remove('desktop-3')
    sectE.classList.remove('desktop-2')
}







// SECT A ===================================================================================

// sectAContent.style.opacity=1 


sectA.addEventListener('click', ()=>{

    if(mobile.matches){
        
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
// setTimeout(function(){ 
//     sectAContent.style.opacity = 1

//     }, 200);

// setTimeout(function(){ 
//     sectBContent.style.opacity = 0
//     sectCContent.style.opacity = 0
//     sectDContent.style.opacity = 0
//     sectEContent.style.opacity = 0
//     sectFContent.style.opacity = 0
//     }, 00);

    }

    if(desktop.matches){
        desktopA()
    }


})





// SECT B ===================================================================================

sectB.addEventListener('click', ()=>{

if(mobile.matches){
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
//     setTimeout(function(){ 
//     sectBContent.style.opacity = 1

//     }, 200);

// setTimeout(function(){ 
//     sectAContent.style.opacity = 0
//     }, 800);
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
    // setTimeout(function(){ 
    //     sectBContent.style.opacity = 1

    //     }, 200);

    // setTimeout(function(){ 
    //     sectCContent.style.opacity = 0
    //     sectDContent.style.opacity = 0
    //     sectEContent.style.opacity = 0
    //     sectFContent.style.opacity = 0
    //     }, 800);

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
}


if(desktop.matches){
    desktopB()
    }


})





// SECT C ===================================================================================

sectC.addEventListener('click', ()=>{

if(mobile.matches){


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
        // setTimeout(function(){ 
        //     sectCContent.style.opacity = 1

        //     }, 200);

        // setTimeout(function(){ 
        //     sectAContent.style.opacity = 0
        //     }, 800);
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
    //  setTimeout(function(){ 
    //     sectCContent.style.opacity = 1

    //  }, 200);

    // setTimeout(function(){ 
    //     sectAContent.style.opacity = 0
    //     sectBContent.style.opacity = 0
    //     sectDContent.style.opacity = 0
    //     sectEContent.style.opacity = 0
    //     sectFContent.style.opacity = 0

    //  }, 800);
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
                // setTimeout(function(){ 
                //     sectCContent.style.opacity = 1

                // }, 200);

                // setTimeout(function(){ 
                //     sectAContent.style.opacity = 0
                //     sectBContent.style.opacity = 0
                //     sectDContent.style.opacity = 0
                //     sectEContent.style.opacity = 0
                //     sectFContent.style.opacity = 0

                // }, 800);
        }
}
 

    if(desktop.matches){
            desktopC()
        }
   
})






// SECT D ===================================================================================


sectD.addEventListener('click', ()=>{

   if(mobile.matches){

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
    //         setTimeout(function(){ 
    //         sectDContent.style.opacity = 1

    //         }, 200);

    //     setTimeout(function(){ 
    //         sectAContent.style.opacity = 0
    //         }, 800);
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
        //  setTimeout(function(){ 
        //     sectDContent.style.opacity = 1
    
        //  }, 200);

        // setTimeout(function(){ 
        //     sectAContent.style.opacity = 0
        //     sectBContent.style.opacity = 0
        //     sectCContent.style.opacity = 0
        //     sectEContent.style.opacity = 0
        //     sectFContent.style.opacity = 0
    
        //  }, 800);
  
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
   }


   if(desktop.matches){
        desktopD()
    }
 
})



// SECT E YELLOW ===================================================================================


sectE.addEventListener('click', ()=>{
 
    if(mobile.matches){

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
        //     setTimeout(function(){ 
        //     sectEContent.style.opacity = 1

        //     }, 200);

        // setTimeout(function(){ 
        //     sectAContent.style.opacity = 0
        //     }, 800);
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
        //  setTimeout(function(){ 
        //     sectEContent.style.opacity = 1
    
        //  }, 200);

        // setTimeout(function(){ 
        //     sectAContent.style.opacity = 0
        //     sectBContent.style.opacity = 0
        //     sectCContent.style.opacity = 0
        //     sectDContent.style.opacity = 0
        //     sectFContent.style.opacity = 0
    
        //  }, 800);
    
    }


    // container on bottom is open
    if(sectF.classList.contains('full')){
        console.log('bottom-open')

        // sectEContent.style.opacity = 1

        // sectAContent.style.opacity = 0
        // sectBContent.style.opacity = 0
        // sectCContent.style.opacity = 0
        // sectDContent.style.opacity = 0
        // sectFContent.style.opacity = 0

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
    }

    if(desktop.matches){
            desktopE()
        }
   
})



// SECT F ===================================================================================


sectF.addEventListener('click', ()=>{
 
    if(mobile.matches){
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
    }
   
 
})