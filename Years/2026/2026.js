console.log("2026.js loaded!");

const events2026 = [
    {
      name: "REZZ",
      venue: "Roadrunner - Boston, MA",
      date: "Janurary 17, 2026",
      tour: "As The Pendulum Swings Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/3A9iUrIKII6HSkpKvqo0S0?utm_source=generator",
      youtubeUrl: null,
      page: null
    },
    {
      name: "Sabaton w/ Pop Evil, Wings of Steel",
      venue: "MGM Music Hall - Boston, MA",
      date: "March 12, 2026",
      tour: "Legends on Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/0QAdjqUh5T4hRIlJ5Fm1HA?utm_source=generator",
      youtubeUrl: null,
      page: null
    }
  ];
  
  const eventContainer2026 = document.getElementById('event-container');
  events2026.forEach(event => {
    const rectangleDiv = document.createElement('div');
    rectangleDiv.classList.add('rectangle');
  
    const textContainerDiv = document.createElement('div');
    textContainerDiv.classList.add('text-container');
    textContainerDiv.innerHTML = `
      <p>${event.name}</p>
      <p>${event.venue}</p>
      <p>${event.date}</p>
      <p>${event.tour}</p>
    `;
  
    const iframe = document.createElement('iframe');
    iframe.style.cssText = "border-radius:12px; width: 60%; height: 152px; margin: 0 10px;";
    iframe.src = event.playlistUrl;
    iframe.frameBorder = "0";
    iframe.allowfullscreen = "";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
  
    rectangleDiv.appendChild(textContainerDiv);
    rectangleDiv.appendChild(iframe);
  
    if (event.youtubeUrl) {
      const button = document.createElement('button');
      button.classList.add('button');
      button.setAttribute('onclick', `window.open('${event.youtubeUrl}', '_blank')`);
      const img = document.createElement('img');
      img.src = "../../Images/youtubelogo.png";
      img.alt = "Button Image";
      button.appendChild(img);
      rectangleDiv.appendChild(button);
    }
  
    eventContainer2026.appendChild(rectangleDiv);
  });
  