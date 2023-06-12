const showcase = document.querySelector('.showcase')
const showcaseMap = [
    ["Designed for you (Android 12)", "src/Designed for you/vlcsnap-2023-06-12-14h00m12s006.png"],
    ["Making Material You", "src/Making Material You/vlcsnap-2023-05-11-12h53m32s354.png"],
    ["Material You for large screens guidance", "src/Material You for large screens guidance/vlcsnap-2023-05-11-13h09m12s468.png"]
]
showcase.innerHTML += showcaseMap.map(([title, image]) => `
<a href="showcase.html?title=${title}" class="showcase_container">
    <img src="${image}" alt="${title}" class="showcase_image">
    <div class="showcase_text">
        <h2>${title}</h2>
    </div>
</a>
`).join('')