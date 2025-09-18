const dataDoEvento = new Date("Dec 31, 2025 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaParaOEvento = timeStampEvento- timeStampAtual;

    const diaEmMs = 1000 * 60* 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasParaOEvento = Math.floor(distanciaParaOEvento / diaEmMs);
    const horasParaOEvento = Math.floor((distanciaParaOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaParaOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaParaOEvento % minutosEmMs) / 1000);
    
    console.log(horasParaOEvento);
    console.log(diasParaOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaParaOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)