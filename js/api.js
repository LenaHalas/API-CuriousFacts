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




// document.addEventListener('DOMContentLoaded', 

// function() {
//     const nextFact = document.getElementById('btn-next');
//     const textContainer = document.getElementById('elem');

//     nextFact.addEventListener('click', function() {
//         const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 textContainer.innerHTML = `<p>${data.text}</p>`;
//                 console.log(data);
//             })
//     });
// });

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

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         const newText = document.createElement('p');
        //         newText.innerText = data.text;
        //         textContainer.appendChild(newText);
        //         console.log(data);

        //    newText.addEventListener('transitionend', function(event) {
        //                             if (event.propertyName === 'opacity' && event.target.style.opacity === '0') {
        //                                 textContainer.innerHTML = '<p>Texto desaparecido. ¡Notificación!</p>';
        //                             }
        //                         });


        //     });
    });

    saveFact.addEventListener('click', function() {
        const currentText = textContainer.innerHTML;
        const savedText = document.createElement('div');
        savedText.innerHTML = currentText;
        savedTextsContainer.appendChild(savedText);
        textContainer.innerHTML = '';
    });
});

