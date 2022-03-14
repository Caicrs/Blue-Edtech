let btn = document.querySelector('.btn');
let boxes = document.getElementById('box_fixo');
let boxFixo = document.getElementById('box_inicial')
let boxLeft = document.getElementById('boxLeft')
let caracts = document.getElementById('carInfos')
let carName = document.getElementById('carName')
let marcaName = document.getElementById('marcaName')
let descriText = document.getElementById('descriText')
let carImg = document.getElementById('carImg')
let faceImg = document.getElementById('faceImg')
let contador = 0 ;

let arr_carros = ['Marea','Jetta','Tesla Model S']
let arr_car_img = ['assets/marea.jpg','assets/jetta.png','assets/tesla.png']
let arr_img_face = [
    'assets/incrivel_dark.png',
    'assets/incrivel_happy.png',
    'assets/incrivel_super_happy.png'
]
let arr_car_marca = ['Fiat','Volkswagen','Tesla']
let arr_car_desc = [
    'Esse carro recebeu uma má fama por problemas mecanicos, quando a mangueira do fluido da direção hidráulica se rompia, o fluido inflamável que vazava entrava em contato com o motor quente e o carro então pegava fogo,e assim ele adquiriu essa fama de bomba.'
, 'A nova geração do Jetta chegou ao Brasil com uma proposta distinta da anterior. Maior e mais confortável, o sedã que era conhecido pela tocada esportiva abriu mão de parte de sua personalidade em busca dos consumidores do líder Toyota Corolla.'
, 'Carro-chefe da marca, o Model S surgiu para ser não só a representatividade da marca no segmento de luxo, mas também para ser um captador de recursos para uma fase de enormes gastos iniciais da Tesla.'
]



function generate (){
   
  
    contador++

    if(contador == 1){
       
        session_1();
    }

    else if( contador == 2){
        session_2();
    }
   
    else if (contador >= 3){
        
        session_3();
        contador = 0;
    }


}

function session_1 (){
/* --- ALTERANDO VISIBILIDADE DE DIVS --- */

boxes.classList.remove('invisible');
boxFixo.classList.add('invisible');
caracts.classList.remove('invisible');

carImg.src = arr_car_img[0];
faceImg.src = arr_img_face[0];
carName.innerHTML = arr_carros[0];
marcaName.innerHTML = arr_car_marca[0];
descriText.innerHTML = arr_car_desc[0];

}

function session_2 (){
/* --- ALTERANDO VISIBILIDADE DE DIVS --- */

boxes.classList.remove('invisible');
boxFixo.classList.add('invisible');
caracts.classList.remove('invisible');

carImg.src = arr_car_img[1];
faceImg.src = arr_img_face[1];
carName.innerHTML = arr_carros[1];
marcaName.innerHTML = arr_car_marca[1];
descriText.innerHTML = arr_car_desc[1];

}

function session_3 (){
/* --- ALTERANDO VISIBILIDADE DE DIVS --- */

boxes.classList.remove('invisible');
boxFixo.classList.add('invisible');
caracts.classList.remove('invisible');

carImg.src = arr_car_img[2];
faceImg.src = arr_img_face[2];
carName.innerHTML = arr_carros[2];
marcaName.innerHTML = arr_car_marca[2];
descriText.innerHTML = arr_car_desc[2];

}
