const photoApp = document.querySelector(".photo-app");
const backWard = document.querySelector(".backward");
const forWard = document.querySelector(".forward");
let movein;

photoApp.addEventListener("wheel", (e) => {
    e.preventDefault();
    photoApp.scrollLeft += (e.deltaY)*3;
});

backWard.addEventListener("mouseover", () => {
    console.log("noice");
    // photoApp.scrollLeft -= 300;
    movein = setInterval(() => {
        photoApp.scrollLeft -= 300;
        console.log(photoApp.scrollLeft);
    }, 800)
})

forWard.addEventListener("mouseover", () => {
    console.log("noice but forwar");
    // photoApp.scrollLeft += 300;
    movein = setInterval(() => {
        photoApp.scrollLeft += 300;
        console.log(photoApp.scrollLeft)
    }, 800)
})

backWard.addEventListener("mouseout", () => {
    clearInterval(movein);
})

forWard.addEventListener("mouseout", () => {
    clearInterval(movein);
})


