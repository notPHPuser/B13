function GoToService() {
  const services = document.querySelector('.h1_services');
  services.scrollIntoView({ behavior: 'smooth' });
}

// const btnDezin = document.querySelector('.btn-dezin');
// const btnRashod = document.querySelector('.btn-rashod');
// const btnReagent = document.querySelector('.btn-reagent');
// const dezinDiv = document.querySelector('.forFirst');
// const rashodDiv = document.querySelector('.forSecond');
// const reagentDiv = document.querySelector('.forThird');

// btnDezin.addEventListener('click', () => {
//   dezinDiv.classList.remove('hidden');
//   dezinDiv.classList.add('visible');
//   rashodDiv.classList.add('hidden');
//   reagentDiv.classList.add('hidden');
//   console.log(1);
// });

// btnRashod.addEventListener('click', () => {
//   rashodDiv.classList.remove('hidden');
//   rashodDiv.classList.add('visible');
//   dezinDiv.classList.add('hidden');
//   reagentDiv.classList.add('hidden');
//   console.log(2);
// });

// btnReagent.addEventListener('click', () => {
//   reagentDiv.classList.remove('hidden');
//   reagentDiv.classList.add('visible');
//   dezinDiv.classList.add('hidden');
//   rashodDiv.classList.add('hidden');
//   console.log(3);
// });
