function appendToUl(element) {
    const append1 = document.querySelector(element);
    // return append1.appendChild(element);
}

function appendToDiv(element) {
    const div = document.querySelector('div');
    div.id = 'lorem'
    // return append2.appendChild(element);
}

function takesInTextAndReturnsAnLi(str) {
    const newLi = document.createElement('li');
    return newLi.innerText(str);
}

function takesInImageSourceToBeString(img,str) {
    const imageSource = img.src(str);
}

function changeToSameClass(element1,element2) {
    const newClass = element1.class;
    element2.class = newClass;
}

function makesAnElementWithThatId(tag,id) {
    const newElement = document.createElement(tag);
    newElement.id = id;
    return newElement.id;
}

function colorId(color,id) {
    const newColor = document.querySelector(id)
    newColor.style.color = color;
}







