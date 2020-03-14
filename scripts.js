document.addEventListener('DOMContentLoaded', function() {
    let btn = document.createElement('button');
    let btnText = document.createTextNode('click me');
    btn.style.display = "block";
    btn.appendChild(btnText);
    document.body.prepend(btn);

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

    let btnInput = document.getElementById('btnInput');

    btnInput.addEventListener('click', function() {
        let str = document.getElementById('txtInput').value;
        alert(str);
    })

})