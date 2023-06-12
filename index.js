const showcase = document.querySelector('.showcase')
const showcaseMap = [
    [
        "Making Material You",
        "src/Making Material You/vlcsnap-2023-05-11-12h51m32s100.png",
        '75'
    ],
    [
        "Material You for large screens",
        "src/Material You for large screens guidance/vlcsnap-2023-05-11-13h09m12s468.png",
        '21'
    ],
    [
        "Designed for you",
        "src/Designed for you/vlcsnap-2023-06-12-14h00m12s006.png",
        '29'
    ],
    [
        "Android 12 Evolution",
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/1._Android_12_Keyword_Header.width-1600.format-webp.webp",
        '56'
    ],
]
showcase.innerHTML += showcaseMap.map(([title, image, count]) => `
<a href="showcase.html?title=${title}" class="showcase_container">
    <img src="${image}" alt="${title}" class="showcase_image">
    <div class="showcase_text_container">
        <div class="showcase_text">${title}</div>
        <div class="count_capsule">${count}</div>
    </div>
</a>
`).join('')
showcase.innerHTML += `
<div class="showcase_container">
    <div class="showcase_image"></div>
    <div class="showcase_text_container">
        <div class="showcase_text">Coming soon...</div>
    </div>
</div>
`