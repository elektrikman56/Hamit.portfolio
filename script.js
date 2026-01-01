const gallery = document.getElementById('gallery');
const btn = document.getElementById('add-photo');

btn.addEventListener('click', () => {
    // Rastgele bir ID oluşturuyoruz ki farklı fotoğraflar gelsin
    const randomId = Math.floor(Math.random() * 1000);
    
    // Yeni bir kart yapısı oluşturuyoruz
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.innerHTML = `
        <img src="https://picsum.photos/300/200?random=${randomId}" alt="Yeni Fotoğraf">
        <p>Yeni Eklenen ${randomId}</p>
    `;

    // Galeriye ekliyoruz
    gallery.appendChild(newCard);
});