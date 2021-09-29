import Letterize from "/js/letterize.min.js"
var letters = new Letterize({
    targets: "h1, li, p",
    wrapper: "i"
});


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

    for (br of document.querySelectorAll("br.dt")){
        let spacer = document.createElement("i");
        spacer.innerHTML = " ";
        insertAfter(spacer, br)
    }

    for (let i of letters.listAll()){
        i.innerHTML = i.innerHTML.replace(/&nbsp;/g, " ");
        i.addEventListener("mouseenter", function(){
            // console.log(i.parentElement);
            if (n == 1){
                i.classList.add("on")
            }
            if (n==3){
                let cln = i.cloneNode(true);
                cln.classList.add("clone");
                insertAfter(cln, i);
            }
        })
    }

let palette = ["#4fff8a", "#1476ff", "#ff9214", "#ff3030"];
let h = document.querySelector("h1");

hHover = true;
for (let container of document.querySelectorAll(".d3container")){
    container.addEventListener("mousemove", function(e){
        container.classList.add("mouseover")
    })
    container.addEventListener("mouseout", function(e){
        container.classList.remove("mouseover")
    })
}

let spanArray = [];

lettersInView();

document.addEventListener("scroll", function(){
    lettersInView();
})

document.addEventListener("mousemove", function(e){
    
    for (let i=0;i<spanArray.length;i++){
        let s = spanArray[i];
        let bounds = s.getBoundingClientRect();
        let dist = distance(e.clientX, e.clientY, bounds.left+bounds.width/2, bounds.top+bounds.height/2);
        let ancestor = findAncestor(s, "d3container");
        if(n==0 || ancestor.classList.contains("mouseover")){
            if (dist < 200){
                if (n == 0){
                    s.style.top = map(dist, 0, 200, -1.5, 0) + "em";
                }
                if (n == 2){
                    s.style.color = palette[Math.floor(Math.random() * palette.length)];
                }
            } else {
                if (n == 0){
                    s.style.top = "0px";
                }
                if (n == 2){
                    s.style.color = "black";
                }
            }
        } else {
            if (n == 2){
                s.removeAttribute("style")
            }
        }
    }
})

// for (let i=0;i<spanArray.length;i++){
//     console.log(spanArray[i], findAncestor(spanArray[i], "d3container"));
// }

function lettersInView(){
    if (n==0){
        spanArray = [];
        for (let i of letters.listAll()){
            if (isScrolledIntoView(i)){spanArray.push(i);}
        }
    } else {
        spanArray = letters.listAll()
    }
}


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function distance(x1, y1, x2, y2){
    return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function SWITCH(x){
    n = x;
    document.querySelector(".btnFixed.active").classList.remove("active");
    btns.item(n).classList.add("active");
    hHover = false;
    for (i of letters.listAll()){
        i.classList.remove("on");
        i.removeAttribute('style');
    }
    if (x==0 || x==1){
        for (c of document.querySelectorAll(".clone")){
            c.remove();
        }
    }
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

 
function scrollUpDown(){
    window.scrollTo(0, window.innerHeight - 30);
}

window.onscroll = function(){
    document.querySelector("#fixed button svg").parentElement.style.opacity="0";
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}