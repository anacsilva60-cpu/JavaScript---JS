const temperatura = 380;
const freioPrecionado = true;

const alertaTemperatura = temperatura >= 400;
console.log(alertaTemperatura);

const usoIntenso = temperatura > 300 && freioPrecionado;
console.log(usoIntenso);

const freioSeguro = temperatura < 400 && temperatura >= 50;
console.log(freioSeguro);

const alertaPainel = temperatura > 400 || temperatura < 0;
console.log(alertaPainel);

const estadoInativo = (!(freioPrecionado == true));
console.log(estadoInativo);