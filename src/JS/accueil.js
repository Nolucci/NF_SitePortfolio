//html setup
let pupilsHTMLCollection = document.getElementsByClassName('oeil-pupille');
let pupilsArray = Array.from(pupilsHTMLCollection);

// input setup
let input={
    mouseX:{
        start:0,
        end: window.innerWidth,
        current:0,
    },
    mouseY:{
        start:0,
        end: window.innerHeight,
        current:0,
    }
};
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output setup
let output ={
    x: {
        start: -22,
        end: 25,
        current:0,
    },
    y: {
        start: -37,
        end: 10,
        current:0,
    },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

let handleMouseMove = function (event) {
    // mouse x input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) /  input.mouseX.range;

    // mouse y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) /  input.mouseY.range;

    // output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    // apply output to html
    pupilsArray.forEach(function (pupil, k){
        pupil.style.transform = 'translate('+output.x.current+'px, '+output.y.current+'px)';
    });



    // if (input.mouseX.fraction > 1) {
    //   input.mouseX.fraction = 1;
    // }
    //  if (input.mouseX.fraction < 0) {
    //   input.mouseX.fraction = 0;
    // }

    console.log('output.x.current',  output.x.current);
//   console.log('event.fraction Y',  input.mouseY.fraction);
}

let handleResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);