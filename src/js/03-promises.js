import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmitForm);


// повертаємо проміс ===========================================================

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

//------------------------------------------------------------------------
function onSubmitForm(e) {
  e.preventDefault();

  const {
    elements: { delay: delayRef, step: stepRef, amount: amountRef },
  } = formRef;

  let position = 1;
  let delay = Number(delayRef.value);
  const amount = Number(amountRef.value);
  while (position <= amount) {
    createPromise(position, delay)
      // винесемо повідомлення в окремі функції
      .then(({ position, delay }) => {
      success(position, delay)
      })
      .catch(({ position, delay }) => {
       failure(position, delay)
      });
    delay += Number(stepRef.value);
    position += 1;
  }
}

function success(position, delay) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function failure(position, delay) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}