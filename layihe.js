let btne = document.querySelector('.btn2');
let ipt = document.querySelector('.input');
let list = document.querySelector('ul');
let element = document.createElement('li');
let clearInputBtn = document.querySelector(".bi-x-circle");
let sortBtn = document.querySelector(".bi-sort-down");
let esas = document.querySelector(".header");
let elementText;
btne.addEventListener('click', m1); //elave etme butonu hadisesi
list.addEventListener("click", deleteElements); // listdeki elementi silmek
clearInputBtn.addEventListener("click", clearInputByButton); //inputdaki yazini silmek
esas.addEventListener("click", sortingElements); //cesidlemek

function m1() {
    let inputValue = ipt.value.trim();
    if (inputValue == "") {
        alert(" ELEMENT DAXIL EDIN !");
    } else {
        addElementToList(inputValue);
        clearInput(); 
    }


}
function addElementToList(paramsInput) {
    list.innerHTML +=
        `
    <li>
    ${paramsInput}
    <i class="bi bi-x-circle"></i>
    </li>
    `
}

function clearInput() {
    ipt.value !== "" ? ipt.value = "" : null;
}


function deleteElements(e) {
    let targetSpace = e.target;
    if (targetSpace.className === "bi bi-x-circle") {
        targetSpace.parentElement.remove();
    }

}

function clearInputByButton() {
    ipt.value !== "" ? ipt.value = "" : null;
}

function sortingElements(e) {
    let targetSpace = e.target;
    let elements = Array.from(list.children);
    elementText = elements.map(x => x.textContent.trim());


    if (targetSpace.className.indexOf("bi-sort-up") !== -1) {
        targetSpace.classList.remove("bi-sort-up");
        targetSpace.classList.add("bi-sort-down");
        sortingElementsUp(elementText);
    } else if (targetSpace.className.indexOf("bi-sort-down") !== -1) {
        targetSpace.classList.remove("bi-sort-down");
        targetSpace.classList.add("bi-sort-up");
        sortingElementsDown(elementText);
    }

}
function sortingElementsUp(paramsValue) {
    paramsValue.sort((a, b) => {
        const nameA = a.toUpperCase();
        const nameB = b.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });


    allElementToList(elementText)
}

function sortingElementsDown(paramsValue) {
    paramsValue.sort((a, b) => {
        const nameA = a.toUpperCase();
        const nameB = b.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    });


    allElementToList(elementText)
}
function allElementToList(parasValue) {
    while (list.firstElementChild !== null) {
        list.removeChild(list.firstElementChild)
    }
    parasValue.forEach(x => addallElementToList(x))


}

function addallElementToList(paramsValue) {
    list.innerHTML +=
        `
    <li>
    ${paramsValue}
    <i class="bi bi-x-circle"></i>
    </li>
    `
}