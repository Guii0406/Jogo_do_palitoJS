document.getElementById('quantpalitoss').focus();
log = document.getElementById('logg');

function jogar(){
    
    quantpalitos = parseInt(document.getElementById('quantpalitoss').value);
    let campoPalito = document.getElementById('quantpalitoss').value;

    if(quantpalitos > 30 || quantpalitos < 20 || campoPalito == ''){
        alert("Favor inserir um número entre 20 e 30");
        document.getElementById('quantpalitoss').focus();
        return;
    }

    document.getElementById('quantpalitoss').disabled = true;
    document.getElementById('jogar').disabled = true;
    document.getElementById('retirar').style.transform = 'scale(1)';

    var resto = quantpalitos % (3 + 1);
    var jogadaPc = 3;
    if(resto > 1){
        jogadaPc = resto - 1;
    }

    log.value += "Eu começo!";
    log.value += "\nRetiro " + jogadaPc + " palitos";
    quantpalitos -= jogadaPc;
    log.value += "\nSua vez...";
    log.value += "\nRestam " + quantpalitos + " palitos";
    document.getElementById('jogadaplayerr').focus();
}

function retirar(){
   var jogadaPlayer = parseInt(document.getElementById('jogadaplayerr').value);
   var campoPlayer = document.getElementById('jogadaplayerr').value;

   if(jogadaPlayer > 3 || jogadaPlayer < 1 || jogadaPlayer > quantpalitos || campoPlayer == ''){
        alert("Favor inserir um número válido");
        document.getElementById('jogadaplayerr').value = ''
        document.getElementById('jogadaplayerr').focus();
        return;
    }

    if(quantpalitos <= 1){
        alert("Você perdeu");
        location.reload();
        return;
    }

   log.value += "\nVocê retirou " + jogadaPlayer + " palitos";
   quantpalitos -= jogadaPlayer;
   log.value += "\nRestam " + quantpalitos + " palitos";

   var resto = quantpalitos % (3 + 1);
    var jogadaPc = 3;
    if(resto > 1){
        jogadaPc = resto - 1;
    }

    if(quantpalitos <= 1){
        alert("Você ganhou, parabéns");
        location.reload();
        return;
    }

    logg.value += "\nRetiro " + jogadaPc + " palitos";
    quantpalitos -= jogadaPc;
    logg.value += "\nSua vez...";
    logg.value += "\nRestam " + quantpalitos + " palitos";

    log.scrollTop = log.scrollHeight;
    document.getElementById('jogadaplayerr').focus();
    campoPlayer = '';
    document.getElementById('jogadaplayerr').value = '';
}