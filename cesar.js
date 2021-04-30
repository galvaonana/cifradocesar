window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensagem").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensagem").value;
        let deslocamento = document.getElementById("deslocamento").value;
        document.getElementById("mensagem2").value = cifrar(texto, deslocamento);
    }, true);
    document.getElementById("decifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensagem").value;
        let deslocamento = document.getElementById("deslocamento").value;
        document.getElementById("mensagem2").value = decifrar(texto, deslocamento);
        },true);
    }

    function cifrar(texto, deslocamento){
        let resultado = "";
        let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";

        deslocamento = (deslocamento % 26 + 26) % 26;

        if (texto){
            for (let i = 0; i<texto.length; i++){
                if (alfabeto.indexOf(texto[i])!=-1){
                    let posicao = ((alfabeto.indexOf(texto[i])+deslocamento)%26);
                    resultado += alfabeto[posicao];
                }
                else
                    resultado += texto[i];   
            }
        }
       return resultado; 
    }

    function cifrar2 (texto, deslocamento){
        if (!texto)
            return "";
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
        deslocamento = (deslocamento % 26 + 26) % 26;
        return texto.replace(/[A-Z]/ig, c=> alfabeto[(alfabeto.indexOf(c)+deslocamento)%26]);
    }
    
    function decifrar (texto, deslocamento){
        if (!texto)
            return "";
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
        deslocamento = (deslocamento % 26 - 26) % 26;
        return texto.replace (/[A-Z]/ig, c=> alfabeto[(alfabeto.indexOf(c)-deslocamento)%26]);
    }
    //a mensagem não está mais aparecendo undefined mas também nada aparece feijoada
