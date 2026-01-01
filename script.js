// Sayfa yüklendiğinde konsola bir selam yazalım (test için)
console.log("Hamit Budak Portfolio Hazır!");

// İsim efektini kontrol edelim
const mainTitle = document.querySelector('h1');

if (mainTitle) {
    mainTitle.addEventListener('mouseover', () => {
        mainTitle.style.transition = "0.5s";
        mainTitle.style.color = "#00d4ff";
    });

    mainTitle.addEventListener('mouseout', () => {
        mainTitle.style.color = "white";
    });
}