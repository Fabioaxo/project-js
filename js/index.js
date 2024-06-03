let total = 0;

document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.getElementById('buttonContainer');

    // bottone +1
    const increaseButton = document.createElement('button');
    increaseButton.type = 'button';
    increaseButton.className = 'btn btn-outline-primary button-functions';
    increaseButton.textContent = '+1';
    increaseButton.addEventListener('click', increse);
    buttonContainer.appendChild(increaseButton);

    // contatore
    const counter = document.createElement('p');
    counter.className = 'js-counter';
    counter.textContent = '0';
    buttonContainer.appendChild(counter);

    // bottone -1
    const decreaseButton = document.createElement('button');
    decreaseButton.type = 'button';
    decreaseButton.className = 'btn btn-outline-danger button-functions';
    decreaseButton.textContent = '-1';
    decreaseButton.addEventListener('click', decrese);
    buttonContainer.appendChild(decreaseButton);

    const insertButton = document.getElementById('insertButton');
    insertButton.addEventListener('click', insertNumber);
});

function insertNumber() {
    total = +prompt('Enter how many days remain until your trip.');
    updateCounter();
    callToMemories();
}

function increse() {
    total++;
    updateCounter();
}

function decrese() {
    if (total <= 0) {
        alert('Your journey has already begun.');
        total = 0;
    } else {
        total--;
    }
    updateCounter();
    callToMemories();
}

function updateCounter() {
    document.querySelector('.js-counter').textContent = `${total}`;
}

function callToMemories() {
    if (total == 3) {
        alert(`Not long left, don't forget your documents.`);
    } else if (total == 5) {
        alert(`The suitcase is not the last thing to pack. ;)`);
    } else if (total == 14) {
        alert(`Don't forget to prepare an itinerary.`);
    } else if (total == 21) {
        alert(`Buying new clothes is always a nice thing before a trip.`);
    }
}

