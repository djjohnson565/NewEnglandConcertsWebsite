console.log("2025.js loaded!");

const events2025 = [
    {
      name: "Disturbed w/ Three Days Grace, Sevendust",
      venue: "TD Garden - Boston, MA",
      date: "March 14, 2025",
      tour: "The Sickness 25th Anniversary Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/4G74gtXOnEoCzoFGbnPqhS?utm_source=generator",
      youtubeUrl: null,
      page: "disturbed.html"
    },
    {
      name: "Heart w/ Lucina Williams",
      venue: "Agganis Arena - Boston, MA",
      date: "April 13, 2025",
      tour: "Royal Flush Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/46G1qfDzK0e8zkmdWMhamS?utm_source=generator",
      youtubeUrl: null,
      page: "heart.html"
    },
    {
      name: "AC/DC w/ The Pretty Reckless",
      venue: "Gillette Stadium - Foxborough, MA",
      date: "May 4, 2025",
      tour: "Power Up Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/0MogriMzvqstTxrMLP7h0a?utm_source=generator",
      youtubeUrl: null,
      page: "acdc.html"
    },
    {
      name: "Fall Out Boy - Avril Lavinge",
      venue: "Harvard Athletic Complex - Boston, MA",
      date: "May 24, 2025",
      tour: "Boston Calling Day 2",
      playlistUrl: "https://open.spotify.com/embed/playlist/3lMHlvnYn0aLk2tfHllGfU?utm_source=generator",
      youtubeUrl: null,
      page: "bostoncalling2.html"
    },
    {
      name: "Dave Matthews Band - Vampire Weekend",
      venue: "Harvard Athletic Complex - Boston, MA",
      date: "May 25, 2025",
      tour: "Boston Calling Day 3",
      playlistUrl: "https://open.spotify.com/embed/playlist/6q3owYoeYD08fHvXE9exl5?utm_source=generator",
      youtubeUrl: null,
      page: "bostoncalling3.html"
    },
    {
      name: "Coldplay w/ Ayra Starr, Elyanna",
      venue: "Gillette Stadium - Foxborough, MA",
      date: "July 16, 2025",
      tour: "Music of the Spheres Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/04NFoN8K6hVftj9ruBPflI?utm_source=generator",
      youtubeUrl: null,
      page: "coldplay.html"
    },
    {
      name: "Linkin Park w/ PVRIS",
      venue: "TD Garden - Boston, MA",
      date: "August 1, 2025",
      tour: "From Zero World Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/4zafK8fD5zlvPq70y2D9iG?utm_source=generator",
      youtubeUrl: null,
      page: "linkinpark.html"
    },
    {
      name: "My Chemical Romance w/ IDLES",
      venue: "Fenway Park - Boston, MA",
      date: "September 7, 2025",
      tour: "\"Long Live\" The Black Parade 2025 North American Stadium Tour",
      playlistUrl: "https://open.spotify.com/embed/playlist/2JO1MaKcse0tXQKDvDrjRf?utm_source=generator",
      youtubeUrl: null,
      page: "mcr.html"
    }
  ];
  
  const eventContainer2025 = document.getElementById('event-container');
  events2025.forEach(event => {
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

    if (event.page) {
      const button2 = document.createElement('button');
      button2.classList.add('button');
      button2.setAttribute('onclick', `window.location.href = '${event.page}';`);
      button2.textContent = "Details";
      button2.style.backgroundColor = "#4CAF50";
      button2.style.color = "white";
      rectangleDiv.appendChild(button2);
    }
  
    eventContainer2025.appendChild(rectangleDiv);
  });
  