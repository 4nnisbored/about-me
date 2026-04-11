let mainBody = document.getElementById ("iwannabechangedsobaaad")
let titleText = document.getElementById ("title")
let bg = [
    "./media/bg/raiden1.jpg",
    "./media/bg/celeste1.png",
    "https://ia801705.us.archive.org/16/items/windows-xp-bliss-wallpaper/windows-xp-bliss-4k-lu-1920x1080.jpg"
]
let ran = bg[Math.floor(Math.random() * bg.length)];
console.log(ran);
mainBody.style.backgroundImage = `url('${ran}')`;

if (ran.includes ("https://ia801705.us.archive.org/16/items/windows-xp-bliss-wallpaper/windows-xp-bliss-4k-lu-1920x1080.jpg")) {
    titleText.style.color = black
}
