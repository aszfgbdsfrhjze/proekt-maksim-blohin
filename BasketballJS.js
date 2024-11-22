let prev=document.getElementById("prev")
let next=document.getElementById("next")
let bigPhoto=document.querySelector('.sliderOne')
let count=1
next.addEventListener('click', function (){
    if(count<4) {
        count++
    }
    else {
        count=1
    }
    bigPhoto.style.backgroundImage=`url(img/photo${count}.jpg)`
    console.log(count)
})
prev.addEventListener('click', function (){
    if(count>1) {
        count--
    }
    else {
        count=4}
    bigPhoto.style.backgroundImage=`url(img/photo${count}.jpg)`
    console.log(count)
})

$(document).ready(function() {
    $('.kotik1').click(function() {
      $('.catp1').toggle();
    });
    $('.kotik2').click(function() {
        $('.catp2').toggle();
      });
       $('.kotik3').click(function() {
      $('.catp3').toggle();
    });
  });
  
