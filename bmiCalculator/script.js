document
  .getElementById('bmiResult')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const weightInKg = parseFloat(document.getElementById('weight').value);
    const heightInMeters = parseFloat(document.getElementById('height').value);

    if (isNaN(weightInKg) || isNaN(heightInMeters)) {
      alert('Please enter valid numbers for weight and height.');
      return;
    }

    const bmi = calculateBMI(weightInKg, heightInMeters);
    displayResult(bmi);
  });

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return parseFloat(bmi.toFixed(2));
}
let resultMessage;
function displayResult(bmi) {
  let resultMessage = '';
  let resultImage = '';

  if (bmi < 18.5) {
    resultMessage = 'Underweight';
    resultImage = 'img/under.jpeg';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultMessage = 'Normal weight';
    resultImage = 'img/normal.jpg';
  } else if (bmi >= 25 && bmi < 29.9) {
    resultMessage = 'Overweight';
    resultImage = 'img/over.jpeg';
  } else {
    resultMessage = 'Obese';
    resultImage = 'img/obese.webp';
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>Your BMI is: <strong>${bmi}</strong></p>
    <p>Result: ${resultMessage}</p>
    <img src="${resultImage}" alt="${resultMessage}" width="270" height="270">
  `;
}
