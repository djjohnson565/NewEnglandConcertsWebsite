
console.log("gallery.js loaded!");
const photos = [
    {
      src: "Images/newenglandconcertslogo.png",
      artist: "New England Concerts Logo",
      date: "Est. 2024"
    }/*,
    {
      src: "PhotoGallery/blueoystercult.png",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/bobweir.png",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/CheapTrick.jpeg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/deadFenway.jpeg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/DefLeppard.jpeg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/DefLeppardSign.jpeg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/DSOTM.jpg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/FOBSign.jpeg",
      artist: "",
      date: ""
    },
    {
      src: "PhotoGallery/FOBStage.jpeg",
      artist: "",
      date: ""
    },*/
  ];

function createGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo-item');
  
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.artist;
      image.classList.add('photo-image');
      image.addEventListener('click', () => openLightbox(photo.src, photo.artist, photo.date));
  
      const description = document.createElement('div');
      description.classList.add('photo-description');
      
      const artist = document.createElement('p');
      artist.classList.add('artist');
      artist.textContent = `${photo.artist}`;
      
      const date = document.createElement('p');
      date.classList.add('date');
      date.textContent = `${photo.date}`;
      
      description.appendChild(artist);
      description.appendChild(date);
      
      photoElement.appendChild(image);
      photoElement.appendChild(description);
      
      galleryContainer.appendChild(photoElement);
    });
  }

  function openLightbox(src, artist, date) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxArtist = document.getElementById('lightbox-artist');
    const lightboxDate = document.getElementById('lightbox-date');
  
    lightboxImage.src = src;
    lightboxArtist.textContent = `${artist}`;
    lightboxDate.textContent = `${date}`;
  
    lightbox.style.display = 'flex'; // Show the lightbox
  }
  
  function closeLightbox(event) {
    if (event.target === event.currentTarget) {
      document.getElementById('lightbox').style.display = 'none';
    }
  }
  
  createGallery();
  
  document.getElementById('lightbox').addEventListener('click', closeLightbox);