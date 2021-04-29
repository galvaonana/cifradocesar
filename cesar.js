window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensagem").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensagem").value;
        let descriptogafia = document.getElementById("descriptografia").value;
        document.getElementById("mensagem2").value = cifrar(texto, descriptogafia);
    }, true);
    document.getElementById("decifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensagem".value);
        let descriptogafia = document.getElementById("descriptografia").value;
        document.getElementById("mensagem2").value = decifrar(texto, descriptogafia);
        },true);
    }

    function cifrar(texto, descriptogafia){
        let resultado = "";
        let letras = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";

        descriptogafia = (descriptogafia % 26 + 26) % 26;

        if (texto){
            for (let i = 0; i<texto.length;i++){
                if (letras.indexOf(texto[i] !=-1)){
                    let posicion = ((letras.indexOf(texto[i])+descriptografia)%26);
                    resultado += letras[posicion];
                }
                else
                    resultado += texto[i];   
            }
        }
       return resultado; 
    }

    function cifrar2 (texto, descriptogafia){
        if (!texto){
            return "";
            const letras = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
            descriptogafia = (descriptogafia % 26 + 26) % 26;
            return texto.replace (/[A-Z]/ig, c=> letras[(letras.indexOf(c)+descriptogafia)%26]);
        }
        function decifrar (texto, descriptogafia){
            if (!texto){
                return "";
                const letras = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
                descriptogafia = (descriptogafia % 26 - 26) % 26;
                return texto.replace (/[A-Z]/ig, c=> letras[(letras.indexOf(c)-descriptogafia)%26]);
            }
    }
    //a mensagem não está mais aparecendo undefined mas também nada aparece feijoada
    