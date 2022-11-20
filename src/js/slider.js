let sliderContainer = document.getElementById('sliderContainer')
let slider = document.getElementById('slider')
let cards = slider.getElementsByTagName('li')

let sliderContainerWidth = sliderContainer.clientWidth;
// max 5
let elemetToshow = 3
let cardWidth = sliderContainerWidth/elemetToshow;
slider.style.width = cards.length*cardWidth+'px';

for(let i = 0; i < cards.length; i++) {
    const element = cards[i]
    element.style.width = cardWidth +'px'
}

function next (){
    var element_first;
    if(cards.length == elemetToshow){}
     if(elemetToshow %2 == 0) {
        if(elemetToshow > 2) {
            element_first = elemetToshow -1
        } else {
            element_first = elemetToshow * 3 -1
        }
     } else {
       element_first = cards.length - elemetToshow    }
    if(+slider.style.marginLeft.slice(0,-2) > -cardWidth*(cards.length-elemetToshow)){
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'} else {
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth*element_first)+'px'
  }
}
function prev (){
    console.log(+slider.style.marginLeft.slice(0,-2))
    if(+slider.style.marginLeft.slice(0,-2) < -1){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'}
    else{
       
    }
}
