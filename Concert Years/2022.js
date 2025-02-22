const events2022 = [
    {
      name: "Roger Waters",
      venue: "TD Garden - Boston, MA",
      date: "July 12, 2022",
      tour: "This Is Not A Drill Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/6EDqXbi2BPaattYJhKZWIa?utm_source=generator",
      youtubeUrl: "https://www.youtube.com/watch?v=3hoH0x75xfo&list=PLmS7BWqMf0knlSpaTh-e-hqys-Jwb6Fvw&pp=gAQB"
    }
  ];
  
  const eventContainer2022 = document.getElementById('event-container');
  events2022.forEach(event => {
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
      img.src = "../Images/youtubelogo.png";
      img.alt = "Button Image";
      button.appendChild(img);
      rectangleDiv.appendChild(button);
    }
  
    eventContainer2022.appendChild(rectangleDiv);
  });
  