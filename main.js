function appendToUl(element) {
    const append1 = document.querySelector('ul');
    append1.appendChild(element);
}

function appendToDiv(element) {
    const append2 = document.querySelector('#lorem');
    append2.appendChild(element);
    // return append2.appendChild(element);
}

function takesInTextAndReturnsAnLi(text) {
    const newLi = document.createElement('li');
    newLi.innerText = text;
    return text;
}

function takesInImageSourceToBeString(url,image) {
    image.src = url;
}

function changeToSameClass(element1,element2) {
    secondElement.classname = firstElement.classname;
}

function makesAnElementWithThatId(tag,id) {
    const newElement = document.createElement(tag);
    newElement.id =id;
    return newElement;
}

function takesInTwoStringsAndDoesSomething(id, color) {
    const element = document.querySelector(id);
    element.style.color = color;
}

takesInTextAndReturnsAnLi('kejal-1');
takesInTextAndReturnsAnLi('kejal-2');
takesInTextAndReturnsAnLi('kejal-3');