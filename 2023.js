console.log("2023.js loaded!");

const events2023 = [
    {
      name: "Dead & Company",
      venue: "Fenway Park - Boston, MA",
      date: "June 25, 2023",
      tour: "The Final Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/0DVrbR4x6nkwDROdE38EUy?utm_source=generator",
      youtubeUrl: null
    },
    {
      name: "Fall Out Boy w/ Bring Me the Horizon, Four Year Strong, Royal & the Serpent",
      venue: "Fenway Park - Boston, MA",
      date: "August 2, 2023",
      tour: "So Much For (Tour) Dust",
      playlistUrl: "https://open.spotify.com/embed/playlist/1Eqxo92NLYgvPQiAzC0jbI?utm_source=generator",
      youtubeUrl: null
    },
    {
      name: "Guns N' Roses w/ The Pretenders",
      venue: "Fenway Park - Boston, MA",
      date: "August 21, 2023",
      tour: "World Tour 2023",
      playlistUrl: "https://open.spotify.com/embed/playlist/3ehxaslNtaN72TUqKOznSF?utm_source=generator",
      youtubeUrl: "https://www.youtube.com/watch?v=UTZkQ5KFstE&list=PLmS7BWqMf0klXNIgLlG_pJITN-Xd-0Nqt&pp=gAQB"
    },
    {
      name: "Greta Van Fleet w/ Surf Curse",
      venue: "TD Garden - Boston, MA",
      date: "September 15, 2023",
      tour: "Starcatcher World Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/4xFOtGzrzhSrG9e61x2CbS?utm_source=generator",
      youtubeUrl: "https://www.youtube.com/watch?v=P_zbv8QDjeo&list=PLmS7BWqMf0knAi59wySZi7S7KKYM90Qry&pp=gAQB"
    },
    {
      name: "Third Eye Blind",
      venue: "Big E Arena - West Springfield, MA",
      date: "September 30, 2023",
      tour: "Live",
      playlistUrl: "https://open.spotify.com/embed/playlist/3Lx8VDyrMEdSE9sObH8NfA?utm_source=generator",
      youtubeUrl: null
    },
    {
      name: "Queen + Adam Lambert",
      venue: "TD Garden - Boston, MA",
      date: "October 16, 2023",
      tour: "The Rhapsody Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/0YWnyZKFMQiDgTup0aWipZ?utm_source=generator",
      youtubeUrl: "https://www.youtube.com/watch?v=EweMbLINE_U&list=PLmS7BWqMf0klDAAFJHlsHWLNKoIe9kFM2&pp=gAQB"
    }
  ];
  
  const eventContainer2023 = document.getElementById('event-container');
  events2023.forEach(event => {
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
      img.src = "youtubelogo.png";
      img.alt = "Button Image";
      button.appendChild(img);
      rectangleDiv.appendChild(button);
    }
  
    eventContainer2023.appendChild(rectangleDiv);
  });
  