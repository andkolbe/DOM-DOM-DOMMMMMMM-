//Add Square button
let button = document.createElement('button');
let btnTxt = document.createTextNode('Add Square');
button.appendChild(btnTxt);
document.body.appendChild(button);

//Div to contain squares
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//Connect clicking the button with populating a square
let counter = 1;
button.addEventListener('click', function () {
    let div = document.createElement('div');
    div.className = 'square';
    div.id = counter;
    counter++;
    container.appendChild(div);

    //Id number on square appear
    div.addEventListener('mouseover', function () {
        div.textContent = div.id;
    });
    //Id number on square disappear
    div.addEventListener('mouseout', function () {
        div.textContent = '';
    });

    //Generate random color on square on click
    const squareClass = document.getElementsByClassName('square');
    for (let squares of squareClass) {
        squares.addEventListener('click', function () {
            const randomIdx = Math.floor(Math.random() * colorArray.length);
            squares.style.backgroundColor = colorArray[randomIdx];
        });
    };

    //On double click, determine if square is even or odd, then delete or alert
    div.addEventListener('dblclick', function () {
        if (div.id % 2 === 0) { //the square is even
            if (div.nextSibling === null) { //there is no next square
                alert('Arr! There is no next square!');
            } else {
                div.nextSibling.remove(); //remove next square
            }
        } else { //the square is odd
            if (div.previousSibling === null) { //there is no prev square
                alert('Arr! There is no previous square!');
            } else {
                div.previousSibling.remove(); //remove previous square
            }

        }
    })
})

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933'];




