window.addEventListener('load', function () {

    console.log('El contenido ha cargado!');

    let imagenes = [];

    imagenes[0] = 'assets/img/monster0.jpg';
    imagenes[1] = 'assets/img/monster2.jpg';
    imagenes[2] = 'assets/img/monster3.jpg';
    imagenes[3] = 'assets/img/monster4.jpg';

    let indiceImg = 0;

    function cambiarImg(){
        document.slider.src = imagenes[indiceImg];

        if(indiceImg < 3) {
            indiceImg++;
        }else{
            indiceImg = 0
        }
    }

    
    setInterval(cambiarImg, 2000) 

});