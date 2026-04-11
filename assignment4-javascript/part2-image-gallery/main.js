const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Image filenames array
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop through images
for (let i = 0; i < images.length; i++) {

  const newImage = document.createElement('img');

  newImage.setAttribute('src', 'images/' + images[i]);
  newImage.setAttribute('tabindex', '0');

  thumbBar.appendChild(newImage);

  // Click event
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', this.getAttribute('src'));
  });

}

// Darken / Lighten button
btn.addEventListener('click', function() {

  const btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0)';
  }

});

// commit 2 change

// commit 3 change