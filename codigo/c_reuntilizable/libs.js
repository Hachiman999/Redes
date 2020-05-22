

const reutilizar ={};

reutilizar.randomNumero =()=>{
    const posible ='abcdefghijklmnopqrstuvwyz1234567890';
    let randoNumero =''; 
    for (let i=0; i<11; i++){
         randoNumero+= posible.charAt(
             Math.floor(
                 Math.random()*posible.length
                 )); 
    }
    return randoNumero; 
}

module.exports = reutilizar; 