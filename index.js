
let func = function() {
    return 'true'
};

// function asincrona
setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);


// funcion generadora
function* generaId(){
    let id = 0;
    while(true){
        id+=2
      yield id
        if(id >= 10){
            return 'hola'
        }
    }
}

const gen = generaId()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)