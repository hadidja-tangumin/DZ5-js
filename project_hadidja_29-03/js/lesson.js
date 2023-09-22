// // phone validator
//
// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')
//
// // phoneButton.addEventListener('click', () => {
// //     return console.log('New click')
// // })
//
// const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerHTML = 'ok'
//         phoneResult.style.color = 'green'
//     } else{
//         phoneResult.innerHTML = 'not ok'
//         phoneResult.style.color = 'red'
//     }
// }
//
// // recursion
//
//
//
// //tab slider
// const tabContendBlocks = document.querySelectorAll('.tab_content_block')
// const tabsParentBlock = document.querySelector('.tab_content_items')
// const tabsBlocks = document.querySelectorAll('.tab_content_item')
//
// const hideTabContend = () => {
//     tabContendBlocks.forEach(tabContendBlock=> {
//         tabContendBlock.style.display = 'none'
//     })
//     tabsBlocks.forEach(tabBlock => {
//         tabBlock.classList.remove('tab_content_item_active')
//
//     })
// }
// const showTabContends = (indexElement = 0) => {
//     tabContendBlocks[indexElement].style.display = 'block'
//     tabsBlocks[indexElement].classList.add('tab_content_item_active')
// }
// hideTabContend()
// showTabContends()
//
// tabsParentBlock.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         tabsBlocks.forEach((tabBlock, tabIndex)=> {
//             if (event.target === tabBlock){
//                 hideTabContend()
//                 showTabContends(tabIndex)
//             }
//         })
//     }
// }
// setInterval()
//
//
// document.addEventListener("DOMContentLoaded", function () {
//     let currentSlide = 0;
//     const slides = document.querySelectorAll(".tab_contents_block .tab_content_block");
//     const interval = 1000;
//
//     function nextSlide() {
//         slides[currentSlide].style.display = "none";
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].style.display = "block";
//     }
//
//     setInterval(nextSlide, interval);
// });


//TabSlider
// modal
// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const modalCloseButton = document.querySelector('.modal_close')
//
// const openModel = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
// const closeModel = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModel()
//     }
// }
// modalTrigger.onclick = () => openModel()
// modalCloseButton.onclick = () => closeModel()








//TAB SLIDER
const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)



//Converter
// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')

// usd.addEventListener('input', (event) => {
//     // console.log(event.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convector.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         som.value = (usd.value * response.usd).toFixed(2)
//     })
// })
//
//
// som.addEventListener('input', (event) => {
//     // console.log(event.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convector.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

//DRY - don't repeat yourself

//KISS - keep it simple, stupid
//KISS - keep it short and simple

// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
//
// const convector = (element, target, isTrue) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "../data/convector.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//
//
//
//         request.onload = () => {
//             const respones = JSON.parse(request.response)
//             if (isTrue){
//                 target.value = (element.value / respones.usd).toFixed(2)
//             } else {
//                 target.value = (element.value * respones.usd).toFixed(2)
//             }
//             // element.value === '' ? target.value = '' : null
//             element.value === '' && (target.value = '')
//         }
//     }
// }
// convector(som, usd, true)
// convector(usd, som, false)



//DZ
//CONVERTER
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, target, target2, isCurrency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/convector.json")
        request.setRequestHeader("Content-Type", "application/json") // Исправлено здесь
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isCurrency === 'som') {
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            } else if (isCurrency === 'usd') {
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * response.eur / response.usd).toFixed(2)
            } else if (isCurrency === 'eur') {
                target.value = (element.value * response.eur).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
            }
            if (element.value === '' || target.value === '0') {
                target.value = '';
                target2.value = '';
            }
        }
    }
}

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')
