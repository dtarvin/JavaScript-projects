const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}
function add() {
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addTask(input.value);
    input.value = '';
}

function del() {
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
}

// prioritize
// create box 1 and box 2 on page
// create buttons below box 1 and box 2
// need to iterate over itemsArray
    // var i = 0; i < itemsArray.length - 1; i++
    // i = 0
    // erase any text that is in box 1
    // put itemsArray[i] in box 1
// need to iterate over remaining items
    // var j = 1; j < items.array.length; j++
    // put itemsArray[j] in box 2
// need to associate counter with each task