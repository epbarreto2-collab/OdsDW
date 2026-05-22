const frases = document.querySelectorAll(".frase");

frases.forEach(frase => {

    const texto = frase.getAttribute("data-text");
    let i = 0;

    function escribir(){

        if(i < texto.length){

            frase.innerHTML += texto.charAt(i);
            i++;

            setTimeout(escribir, 100);
        }

    }

    escribir();

});