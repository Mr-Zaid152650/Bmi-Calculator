//VARIALES
const radioButtons = document.querySelectorAll('input[type="radio"]');
const formOne = document.querySelector('.form-container-one');
const formTwo = document.querySelector('.form-container-two');
const heightCm = document.getElementById('heightInCm');
const weightKg = document.getElementById('weightInKg');
const resultHide = document.querySelector('.hide-result');
const resultShow = document.querySelector('.show-result');
const displayBMI = document.querySelector('.head-span');
const suggestBMI = document.querySelector('.span-one');
const idealWeight = document.querySelector('.span-two');
const feet = document.getElementById('feet');
const inch = document.getElementById('inch');
const st = document.getElementById('st');
const lbs = document.getElementById('lbs');


//SOME COMMON VARIABLE


//TOGGLE FORM INPUTS

radioButtons.forEach((input) => {
  input.addEventListener('change', (e) => {


    const imperial = formTwo.getAttribute('aria-hidden');
    const metric = formOne.getAttribute('aria-hidden');
    if (e.target.checked) {
      if (e.target.value === 'imperial') {
        if (imperial === 'false') {
          formTwo.setAttribute('aria-hidden', true);
          formOne.setAttribute('aria-hidden', false);
        }
      } else {
        if (metric === 'false') {
          formTwo.setAttribute('aria-hidden', false);
          formOne.setAttribute('aria-hidden', true);
        }
      }
    }
  })
})

//TOGGLE FORM INPUTS METRIC

//METRIC BMI CALCULATION START

const metricBmi = () => {
  const metric = weightKg.value * 10000 / heightCm.value ** 2;
  const fixedMetric = metric.toFixed(1);
  if (metric) {
    displayBMI.innerText = `${fixedMetric}`;
    resultHide.getAttribute('aria-hidden');
    resultHide.getAttribute('aria-hidden');
    resultShow.setAttribute('aria-hidden', true)
    resultHide.setAttribute('aria-hidden', false)
  } else {
    resultShow.setAttribute('aria-hidden', false)
    resultHide.setAttribute('aria-hidden', true)
  }
  if (fixedMetric <= 16 || fixedMetric < 18.5) {
    const low = (16 * heightCm.value ** 2) / 10000
    const high = (18.5 * heightCm.value ** 2) / 10000
    idealWeight.innerText = `${low.toFixed(1)}kgs - ${high.toFixed(1)}kgs`
    suggestBMI.innerText = 'underweight';
  } else if (fixedMetric <= 18.5 || fixedMetric < 25) {
    const low = (18.5 * heightCm.value ** 2) / 10000
    const high = (24.9 * heightCm.value ** 2) / 10000
    idealWeight.innerText = `${low.toFixed(1)}kgs - ${high.toFixed(1)}kgs`
    suggestBMI.innerText = 'healthy weight';
  } else if (fixedMetric >= 25 || fixedMetric <= 40) {
    suggestBMI.innerText = 'overweight';
    const low = (25 * heightCm.value ** 2) / 10000
    const high = (40 * heightCm.value ** 2) / 10000
    idealWeight.innerText = `${low.toFixed(1)}kgs - ${high.toFixed(1)}kgs`
  }
}

//FUNCTION CALLS
weightKg.addEventListener('input', metricBmi);
heightCm.addEventListener('input', metricBmi);

//METRIC BMI CALCULATION  END

//IMPERIAL BMI CALCULATION START


//FOR POUND WEIGHT

const imperialBmiWithPound = () => {
  const height = Number(feet.value) * 12 + Number(inch.value);

  const pound = Number(lbs.value / 2.205);

  const imperialWithPound = pound * 10000 / (height * 2.54) ** 2;
  const poundBmi = imperialWithPound.toFixed(1)

  if (poundBmi) {
    displayBMI.innerText = `${poundBmi}`;

    resultHide.getAttribute('aria-hidden');
    resultHide.getAttribute('aria-hidden');
    resultShow.setAttribute('aria-hidden', true)
    resultHide.setAttribute('aria-hidden', false)
  } else {
    resultShow.setAttribute('aria-hidden', false)
    resultHide.setAttribute('aria-hidden', true)
  }

  if (poundBmi <= 16 || poundBmi < 18.5) {
    const low = ((16 * (height * 2.54) ** 2) / 10000) * 2.205
    const high = ((18.5 * (height * 2.54) ** 2) / 10000) * 2.205
    idealWeight.innerText = `${low.toFixed(1)}lbs - ${high.toFixed(1)}lbs`
    suggestBMI.innerText = 'underweight';
  } else if (poundBmi <= 18.5 || poundBmi < 25) {
    const low = ((18.5 * (height * 2.54) ** 2) / 10000) * 2.205
    const high = ((24.9 * (height * 2.54) ** 2) / 10000) * 2.205
    idealWeight.innerText = `${low.toFixed(1)}lbs - ${high.toFixed(1)}lbs`
    suggestBMI.innerText = 'healthy weight';
  } else if (poundBmi >= 25 || poundBmi <= 40) {
    suggestBMI.innerText = 'overweight';
    const low = ((25 * (height * 2.54) ** 2) / 10000) * 2.205
    const high = ((40 * (height * 2.54) ** 2) / 10000) * 2.205
    idealWeight.innerText = `${low.toFixed(1)}lbs - ${high.toFixed(1)}lbs`
  }
}

//FOR STONE WEIGHT

const imperialBmiWithStone = () => {

  const height = Number(feet.value) * 12 + Number(inch.value);

  const stone = Number(st.value * 6.350);

  const imperialWithStone = stone * 10000 / (height * 2.54) ** 2;

  const fixBmiInStone = imperialWithStone.toFixed(1)

  if (fixBmiInStone) {
    displayBMI.innerText = `${fixBmiInStone}`;

    resultHide.getAttribute('aria-hidden');
    resultHide.getAttribute('aria-hidden');
    resultShow.setAttribute('aria-hidden', true)
    resultHide.setAttribute('aria-hidden', false)
  } else {
    resultShow.setAttribute('aria-hidden', false)
    resultHide.setAttribute('aria-hidden', true)
  }

  if (fixBmiInStone <= 16 || fixBmiInStone < 18.5) {
    const low = ((16 * (height * 2.54) ** 2) / 10000) / 6.350
    const high = ((18.5 * (height * 2.54) ** 2) / 10000) / 6.350
    idealWeight.innerText = `${low.toFixed(1)}st - ${high.toFixed(1)}st`
    suggestBMI.innerText = 'underweight';
  } else if (fixBmiInStone <= 18.5 || fixBmiInStone < 25) {
    const low = ((18.5 * (height * 2.54) ** 2) / 10000) / 6.350
    const high = ((24.9 * (height * 2.54) ** 2) / 10000) / 6.350
    idealWeight.innerText = `${low.toFixed(1)}st - ${high.toFixed(1)}st`
    suggestBMI.innerText = 'healthy weight';
  } else if (fixBmiInStone >= 25 || fixBmiInStone <= 40) {
    suggestBMI.innerText = 'overweight';
    const low = ((25 * (height * 2.54) ** 2) / 10000) / 6.350
    const high = ((40 * (height * 2.54) ** 2) / 10000) / 6.350
    idealWeight.innerText = `${low.toFixed(1)}st - ${high.toFixed(1)}st`
  }
}
//FUNCTION CALLS

st.addEventListener('input', imperialBmiWithStone);
inch.addEventListener('input', imperialBmiWithStone);
feet.addEventListener('input', imperialBmiWithStone);
lbs.addEventListener('input', imperialBmiWithPound);
inch.addEventListener('input', imperialBmiWithPound);
feet.addEventListener('input', imperialBmiWithPound);

//IMPERIAL BMI CALCULATION END


