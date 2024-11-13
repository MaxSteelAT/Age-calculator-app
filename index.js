//Valores del input
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector("#year");

const labelDay = document.querySelector('#label-day');
const labelMonth = document.querySelector('#label-month');
const labelYear = document.querySelector('#label-year');

const dayMessageError = document.querySelector('#invalid-day');
const monthMessageError = document.querySelector('#invalid-month');
const yearMessageError = document.querySelector('#invalid-year');

const yearSpan = document.querySelector('#yearSpan');
const monthSpan = document.querySelector('#monthSpan');
const daySpan = document.querySelector('#daySpan');

const currentYear = new Date().getFullYear();

const form = document.querySelector('#form');

form.addEventListener('keydown', function (event) {
  let hasError = false

  if (event.key == 'Enter') {

    const day = parseFloat(inputDay.value);

    if (isNaN(day) || day > 31 || day == 0) {
      dayMessageError.textContent = "Must be a valid day"
      labelDay.classList.add('error-label');
      hasError = true;
    } else {
      dayMessageError.textContent = ""
      labelDay.classList.remove('error-label');
    }

    const month = parseFloat(inputMonth.value);

    if (isNaN(month) || month > 12 || month == 0) {
      monthMessageError.textContent = "Must be a valid month"
      labelMonth.classList.add('error-label');
      hasError = true;
    } else {
      monthMessageError.textContent = ""
      labelMonth.classList.remove('error-label');
    }

    const year = parseFloat(inputYear.value);

    if (isNaN(year) || year > currentYear) {
      yearMessageError.textContent = "Must be a valid year"
      labelYear.classList.add('error-label');
      hasError = true;
    } else {
      yearMessageError.textContent = ""
      labelYear.classList.remove('error-label');
    }

    if (hasError == false) {
      const userDate = `${year}-${month}-${day}`
      console.log(userDate)
      
      const resultDate =  calculator(userDate)
      console.log(resultDate);

      yearSpan.textContent = resultDate.years;
      monthSpan.textContent = resultDate.months;
      daySpan.textContent = resultDate.days;
    }

  }
});


function calculator(startDate) {
  const newStartDate = new Date(startDate);
  const currentDay = new Date();

  let years = currentDay.getFullYear() - newStartDate.getFullYear();
  let months = currentDay.getMonth() - newStartDate.getMonth();
  let days = currentDay.getDate() - newStartDate.getDate();

  if (days < 0) {
    months--;
    const ultimoDiaMesAnterior = new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate();
    days += ultimoDiaMesAnterior;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

