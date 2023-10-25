const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        const car = data.find(car => car.id === carId);

        if (car) {
            document.getElementById('car-img').src = car.image;
            document.getElementById('car-name').textContent = car.brand+car.title;
            document.getElementById('car-price_per_month').textContent = `$${car.price_per_month}`;
            document.getElementById('car-type').textContent = car.type;
            document.getElementById('car-fuel').textContent = car.fuel;
            document.getElementById('car-year').textContent = car.year;
            document.getElementById('car-price').textContent = car.price;
        } else {
            alert('Товар не найден');
        }
    })
    .catch(error => console.error('Ошибка при загрузке данных о товарах:', error));
