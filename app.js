
window.onload = function() {
    console.log("app.js loaded!");
    const navbarHTML = `
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
                    <a href="2025.html">2025</a>
                    <a href="2024.html">2024</a>
                    <a href="2023.html">2023</a>
                    <a href="2022.html">2022</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('navbar').innerHTML = navbarHTML;

    const footerHTML = `
        <div class="disclaimer-container">
            <div class="disclaimer">
                <p><strong>Disclaimer:</strong> New England Concerts is an independent, non-profit platform dedicated to promoting rock bands and related brands. We are not affiliated with, endorsed by, or sponsored by any of the bands, brands, or entities featured on this site. All trademarks, logos, and band names are the property of their respective owners. The content provided on this website is intended solely for informational purposes and does not suggest any commercial intent. You are welcome to download and share videos published by New England Concerts, provided that the videos are shared without commercial intent. For any inquiries or concerns, please visit our Contact page or email us at newenglandconcerts565@gmail.com.</p>
            </div>
        </div>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
};