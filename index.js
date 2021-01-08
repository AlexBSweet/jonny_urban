const introSection = document.querySelector('section.intro')
const introInner = introSection.querySelector('div.intro-inner')

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



document.addEventListener('scroll', ()=>{
    let pixels = window.pageYOffset

    let scrollCount = 0
    if(pixels>20){
        pinkSection.classList.add('scrolled')
        blueSection.classList.add('scrolled')
        tealSection.classList.add('scrolled')
        whiteSection.classList.add('scrolled')
        graySection.classList.add('scrolled')
        
    } else{
        pinkSection.classList.remove('scrolled')
        blueSection.classList.remove('scrolled')
        tealSection.classList.remove('scrolled')
        whiteSection.classList.remove('scrolled')
        graySection.classList.remove('scrolled')
    }
    if(pixels<40){
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
        graySection.classList.remove('open')
        graySectionHeader.classList.remove('section-open')
        grayInner.classList.add('hidden')
    }
   


})



pinkSectionHeader.addEventListener('click', ()=>{
    pinkSection.scrollIntoView({behavior: "smooth", block:"start"})

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
})

blueSectionHeader.addEventListener('click', ()=>{
    blueSection.scrollIntoView({behavior: "smooth"})

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

})

tealSection.addEventListener('click', ()=>{

    pinkSection.classList.remove('open')
    pinkSectionHeader.classList.remove('section-open')
    pinkInner.classList.add('hidden')

    blueSection.classList.remove('open')
    blueSectionHeader.classList.remove('section-open')
    blueInner.classList.add('hidden')

    tealSection.scrollIntoView({behavior: "smooth"})
    tealSection.classList.add('open')
    tealInner.classList.remove('hidden')
    tealSectionHeader.classList.add('section-open')

    whiteSection.classList.remove('open')
    whiteSectionHeader.classList.remove('section-open')
    whiteInner.classList.add('hidden')

    graySection.classList.remove('open')
    graySectionHeader.classList.remove('section-open')
    grayInner.classList.add('hidden')

})


whiteSection.addEventListener('click', ()=>{

    pinkSection.classList.remove('open')
    pinkSectionHeader.classList.remove('section-open')
    pinkInner.classList.add('hidden')

    blueSection.classList.remove('open')
    blueSectionHeader.classList.remove('section-open')
    blueInner.classList.add('hidden')

    tealSection.classList.remove('open')
    tealSectionHeader.classList.remove('section-open')
    tealInner.classList.add('hidden')

    whiteSection.scrollIntoView({behavior: "smooth"})
    whiteSection.classList.add('open')
    whiteInner.classList.remove('hidden')
    whiteSectionHeader.classList.add('section-open')

    graySection.classList.remove('open')
    graySectionHeader.classList.remove('section-open')
    grayInner.classList.add('hidden')

})


graySection.addEventListener('click', ()=>{

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
})





// introSection.addEventListener('click', ()=>{

//     window.scrollTo(0,0)

//     introSection.classList.remove('closed')
//     introInner.classList.remove('hidden')

//     pinkInner.classList.add('hidden')
//     pinkSection.classList.remove('open')

//     blueSection.classList.remove('open')
//     blueInner.classList.add('hidden')

//     blueSection.classList.remove('pink-fill')
//     tealSection.classList.remove('pink-fill')
//     whiteSection.classList.remove('pink-fill')
//     graySection.classList.remove('pink-fill')

// })


// pinkSection.addEventListener('click', ()=>{

//     window.scrollTo(0,0)

  

//     introSection.classList.add('closed')
//     introInner.classList.add('hidden')

//     pinkInner.classList.remove('hidden')
//     pinkSection.classList.add('open')
//     pinkSection.classList.remove('closed')

//     blueSection.classList.remove('open')
//     blueInner.classList.add('hidden')

//     tealInner.classList.add('hidden')
//     tealSection.classList.remove('open')
//     tealSection.classList.add('closed')

//     whiteInner.classList.add('hidden')
//     whiteSection.classList.remove('open')
//     whiteSection.classList.add('closed')

// })


// blueSection.addEventListener('click', ()=>{

//     window.scrollTo(0,0)

//     introSection.classList.add('closed')
//     introInner.classList.add('hidden')

//     pinkInner.classList.add('hidden')
//     pinkSection.classList.remove('open')
//     pinkSection.classList.add('closed')

//     blueSection.classList.add('open')
//     blueInner.classList.remove('hidden')
//     blueSection.classList.remove('started')

//     tealInner.classList.add('hidden')
//     tealSection.classList.remove('open')
//     tealSection.classList.add('closed')

//     whiteInner.classList.add('hidden')
//     whiteSection.classList.remove('open')
//     whiteSection.classList.add('closed')

    
// })


// tealSection.addEventListener('click', ()=>{

//     window.scrollTo(0,0)

//     introSection.classList.add('closed')
//     introInner.classList.add('hidden')

//     pinkInner.classList.add('hidden')
//     pinkSection.classList.remove('open')
//     pinkSection.classList.add('closed')

//     blueSection.classList.remove('open')
//     blueInner.classList.add('hidden')
//     blueSection.classList.remove('started')

//     tealInner.classList.remove('hidden')
//     tealSection.classList.add('open')
//     tealSection.classList.remove('closed')
//     tealSection.classList.remove('started')

//     whiteInner.classList.add('hidden')
//     whiteSection.classList.remove('open')
//     whiteSection.classList.add('closed')
    
// })




// whiteSection.addEventListener('click', ()=>{

//     window.scrollTo(0,0)

//     introSection.classList.add('closed')
//     introInner.classList.add('hidden')

//     pinkInner.classList.add('hidden')
//     pinkSection.classList.remove('open')
//     pinkSection.classList.add('closed')

//     blueSection.classList.remove('open')
//     blueInner.classList.add('hidden')
//     blueSection.classList.remove('started')

//     tealSection.classList.remove('open')
//     tealInner.classList.add('hidden')
//     tealSection.classList.remove('started')

//     whiteInner.classList.remove('hidden')
//     whiteSection.classList.add('open')
//     whiteSection.classList.remove('closed')
//     whiteSection.classList.remove('started')
    
// })