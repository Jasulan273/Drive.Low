const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        const car = data.find(car => car.id === carId);

        if (car) {
     
            document.getElementById('car-name').textContent = car.title;
            document.getElementById('car-price').textContent = `Цена: $${car.price}`;
        } else {
            alert('Товар не найден');
        }
    })
    .catch(error => console.error('Ошибка при загрузке данных о товарах:', error));
