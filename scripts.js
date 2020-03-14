document.addEventListener('DOMContentLoaded', function() {
    // create first button
    let btn = document.createElement('button');
    let btnText = document.createTextNode('click me');
    btn.style.display = "block";
    btn.appendChild(btnText);
    document.body.prepend(btn);

    // display alert on button click
    btn.addEventListener('click', function() {
        let quoteArray = [
            '\"Would I rather be feared or loved? Easy- both. I want people to be afriad of how much they love me.\" - Michael Scott',
            '\"I love inside jokes. I\'d love to be a part of one someday.\" - Michael Scott',
            '\"Sometimes I\'ll start a sentence and I don\'t even know where it\'s going.\" - Michael Scott',
            '\"I\'m not superstitious, but I am a little stitious.\" - Michael Scott',
            '\"And I knew exactly what to do. But in a much more real sense, I had no idea whwat to do.\" - Michael Scott'
        ]
        let randomQuote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
        alert(randomQuote);
    })

    // new button with text box
    let btnInput = document.getElementById('btnInput');

    // on click display what was text box input
    btnInput.addEventListener('click', function() {
        let str = document.getElementById('txtInput').value;
        alert(str);
    })

    // change div bg color on hover
    let divColor = document.getElementById('color');
    divColor.addEventListener('mouseover', function() {
        divColor.style.backgroundColor = 'blue';
    })
    divColor.addEventListener('mouseout', function(){
        divColor.style.backgroundColor = null;
    })

    // create paragraph with text 
    let para = document.createElement('p');
    let paraText = document.createTextNode('click me: i change colors');
    para.appendChild(paraText);
    document.body.appendChild(para);

    // change paragraph text color on click
    para.addEventListener('click', function() {
        // set up rendom color selector
        let colorArray = ['seagreen', 'red', 'gold', 'coral', 'tan', 'cream'];
        let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
        para.style.color = randomColor;
    })
})