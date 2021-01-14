const introSection = document.querySelector('section.intro')
const introInner = introSection.querySelector('div.intro-inner')

const bodySections = document.querySelectorAll('section.body')
const sectionHeaders = document.querySelectorAll('div.mobile-section-header')

const pinkSection = document.querySelector('section.pink')
const pinkSectionHeader = pinkSection.querySelector('div.mobile-section-header')
const pinkInner = pinkSection.querySelector('div.pink-inner')

const blueSection = document.querySelector('section.blue')
const blueSectionHeader = blueSection.querySelector('div.mobile-section-header')
const blueInner = blueSection.querySelector('div.blue-inner')

const tealSection = document.querySelector('section.teal')
const tealSectionHeader = tealSection.querySelector('div.mobile-section-header')
const tealInner = tealSection.querySelector('div.teal-inner')

const whiteSection = document.querySelector('section.white')
const whiteSectionHeader = whiteSection.querySelector('div.mobile-section-header')
const whiteInner = whiteSection.querySelector('div.white-inner')

const graySection = document.querySelector('section.gray')
const graySectionHeader = graySection.querySelector('div.mobile-section-header')
const grayInner = graySection.querySelector('div.gray-inner')

const greenSection = document.querySelector('section.green')
const greenInner = greenSection.querySelector('div.green-inner')

// do sections.for each and select all sections for the scrolling part
let pixels




const mobile = window.matchMedia('(max-width: 900px)')
const desktop = window.matchMedia('(min-width:900px')



// DESKTOP POSITIONING FUNCTIONS=====================================

const desktopPink = ()=>{
    pinkSection.classList.add('desktop-1')
    pinkSection.classList.remove('desktop-3')

    blueSection.classList.add('desktop-2')
    blueSection.classList.remove('desktop-1')
    blueSection.classList.remove('desktop-3')

    tealSection.classList.add('desktop-3')
    tealSection.classList.remove('desktop-2')
    tealSection.classList.remove('desktop-1')

    whiteSection.classList.add('desktop-3')
    whiteSection.classList.remove('desktop-2')
    whiteSection.classList.remove('desktop-1')

    graySection.classList.add('desktop-3')
    graySection.classList.remove('desktop-2')
    graySection.classList.remove('desktop-1')
}

const desktopBlue = ()=>{
    pinkSection.classList.add('desktop-3')
    pinkSection.classList.remove('desktop-1')

    blueSection.classList.add('desktop-1')
    blueSection.classList.remove('desktop-2')
    blueSection.classList.remove('desktop-3')

    tealSection.classList.add('desktop-2')
    tealSection.classList.remove('desktop-3')
    tealSection.classList.remove('desktop-1')

    whiteSection.classList.add('desktop-3')
    whiteSection.classList.remove('desktop-2')
    whiteSection.classList.remove('desktop-1')

    graySection.classList.add('desktop-3')
    graySection.classList.remove('desktop-2')
    graySection.classList.remove('desktop-1')
}

const desktopTeal = ()=>{
    pinkSection.classList.add('desktop-3')
    pinkSection.classList.remove('desktop-1')

    blueSection.classList.add('desktop-3')
    blueSection.classList.remove('desktop-1')
    blueSection.classList.remove('desktop-2')

    tealSection.classList.add('desktop-1')
    tealSection.classList.remove('desktop-2')
    tealSection.classList.remove('desktop-3')

    whiteSection.classList.add('desktop-2')
    whiteSection.classList.remove('desktop-3')
    whiteSection.classList.remove('desktop-1')

    graySection.classList.add('desktop-3')
    graySection.classList.remove('desktop-2')
    graySection.classList.remove('desktop-1')
}

const desktopWhite = ()=>{
    pinkSection.classList.add('desktop-3')
    pinkSection.classList.remove('desktop-1')

    blueSection.classList.add('desktop-3')
    blueSection.classList.remove('desktop-1')
    blueSection.classList.remove('desktop-2')

    tealSection.classList.add('desktop-3')
    tealSection.classList.remove('desktop-1')
    tealSection.classList.remove('desktop-2')

    whiteSection.classList.add('desktop-1')
    whiteSection.classList.remove('desktop-3')
    whiteSection.classList.remove('desktop-2')

    graySection.classList.add('desktop-2')
    graySection.classList.remove('desktop-3')
    graySection.classList.remove('desktop-1')
}

const desktopGray = ()=>{
    pinkSection.classList.add('desktop-3')
    pinkSection.classList.remove('desktop-1')

    blueSection.classList.add('desktop-3')
    blueSection.classList.remove('desktop-1')
    blueSection.classList.remove('desktop-2')

    tealSection.classList.add('desktop-3')
    tealSection.classList.remove('desktop-1')
    tealSection.classList.remove('desktop-2')

    whiteSection.classList.add('desktop-2')
    whiteSection.classList.remove('desktop-3')
    whiteSection.classList.remove('desktop-1')

    graySection.classList.add('desktop-1')
    graySection.classList.remove('desktop-3')
    graySection.classList.remove('desktop-2')
}






const allFunctions = ()=>{
    document.addEventListener('scroll', ()=>{
        pixels = window.pageYOffset
    
        let scrollCount = 0
        if(pixels>20){
            bodySections.forEach(section=>{
                section.classList.add('scrolled')
            })
            sectionHeaders.forEach(header=>{
                header.classList.add('scrolled')
            })
            
        } else{
            pinkSection.classList.remove('scrolled')
            blueSection.classList.remove('scrolled')
            tealSection.classList.remove('scrolled')
            whiteSection.classList.remove('scrolled')
            graySection.classList.remove('scrolled')
        }
        if(pixels<40){
            pinkSection.classList.remove('open')
            pinkSectionHeader.classList.remove('scrolled')
            pinkInner.classList.add('hidden')
            blueSection.classList.remove('open')
            blueSectionHeader.classList.remove('scrolled')
            blueInner.classList.add('hidden')
            tealSection.classList.remove('open')
            tealSectionHeader.classList.remove('scrolled')
            tealInner.classList.add('hidden')
            whiteSection.classList.remove('open')
            whiteSectionHeader.classList.remove('scrolled')
            whiteInner.classList.add('hidden')
            graySection.classList.remove('open')
            graySectionHeader.classList.remove('scrolled')
            grayInner.classList.add('hidden')
        }
    
    })
    
    

    pinkSectionHeader.addEventListener('click', ()=>{
        if(mobile.matches){
            pinkSection.classList.add('open')
            pinkInner.classList.remove('hidden')
            pinkSectionHeader.classList.add('section-open')
        
            blueSection.classList.remove('open')
            blueSectionHeader.classList.remove('section-open')
            blueInner.classList.add('hidden')
        
            tealSection.classList.remove('open')
            tealSectionHeader.classList.remove('section-open')
            tealInner.classList.add('hidden')
        
            whiteSection.classList.remove('open')
            whiteSectionHeader.classList.remove('section-open')
            whiteInner.classList.add('hidden')
        
            graySection.classList.remove('open')
            graySectionHeader.classList.remove('section-open')
            grayInner.classList.add('hidden')
        
            pinkSection.scrollIntoView({behavior: "smooth", block:"start"})
        }
       
    
    })

    pinkSection.addEventListener('click', ()=>{
        if(desktop.matches){
            desktopPink()
        }
    })
    
    blueSectionHeader.addEventListener('click', ()=>{
        if(mobile.matches){
            pinkSection.classList.remove('open')
            pinkSectionHeader.classList.remove('section-open')
            pinkInner.classList.add('hidden')
        
            blueSection.classList.add('open')
            blueInner.classList.remove('hidden')
            blueSectionHeader.classList.add('section-open')
        
            tealSection.classList.remove('open')
            tealSectionHeader.classList.remove('section-open')
            tealInner.classList.add('hidden')
        
            whiteSection.classList.remove('open')
            whiteSectionHeader.classList.remove('section-open')
            whiteInner.classList.add('hidden')
        
            graySection.classList.remove('open')
            graySectionHeader.classList.remove('section-open')
            grayInner.classList.add('hidden')
        
            blueSection.scrollIntoView({behavior: "smooth"})
        }
    
    })

    blueSection.addEventListener('click', ()=>{
        if(desktop.matches){
            desktopBlue()
        }
    })
    
    tealSection.addEventListener('click', ()=>{
    
        if(mobile.matches){
            pinkSection.classList.remove('open')
            pinkSectionHeader.classList.remove('section-open')
            pinkInner.classList.add('hidden')
        
            blueSection.classList.remove('open')
            blueSectionHeader.classList.remove('section-open')
            blueInner.classList.add('hidden')
        
            
            tealSection.classList.add('open')
            tealInner.classList.remove('hidden')
            tealSectionHeader.classList.add('section-open')
        
            whiteSection.classList.remove('open')
            whiteSectionHeader.classList.remove('section-open')
            whiteInner.classList.add('hidden')
        
            graySection.classList.remove('open')
            graySectionHeader.classList.remove('section-open')
            grayInner.classList.add('hidden')
        
            tealSection.scrollIntoView({behavior: "smooth"})
        }

        
    })
    
    tealSection.addEventListener('click', ()=>{
        if(desktop.matches){
            desktopTeal()
        }
    })
    
    whiteSection.addEventListener('click', ()=>{
    
        if(mobile.matches){
            pinkSection.classList.remove('open')
            pinkSectionHeader.classList.remove('section-open')
            pinkInner.classList.add('hidden')
        
            blueSection.classList.remove('open')
            blueSectionHeader.classList.remove('section-open')
            blueInner.classList.add('hidden')
        
            tealSection.classList.remove('open')
            tealSectionHeader.classList.remove('section-open')
            tealInner.classList.add('hidden')
        
            
            whiteSection.classList.add('open')
            whiteInner.classList.remove('hidden')
            whiteSectionHeader.classList.add('section-open')
        
            graySection.classList.remove('open')
            graySectionHeader.classList.remove('section-open')
            grayInner.classList.add('hidden')
            
            whiteSection.scrollIntoView({behavior: "smooth"})
        }
        
    })

    whiteSection.addEventListener('click', ()=>{
        if(desktop.matches){
            desktopWhite()
        }
    })
    
    
    graySection.addEventListener('click', ()=>{
        
        if(mobile.matches){
            pinkSection.classList.remove('open')
            pinkSectionHeader.classList.remove('section-open')
            pinkInner.classList.add('hidden')
        
            blueSection.classList.remove('open')
            blueSectionHeader.classList.remove('section-open')
            blueInner.classList.add('hidden')
        
            tealSection.classList.remove('open')
            tealSectionHeader.classList.remove('section-open')
            tealInner.classList.add('hidden')
        
            whiteSection.classList.remove('open')
            whiteSectionHeader.classList.remove('section-open')
            whiteInner.classList.add('hidden')
            
            graySection.classList.add('open')
            grayInner.classList.remove('hidden')
            graySectionHeader.classList.add('section-open')
            graySection.scrollIntoView({behavior: "smooth", block:"start"})
        } 
       

    })

    graySection.addEventListener('click', ()=>{
        if(desktop.matches){
            desktopGray()
        }
    })
    
}


allFunctions()




// if (mobile.matches) {
//     mobileFunctions()
//   } else if (desktop.matches){
//    //   desktop code will go here, do not want mobile function to keep running once we expand to desktop size
//   }


// mobile.onchange = function(){
//     if (mobile.matches) {
//         mobileFunctions()
//       } else if (desktop.matches){
//         //   desktop code will go here, do not want mobile function to keep running once we expand to desktop size
//       }
// }







