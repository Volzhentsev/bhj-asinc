function progressBar(){
    const progress = document.getElementById( 'progress' );
    document.forms.form.addEventListener('submit', (e) => {
        e.preventDefault()
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (e) => {       
            progress.value = e.loaded/e.total;
        };
        xhr.open('POST', ' https://students.netoservices.ru/nestjs-backend/upload');
        const formData = new FormData(document.forms.form);
        xhr.send(formData);
    })
      
  }
  
  progressBar()