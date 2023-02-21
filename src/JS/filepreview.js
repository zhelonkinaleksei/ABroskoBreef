const breefAttach = document.getElementById('breefattach');
const filePreview = document.getElementById('filepreview');

breefAttach.addEventListener('change', () =>{
    uploadFile(breefAttach.files[0]);
});

function uploadFile(file){
    let reader = new FileReader ();
    reader.onload = function(e) {
        filePreview.innerHTML = `<img src="${e.target.result}" alt="Превью">`;

    };

    reader.readAsDataURL(file);


};