import { forEach } from "lodash";
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay })
      } else {
        return reject({ position, delay })
      }
    }, delay);
  })

}

const form = document.querySelector('.form')

const handleFormSubmit = event => {
  event.preventDefault();

  const { target } = event;

  const delay = target.delay.value;
  const step = target.step.value;
  const amount = target.amount.value;


  for (let i = 0; i < amount; i++) {
    const resultingDelay = Number(delay) + step * i
    createPromise(i + 1, resultingDelay)
      .then(({ position, delay }) => {
        console.log(Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      })
      .catch(({ position, delay }) => {
        console.log(Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      });
  };

}

form.addEventListener('submit', handleFormSubmit)