const alertButton = document.querySelector(".button__portfolio");
if (alertButton){
    const alert = document.querySelector('.alert');
    alertButton.addEventListener("click", function (){
        alert.classList.toggle("_open-alert");
     });
};

const alertCancel = document.querySelector('.alert__cancel');
  
if(alertCancel){
    alertCancel.addEventListener("click", function(){
        const alert = document.querySelector('.alert');
        alert.classList.remove("_open-alert");
    });
}

alert.addEventListener("click", function(e){
    if(!e.target.closest(".alert__content")) {
        const alert = document.querySelector('.alert');
        alert.classList.remove("_open-alert");
    };
})