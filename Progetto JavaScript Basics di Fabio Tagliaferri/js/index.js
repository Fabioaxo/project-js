        let total = 0;
        let guess = '';
        function insertNumber(){
           total = +prompt('Enter how many days remain until your trip.');
           document.querySelector('.js-counter')
        .innerHTML = `${total}`;
        callToMemories();
        }
        document.querySelector('.js-counter')
        .innerHTML = `${total}`;
        function increse() { let guess ='+1';
        if (guess === '+1'){
            total ++;
            document.querySelector('.js-counter')
        .innerHTML = `${total}`;
        }

        }
        function decrese() {  
        let guess ='-1';
        if (total <=0){
            alert('Your journey has already begun.');
            total = 0;
            document.querySelector('.js-counter')
        .innerHTML = `${total}`;
        }
        else if (guess === '-1'){
            total --;
            document.querySelector('.js-counter')
        .innerHTML = `${total}`;
        callToMemories();
        }
                          }   
        function callToMemories(){
            if (total == 3 ) {
            alert(`Not long left, don't forget your documents.`);
        } else if (total == 5) {
            alert(`The suitcase is not the last thing to pack. ;) `)
        } else if (total == 14) {
            alert(`Don't forget to prepare an itinerary.`);
        } else if (total == 21) {
            alert(`Buying new clothes is always a nice thing before a trip.`)
        }
        }