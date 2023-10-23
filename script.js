const options = document.querySelectorAll('.option');
const optionDetail = document.querySelector('.option_detail h2');
const optionDetailDescription = document.querySelector('.option_detail h3');

options.forEach(option => {
    option.addEventListener('click', function (event) {
        event.preventDefault();

        options.forEach(o => o.classList.remove('active'));

        this.classList.add('active');

        const selectedOption = this.getAttribute('data-option');

        optionDetail.style.opacity = '0';
        optionDetailDescription.style.opacity = '0';

        setTimeout(() => {
            switch (selectedOption) {
                case 'option1':
                    optionDetail.textContent = 'Deals for every budget';
                    optionDetailDescription.textContent = 'Incredible prices on hotels, flights, cars.';
                    break;
                case 'option2':
                    optionDetail.textContent = 'Best price guaranteed';
                    optionDetailDescription.textContent = 'We guarantee the best prices on all of our services.';
                    break;
                case 'option3':
                    optionDetail.textContent = 'Support 24/7';
                    optionDetailDescription.textContent = 'Our customer support team is available 24/7 to assist you.';
                    break;
                default:
                    optionDetail.textContent = '';
                    optionDetailDescription.textContent = '';
            }

            optionDetail.style.transition = 'opacity 0.3s ease-in-out';
            optionDetailDescription.style.transition = 'opacity 0.3s ease-in-out';

         
            setTimeout(() => {
                optionDetail.style.opacity = '1';
                optionDetailDescription.style.opacity = '1';
            }, 10); 
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('cars.json')
        .then(response => response.json())
        .then(data => {
            const cars = document.getElementById('cars');
            const carsHtml = data.slice(0, 4).map(car => `
            `).join('');

            cars.innerHTML = carsHtml;

            const brandLinks = document.querySelectorAll('.brands a');

            brandLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    brandLinks.forEach(brandLink => brandLink.classList.remove('active'));
                    this.classList.add('active');
                    const selectedBrand = this.getAttribute('data-brand');
                    const filteredCarsHtml = data
                        .filter(car => car.brand === selectedBrand)
                        .slice(0, 4)
                        .map(car => `
                        <div class="item">
                        <img src="${car.image}" alt="" style="width: 265px;
                        height: 150px;border-radius: 14px;">
                        <h2>${car.title}</h2>
                        <div class="price"><h3>$${car.price}</h3><span>|</span><h3>$${car.price_per_month}/month</h3></div>
                        <div class="info">
                           <div><i class='bx bxs-bolt-circle'></i><h4>${car.year}</h4></div> 
                            <div><i class='bx bxs-car'></i><h4>${car.type}</h4></div>
                            <div><i class='bx bx-color-fill'></i><h4>${car.fuel}</h4></div>
                        </div>
                        <a href="#" onclick="navigateToItemPage(${car.id}); return false;"><h3>Rent Now</h3></a>
                    </div>
                        `)
                        .join('');

                    cars.innerHTML = filteredCarsHtml;
                });
            });

            // Найдите ссылку с брендом "Audi" и выполните событие "click" на ней
            const defaultBrand = document.querySelector('.brands a[data-brand="Audi"]');
            defaultBrand.click();
        })
        .catch(error => console.error('Ошибка при загрузке данных о товарах:', error));
});


const cars = document.getElementById('cars');
function navigateToItemPage(carId) {
    const carPageUrl = `carDetail.html?id=${carId}`;
    window.location.href = carPageUrl;
}