var pantalla = document.querySelector('.pantalla');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
var numeros = "";
var result = 0;
const botones = document.querySelectorAll('button');
botones.forEach(boton =>{
    boton.addEventListener('click',()=>{
        pantalla.innerHTML = "";
        console.log(boton.dataset.id)
        
        if(boton.dataset.id === "="){
            result = eval(numeros);
            template.querySelector('h4').textContent = result;
        }else if(boton.dataset.id === 'clear'){
            numeros = "";
            template.querySelector('h4').textContent = "";
        }else{
            numeros += boton.dataset.id;
            template.querySelector('h4').textContent = numeros;
        }
        //Sirven para mostrar la etiqueta p
        var clone = template.cloneNode(true); //Conamos el template
        fragment.appendChild(clone);
        pantalla.appendChild(fragment);
    })
})

//CARGA ANIMATION
var cargaCircle = document.querySelector('.carga');
function carga(){
    cargaCircle.style.display = 'none';
    document.body.style.display = 'block';
}

setTimeout(()=>{
    carga()
},500);