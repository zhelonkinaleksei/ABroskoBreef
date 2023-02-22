const alertButton = document.querySelector(".button__portfolio");
const alertBody = document.querySelector('.alert');
if (alertButton){
    
    alertButton.addEventListener("click", function (){
        alertBody.classList.toggle("_open-alert");
     });
};

const alertCancel = document.querySelector('.alert__cancel');
  
if(alertCancel){
    alertCancel.addEventListener("click", function(){
        alertBody.classList.remove("_open-alert");
    });
}

alertBody.addEventListener("click", function(e){
    if(!e.target.closest(".alert__content")) {
        alertBody.classList.remove("_open-alert");
    };
})