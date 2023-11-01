let rand_me = document.getElementById("rand-me");
let container_heart = document.getElementById("container_heart");
rand_me.addEventListener("click",function () {
    let parent_heart = document.createElement("div");
    container_heart.appendChild(parent_heart);
    let interval = setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="&#128156;";
        heart.style.left = `${Math.random()*100}%`;
        heart.style.animationDuration = `${(Math.random() + 0.5)*2}s`;


        let heart2 = document.createElement("div");
        heart2.classList.add("heart");
        heart2.innerHTML="&#129505;";
        heart2.style.left = `${Math.random()*100}%`;
        heart2.style.animationDuration = `${(Math.random() + 0.5)*2}s`;


        parent_heart.appendChild(heart);
        parent_heart.appendChild(heart2);
    }, 30);
    setTimeout(() => {
        clearInterval(interval);
    }, 2000);

    setTimeout(() => {
        parent_heart.remove()
    }, 5000);
})
