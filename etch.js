
///////////////////////////////////////////////////0
/////////////////////SETTING UP GRID//////////////

const etchBox = document.querySelector(".etchbox");
const windowSize = 512;
let div;
let size = 16;
let box;
let sketchbox;


const resetButton = document.querySelector("#reset");
let slider = document.querySelector("#gridsize") ;

resetButton.addEventListener("click", resetGrid);

function resetGrid (e) {
    size = slider.value;
    
    while (etchBox.firstChild){
        etchBox.removeChild(etchBox.lastChild);
    }
    
   
    setUp(size);
    
}


function setUp (size) {
    for (j = 0; j < size; j++) {
        for (i = 1; i <= size; i++) {
            div = document.createElement("div");
            div.style.width = windowSize/size + "px";
            div.style.height = windowSize/size + "px";
            div.setAttribute("class", "sketch");
            div.setAttribute("id", i + j * size);
            etchBox.appendChild(div);
        }
    }
    sketchBox = document.querySelectorAll(".sketch");
    sketchBox.forEach(box => {
        box.addEventListener("mouseover", fillBox);
    });
}



////////////////////////////////////////////////
//////////////COLORING///////////////////////



function fillBox(e) {
    e.srcElement.setAttribute("class", "colored");

}

setUp(size);

////////////////////////////////////////
/////////////RESETTING GRID//////////




