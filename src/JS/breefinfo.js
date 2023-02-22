const breefInfo = document.querySelector('.section__breef-tille');
const breefInfoDetails = document.querySelector('.breef__title-details');

breefInfo.addEventListener('mouseover', function(){
    breefInfoDetails.classList.add('breef__title-details-active')
});
breefInfo.addEventListener('mouseout', function(){
    breefInfoDetails.classList.remove('breef__title-details-active')
});