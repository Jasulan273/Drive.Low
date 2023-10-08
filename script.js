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
