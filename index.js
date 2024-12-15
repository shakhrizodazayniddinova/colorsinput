const colorsBox = document.getElementById("colorsBox");
const colorInp = document.getElementById("colorInp");
const plusColorBtn = document.getElementById("plusColorBtn");
const colorDiv = document.getElementById("colorDiv");
const removeAllBtn = document.getElementById("removeAllBtn");
const backColor = document.getElementById("backColor");
const searchColor = document.getElementById("searchColor");

let index = 2;
let lastColor = "";

const testElement = document.createElement("div");

// check for uniformity
const checkColor = (colorInpValue) => {
    const colors = document.getElementsByClassName("colorAndDeleteBox");

    if(colorInpValue.includes("/")) testElement.style.background = `url(${colorInpValue})`;
    else testElement.style.background = colorInpValue;

    for(const element of colors){
        if(element.style.background == testElement.style.background) return true;
    }

    return false;
}


// add color or add image function
const addColor = () => {
    // input value
    const colorInpValue = colorInp.value;

    // check if the input is empty or not identical
    if(colorInpValue == "" || checkColor(colorInpValue)) return;

    // added its color to last color or last image
    lastColor = colorsBox.innerHTML;

    // creates a div inside the container
    const colorBoxChildDiv = document.createElement("div");
    // adds a id to it
    colorBoxChildDiv.id = index;

    // creates another div inside it
    const colorBox = document.createElement("div");

    // adds a class to it
    colorBox.className = "colorAndDeleteBox flex justify-end items-end w-72 h-44 rounded-lg shadow-2xl px-3 py-2";

    // adds a background image and background color to it
    if(colorInpValue.includes("/")) colorBox.style.background = `url(${colorInpValue})`;
    else colorBox.style.background = colorInpValue;

    // adds a delete button to it
    colorBox.innerHTML = `<button class="colorDeleteBtn float-right text-red-700" id="colorRemoveBtn" onclick="removeColor('${index++}')"><i class="fa-solid fa-trash"></i></button>`

    // adds to the 'color container'
    colorBoxChildDiv.appendChild(colorBox);
    colorsBox.appendChild(colorBoxChildDiv)
}
// pressing enter adds color or adds image
const addcolorKeyup = (e) => {
    if(e.key == "Enter") addColor();
}
plusColorBtn.onclick = () => addColor();


// delete color or image
const removeColor = (id) => {
    const element = document.getElementById(id);
    element.remove();
}


// search color or image
const searchColorFunc = () => {
    const colorInpValue = colorInp.value.toLowerCase();
    const colors = document.getElementsByClassName("colorAndDeleteBox");

    for (const element of colors) {
        if(element.style.background.toLowerCase().includes(colorInpValue)) element.parentElement.style.display = "block";
        else element.parentElement.style.display = "none";
    }
}
searchColor.onclick = () => searchColorFunc();


// remove all colors or image
const removeAllColors = () => {
    lastColor = colorsBox.innerHTML;

    colorsBox.innerHTML = "";
}
removeAllBtn.onclick = () => removeAllColors();


// last color or image
const lastColorFunc = () => {
    colorsBox.innerHTML = lastColor;
}
backColor.onclick = () => lastColorFunc();

