var anchorTag= document.querySelectorAll('.nav-menu a');
var scrollInterval;
console.log(anchorTag , "text ");
for(var i=0; i< anchorTag.length; i++){
     anchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID= this.textContent.trim().toLowerCase();
        var targetSection= document.getElementById(targetSectionID);
         scrollInterval=setInterval(scrollVertically, 50, targetSection);
        
        
    });
    
}

function scrollVertically(targetSection){
    var coordinates= targetSection.getBoundingClientRect();
        if(coordinates.top<=0){
            clearInterval(scrollInterval);
            return;
            
        }
        window.scrollBy(0,50);

}

var progressBar= document.querySelectorAll('.skill-progress > div');
var skillsContainer= document.getElementById('skills-container');
window.addEventListener('scroll', scrollCheck);
var animationDone= false;

function initialiseBar(){
    for(let bar of progressBar ){
        bar.style.width= 0+'%';
    }
}
function fillBar(){
    for(let bar of progressBar){
        let targetWidth= bar.getAttribute('data-bar-width');
        console.log(targetWidth);
        let currentWidth=0;
        let interval= setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width= currentWidth+'%';
        },5
        );
        
    }
}

initialiseBar()

 function scrollCheck(){
    var coordinates= skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone=true;
        console.log("reached");
        fillBar();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initialiseBar();
    }
 }  
// function scrollCheck() {

//     for (let bar of progressBar) {
//         var barCoordinates = bar.getBoundingClientRect();
//         if ((bar.getAttribute("data-bar-width") == "false") &&
//             (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
//             bar.setAttribute("data-bar-width", true);
//             fillBar();
//         } else if (barCoordinates.top > window.innerHeight) {
//             bar.setAttribute("data-bar-width", false);
//             initialiseBar();
//         }

//     }
// }









// var progressBars = document.querySelectorAll(".skill-progress > div");



// function initialiseBar(bar) {
//     bar.setAttribute("data-bar-width", false);
//     bar.style.width = 0 + '%';
// }

// for (var bar of progressBars) {
//     initialiseBar(bar);
// }



// function fillBar(bar) {

//     var currentWidth = 0;
//     var targetWidth = bar.getAttribute("data-bar-width");
//     var interval = setInterval(function () {
//         if (currentWidth >= targetWidth) {
//             clearInterval(interval);
//             return;
//         }
//         currentWidth++;
//         bar.style.width = currentWidth + '%';
//     }, 5);

// }



// // This function uses a for loop for individual progress bars.
// function checkScroll() {

//     for (let bar of progressBars) {
//         var barCoordinates = bar.getBoundingClientRect();
//         if ((bar.getAttribute("data-bar-width") == "false") &&
//             (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
//             bar.setAttribute("data-bar-width", true);
//             fillBar(bar);
//         } else if (barCoordinates.top > window.innerHeight) {
//             bar.setAttribute("data-bar-width", false);
//             initialiseBar(bar);
//         }

//     }
// }



// window.addEventListener("scroll", checkScroll);

// // This event fills the progress bars if they are displayed on the screen when the page is loaded.
// //window.addEventListener("load", checkScroll);
let scrollPercentage=()=>{
let scrollProgress= document.getElementById('progress');
let progressValue= document.getElementById('progress-value');
let pos= document.documentElement.scrollTop;
let caclHeight= document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrollValue= Math.round(pos*100/calcHeight);
scrollPercentage.style.background='conic-gradient(#008ff ${scrollValue}%, #c0c0ff ${scrollValue}%)';
progressValue.textContent='${scrollValue}%';
}

wondow.onscroll= scrollPercentage;
window.onload=scrollPercentage;
