let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let orderedItemsContainerElement = document.getElementById('orderedItemsContainer');
orderedItemsContainerElement.classList.add('p-3');

let headingELement = document.createElement('h1');
headingELement.classList.add('m-3', 'text-center');
headingELement.textContent = "Your Ordered Items";
orderedItemsContainerElement.appendChild(headingELement);

let ulElement = document.createElement('ul');
ulElement.style.listStyleType = "none";
orderedItemsContainerElement.appendChild(ulElement);

function deleteLiElement(itemId) {
    let toDeleteItem = document.getElementById(itemId);
    ulElement.removeChild(toDeleteItem);
    console.log(toDeleteItem);
}

function createLiElement(item) {
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;

    let liElement = document.createElement('li');
    liElement.textContent = item.itemName;
    liElement.classList.add("m-3");
    liElement.id = itemId;
    ulElement.appendChild(liElement);

    let buttonElement = document.createElement('button');
    buttonElement.id = buttonId;
    buttonElement.textContent = "Cancel";
    buttonElement.classList.add("btn", "btn-danger", "ml-3");
    buttonElement.onclick = function() {
        deleteLiElement(itemId);
    }
    liElement.appendChild(buttonElement);
}

for (let item of itemList) {
    createLiElement(item);
}