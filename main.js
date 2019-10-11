function appendToUl (element) {
    const newLiInUl = document.querySelector('ul');
    newLiInUl.appendChild(element);
}

// const heading = document.createElement('h1');
// heading.innerText('TEST');
// appendToUl(heading);

function appendToDiv (element) {
    const newElementInDiv = document.querySelector('#lorem');
    newElementInDiv.appendChild(element);
}

// const thing = document.createElement('li');
// thing.innerText("TEST");
// appendToDiv(thing);

function takesInTextAndReturnsANewLi (text) {
    const newLi = document.createElement('li');
    newLi.innerText = text;
    return item;
}

// const item = takesInTextAndReturnsANewLi('TESTY');
// appendToDiv(item);

function addUrlToImage (url,image) {
    image.src = url;
}

// const newImage = document.createElement('img');
// const monkeyUrl = "https://previews.123rf.com/images/photoloader/photoloader1806/photoloader180600012/103436449-young-cute-monkey-eating-watermelon-in-forest-.jpg"
// addUrlToImage(monkeyUrl,newImage);

function cloneClass (element1, element2) {
    element2.className = element1.className;
}

// const thing1 = document.querySelector('#thing-1')
// const thing2 = document.querySelector('#thing-2')
// const thingC = document.querySelector('#thing-c')

// cloneClass(thing1,thing2);
// cloneClass(thing1,thingC); 

function makeElementWithId(tagName,id){
    const newElement = document.createElement(tagName);
    newElement.id = id;

    return newElement;
}

function giveColorToElement (color, id) {
    const newElement = document.createElement(id);
    newElement.style.color = color;
}

// giveColorToElement('green', '#heading')

