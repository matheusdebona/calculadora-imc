function start() {
  var buttoCalculateImc = document.querySelector('#button-calculate-imc');
  buttoCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  imcResult = document.querySelector('#imc-result');
  imcFaixa = document.querySelector('#imc-faixa');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  var grauObesidade = grauDeObesidade(imc);

  imcResult.textContent = formattedImc;
  imcFaixa.textContent = grauObesidade;
}

function grauDeObesidade(imc) {
  if (imc < 16) {
    return 'Inválido';
  } else if (imc >= 16 && imc < 17) {
    return 'Muito abaixo do peso';
  } else if (imc >= 17 && imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    return 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    return 'Obesidade grau II';
  } else if (imc > 40) {
    return 'Obesidade grau III';
  }
}

start();
