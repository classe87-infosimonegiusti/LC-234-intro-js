let myName = prompt("Dimmi come ti chiami");

console.log("La variabile myName vale: " + myName);


//document.getElementById('hello').innerHTML = 'Ciao ' + myName;


//la stessa cosa di sopra ma usando il template literals
document.getElementById('hello').innerHTML = `Ciao ${myName}`; 


/*const valoreAttualeH1 = document.getElementById('hello').innerHTML;
document.getElementById('hello').innerHTML = `${valoreAttualeH1} ${myName}`;*/