const baseURL = 'https://ghibliapi.herokuapp.com';

const searchForm = document.querySelector('form'); 
// console.log(searchForm);
const spaceShips = document.querySelector('ul');
// console.log(spaceShips);
const imageUl = document.getElementById('images');
console.log(imageUl);
searchForm.addEventListener('submit', fetchSpace); // function reference - function is not being invoked on this line, we only want the function to run when the submit event happens. the addEventListener method will always send the event as the first parameter to the function being called by default
function fetchSpace(event) {
    console.log(event);
    event.preventDefault(); // stops automatic reload of page on form submission
    fetch(`${baseURL}/films`) // fetch starts the process of fetching a resource from a network, and that fetch will return a promise which is fulfilled (or rejected) once the response is available
        .then(responseObj => responseObj.json()) // .then(function(responseObj) {})
        .then(jsonData => (displayRockets(jsonData), displayPicture(jsonData)))
}
//                      json = jsonData
function displayRockets(json) {
    console.log('Results:', json);
    json.forEach(rocket => {
        console.log(rocket);
        let item = document.createElement('li');
        item.innerText = rocket.rocket_name;
        spaceShips.appendChild(item);
    })
}
function displayPicture(json) {
    json.forEach(rocket => {
        let imageLi = document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', rocket.flickr_images[0]);
        image.style.height = '200px';
        image.style.width = 'auto';
        console.log(image);
        imageLi.appendChild(image);
        imageUl.appendChild(imageLi);
    })
}