const popupButton = document.querySelector(".button__order");
if (popupButton){
    const popup = document.querySelector('.popup');
    popupButton.addEventListener("click", function (){
        popup.classList.toggle("_open");
     });
};

const popupCancel = document.querySelector('.form__cancel');
  
if(popupCancel){
    popupCancel.addEventListener("click", function(){
        popup.classList.remove("_open");
    });
}

popup.addEventListener("click", function(e){
    if(!e.target.closest(".popup__form")) {
        popup.classList.remove("_open");
    };
})



  