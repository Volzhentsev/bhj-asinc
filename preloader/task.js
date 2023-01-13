function currencyInfo() {
    const xhr = new XMLHttpRequest;
    const loader = document.getElementById('loader');

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            loader.classList.remove('loader_active');
            let data = JSON.parse(xhr.response).response.Valute;
            for (let key in data) {
                let div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = '<div class="item__code">' +data[key].CharCode+ '</div><div class="item__value">'+data[key].Value+'</div><div class="item__currency">руб.</div></>';
                document.body.append(div);  
            }
        }
    })

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();
}

currencyInfo();
