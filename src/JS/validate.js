let form = document.querySelector('.breef__form'),
    formInputs = document.querySelectorAll('.js-input'),
    formTextarea = document.querySelectorAll('.js-textarea'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function validatePhone(phone) {
        let re = /^[0-9\s]*$/;
        return re.test(String(phone));
    }

    form.onsubmit = function () {
        let emailVal = inputEmail.value,
            phoneVal = inputPhone.value;
            emptyInputs = Array.from(formInputs).filter(input => input.value === '');
            emptyTextarea = Array.from(formTextarea).filter(textarea => textarea.value === '');


        formInputs.forEach(function (input) {
            if (input.value === '' ) {
                input.classList.add('error');
                
        
            } else {
                input.classList.remove('error');
            }
        });

        formTextarea.forEach(function (textarea) {
            if (textarea.value === '' ) {
                textarea.classList.add('error');
                
        
            } else {
                textarea.classList.remove('error');
                
            }
        });

        if (!validatePhone(phoneVal)) {
            alert('Недопустимый телефон');
            inputPhone.classList.add('error');
            return false;
        } else {
            inputPhone.classList.remove('error');
        }
        if (emptyInputs.length !== 0) {
            alert('Заполните все поля');
            return false;

        }
        if(emptyTextarea.length !== 0) {
            alert('Заполните все поля');
            return false;
        }
        if(!validateEmail(emailVal)) {
            alert('Недопустимый Email');
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
        }
        
      
 
    }

    function fileValidation() {
        let fileInput =
            document.getElementById('breefattach');
         
        let filePath = fileInput.value;
     
        // Allowing file type
        let allowedExtensions =
/(\.jpg|\.txt|\.pdf|\.word|\.png)$/i;
         
        if (!allowedExtensions.exec(filePath)) {
            alert('Недопустимый тип файла');
            fileInput.value = '';
            return false;
        }
    }


    form.onsubmit