console.log("app.js loaded!");
    const navbarHTMLHome = `
        <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
        <div class="dropdown">
            <button class="dropbtn">Concert Years
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="Years/2025/2025.html">2025</a>
              <a href="Years/2024/2024.html">2024</a>
              <a href="Years/2023/2023.html">2023</a>
              <a href="Years/2022/2022.html">2022</a>
            </div>
        </div>
    </div>
    `;
    document.getElementById('navbar').innerHTML = navbarHTMLHome;

    const footerHTML = `
        <div class="button-container">
        <button class="button" onclick="window.open('https://www.youtube.com/@NewEnglandConcerts', '_blank');">
            <img src="Images/youtubelogodark.png" alt="Button Image">
        </button>
        <button class="button" onclick="window.open('https://www.setlist.fm/user/djkarate1', '_blank');">
            <img src="Images/setlistfmlogo.png" alt="Button Image">
        </button>
        </div>
        <div class="disclaimer-container">
            <div class="disclaimer">
                <p><strong>Disclaimer:</strong> New England Concerts is an independent, non-profit platform dedicated to promoting rock bands and related brands. We are not affiliated with, endorsed by, or sponsored by any of the bands, brands, or entities featured on this site. All trademarks, logos, and band names are the property of their respective owners. The content provided on this website is intended solely for informational purposes and does not suggest any commercial intent. You are welcome to download and share videos published by New England Concerts, provided that the videos are shared without commercial intent. For any inquiries or concerns, please visit our Contact page or email us at newenglandconcerts565@gmail.com.</p>
            </div>
        </div>
    `;
    document.getElementById('footer').innerHTML = footerHTML;


    const photos = [
        {
          src: "Images/newenglandconcertslogo.png",
          artist: "New England Concerts Logo",
          date: "Est. 2024"
        },
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