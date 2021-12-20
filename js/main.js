var container = document.querySelector('#scroll');
var graphic = document.querySelector('#scroll > .scroll__graphic'); //container.select('.scroll__graphic');
var text = document.querySelector('#scroll > .scroll__text'); //container.select('.scroll__text');
var step = document.querySelector('#scroll > .scroll__text > .step'); // text.selectAll('.step');
var scroller = scrollama();

function handleStepEnter(r) {  
    let pictures_src = $(r.element).data("stuff"); 
    
    if(pictures_src.length > 1) {
        document.getElementById('pictures').innerHTML = '';
         for(var i=0; i < pictures_src.length; i++ ){

            (function(i) {
                setTimeout(function() { 
                    var pic = document.createElement("img");
                    pic.src = pictures_src[i];  
                    document.getElementById('pictures').append(pic);
                 }, 100 * i);
              })(i);                     
        }   
        
    } 
}

function handleContainerEnter(response) {
    // response = { direction }
}

function handleContainerExit(response) {
    // response = { direction }
}



function init() {   
    scroller.setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        offset: 0.9,
        debug: false
    })
        .onStepEnter(handleStepEnter)
        .onContainerEnter(handleContainerEnter)
        .onContainerExit(handleContainerExit);   
}
init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
