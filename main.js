function appendToUl(element) {
    const append1 = document.querySelector('ul');
    append1.appendChild(element);
}

function appendToDiv(element) {
    const append2 = document.querySelector('div#lorem');
    append2.appendChild(element);
    // return append2.appendChild(element);
}

function takesInTextAndReturnsAnLi(str) {
    const newLi = document.createElement('li');
    const li = document.querySelector('li');
    newLi.innerText(str);
    return li.appendChild(newLi);
}

function takesInImageSourceToBeString(img,str) {
    const imageSource = document.querySelector(img);
}

function changeToSameClass(element1,element2) {
    const firstElement = document.querySelector(element1);
    const secondElement = document.querySelector(element2);
    return secondElement.class = firstElement.class
}

function makesAnElementWithThatId(tag,id) {
    const newElement = document.createElement(tag);
    newElement.id =id;
    return newElement;
}

function takesInTwoStringsAndDoesSomething(color, id) {
    const newColor = document.querySelector(id);
    newColor.style.color = color;
}

takesInTextAndReturnsAnLi('kejal-1');
takesInTextAndReturnsAnLi('kejal-2');
takesInTextAndReturnsAnLi('kejal-3');