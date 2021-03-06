const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// add event listener
jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// //call from api using fetch
// function generateJoke() {
//     //below (accept) ensures we get json back not html
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke

//         })
// }

//call from api using async await
async function generateJoke() {
    //below (accept) ensures we get json back not html
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke



}