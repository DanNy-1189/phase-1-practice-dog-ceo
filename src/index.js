console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', fetchImages());

function fetchImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => renderDogImages(data.message));
};

function renderDogImages(images) {
    images.forEach((image) => {
    const container = document.querySelector('#dog-image-container');
    const img = document.createElement('img');
    container.append(img);
    img.src = image
    img.classList.add('dog-image');
    console.log(image);
    });  
};


const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', fetchBreeds());

function fetchBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => renderDogBreeds(data.message));
};

function renderDogBreeds(dogBreeds) {
    return Object.entries(dogBreeds).forEach(([key, value]) => {
        const ul = document.querySelector('#dog-breeds');
        const li = document.createElement('li');
        li.classList.add('dog-breed');
        ul.append(li);
        li.textContent = `${key}: ${value.join(', ')}`;
        li.addEventListener('click', (e) => {
            e.target.style.color = 'red';
        });
        const letterSelect = document.querySelector('#breed-dropdown');
        letterSelect.addEventListener('change', () => {
            const selectedLetter = letterSelect.value;
            filterDogBreeds(selectedLetter);
        });
        function filterDogBreeds(selectedLetter) {
            const filteredBreeds = Object.entries(dogBreeds).filter(([key, value]) => key.startsWith(selectedLetter));
            ul.textContent = "";
            filteredBreeds.forEach(([key, value]) => {
              const filteredList = document.createElement("li");
              filteredList.textContent = `${key}: ${value.join(', ')}`
              ul.append(filteredList);
            }); 
            return filteredBreeds;
          };
      });
};
