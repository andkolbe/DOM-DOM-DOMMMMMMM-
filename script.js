let button = document.createElement('button');
let btnTxt = document.createTextNode('Add Square');
button.appendChild(btnTxt);
document.body.appendChild(button);


button.addEventListener('click', function() {
    let div = document.createElement('div');
    div.className = 'square';
    //div.id = ?
    document.body.appendChild(div);
})