document.addEventListener('DOMContentLoaded', function() {
    const nextFact = document.getElementById('btn-next');
    const saveFact = document.getElementById('favorite');
    const textContainer = document.getElementById('elem');
    const savedTextsContainer = document.getElementById('savedTextList');

    nextFact.addEventListener('click', function() {
        const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';


        fetch(url)
                     .then(response => response.json())
                     .then(data => {
                         textContainer.innerHTML = `<p>${data.text}</p>`;
                         console.log(data); 
                     })

    });

    saveFact.addEventListener('click', function() {
        const currentText = textContainer.innerHTML;
        const savedText = document.createElement('div');
        savedText.innerHTML = currentText;
        savedTextsContainer.appendChild(savedText);
        textContainer.innerHTML = '';
    });
});

