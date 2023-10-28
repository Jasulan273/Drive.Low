const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        const car = data.find(car => car.id === carId);

        if (car) {
            document.getElementById('car-img').src = car.image;
            document.getElementById('car-name').textContent = car.brand + " " + car.title;
            document.getElementById('car-price_per_month').textContent = `$${car.price_per_month}`;
            document.getElementById('car-type').textContent = car.type;
            document.getElementById('car-fuel').textContent = car.fuel;
            document.getElementById('car-year').textContent = car.year;
            document.getElementById('car-price').textContent = car.price;
            document.getElementById('model').value = car.brand + " " + car.title;
        } else {
            alert('Товар не найден');
        }
    })
    .catch(error => console.error('Ошибка при загрузке данных о товарах:', error));



    const modal = document.getElementById("myModal");
        const openButton = document.getElementById("openModal");
        const closeButton = document.getElementById("closeModal");
        modal.style.display = "none";
        openButton.addEventListener("click", function() {
            modal.style.display = "block";
        });

        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            let form = document.getElementById('formControl');
            let modalContent = document.getElementById('modalContent');
            let newHTMLContent = "<h3 style='color:green;'>Submitted succesfully</h3>";
         
        
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                document.querySelector("#sub").value = "Submitting...";
                let data = new FormData(form);
                setTimeout(function () {
                    modalContent.innerHTML = newHTMLContent;
                    location.reload();
                }, 2000); 
        
                fetch('https://script.google.com/macros/s/AKfycbzy5HvSIepFA8NMF_ljcw0vcSK6WUELZvE_fPXFPE0AnJNV-oDshH-XnMPyT0Ciu-vfGg/exec', {
                    method: "POST",
                    body: data
                })
                .then(function (res) {
                    return res.text();
                })
                .then(function (data) {
                    document.querySelector("#msg").innerHTML = data;
                    document.querySelector("#sub").value = "Submit";
                });
            });
        });
        