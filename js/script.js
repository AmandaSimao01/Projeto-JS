document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700", "#00CED1", "#8A2BE2", "#FD3309"];
    let index = 0;

    button.addEventListener("click", () => {
        document.body.style.backgroundColor = colors[index]; 
        index = (index + 1) % colors.length;
    });
});


