function poll(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () =>{
        if (xhr.readyState === xhr.DONE){
            let json = JSON.parse(xhr.response);
            showQuestion(json);
            return true
        }
    })

    xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();
    
}

function showQuestion(json){
    const title = document.getElementById('poll__title');
    const pool = document.getElementById('poll__answers');
    title.innerText =  json.data.title
    for (let i in json.data.answers){
        let button = document.createElement('button');
        button.className = "poll__answer";
        button.innerText = json.data.answers[i];
        pool.append(button);
    }
    checkAnswer()
}


function checkAnswer(){
    const buttons = document.getElementsByClassName('poll__answer');
    for (let i = 0 ; i < buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
            alert('Спасибо, ваш голос засчитан!')
            location.reload()
        })
    }
    
}

poll()