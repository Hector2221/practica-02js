let userName = 'Jane';
console.log(`Hello ${userName} !`);


const userQuestion = 'Will I become a werewolf tonight?';
console.log(`${userName} "${userQuestion}"`);


let eightBall = '';
let randomNumber = Math.floor(Math.random() * 8);
if (randomNumber === 0) {
    eightBall = 'It is certain';
  } else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
  } else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
  } else {
    eightBall = 'Signs point to yes';
  }
             
  console.log(eightBall);


  console.log('Funciones: ');
  var numero1 = 3;
  var numero2 = 5;
  //Funcion 1
  function operaciones() {
    var suma = numero1 + numero2;
    var divicion = numero1 / numero2;
    var resta  = numero1 - numero2;
    console.log(`Suma es: ${suma}, Resta es: ${resta} , Diviicion es: ${divicion}`);
  }
  //Funcion2
  function calificacion(calif) {
    if (calif >= 10) {
        console.log('sobresaliente ');
    }if (calif <= 9 && calif >=7) {
        console.log('bien');
    }if (calif <= 6 && calif >=0) {
        console.log('malo');
    }
  }
  

  
  operaciones();
  calificacion(8);
    