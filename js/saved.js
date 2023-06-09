
document.addEventListener('DOMContentLoaded', function() {
    const nextFact = document.getElementById('btn-next');
    const savedFact = document.getElementById('favorite');
    const textFact = document.getElementById('elem');
    const savedTextList = document.getElementById('savedTextList');
    let savedText = [];

    nextFact.addEventListener('click', function() {
        const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                textFact.innerHTML = `<p>${data.text}</p>`;
                savedText = data.text;
                console.log(data);
            })
    });

    savedFact.addEventListener('click', function() {
        if (savedText.length > 0) {
            savedTextList.innerHTML = '';
            savedText.forEach(text => {
                const divText = document.createElement('div')
                divText.textContent = text;

                const listItem = document.createElement('li');
                listItem.textContent = text;

                divText.appendChild(listItem);
                savedTextList.appendChild(divText);
            //listFacts.innerHTML = `<p>${savedText}</p>`;
        });
    }
});
});