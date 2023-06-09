// const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'

// fetch(url)
// .then(response => response.json())
// .then(data => {

//     let element = document.getElementById('elem')
//     element.innerHTML=`
//     <p>${data.text}</p>
//    `

//     console.log(data)
// })




document.addEventListener('DOMContentLoaded', 

function() {
    const nextFact = document.getElementById('btn-next');
    const textContainer = document.getElementById('elem');

    nextFact.addEventListener('click', function() {
        const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                textContainer.innerHTML = `<p>${data.text}</p>`;
                console.log(data);
            })
    });
});
