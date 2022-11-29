/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const magicButton = document.querySelector('.forecast-btn');
const newPrediction = document.querySelector('.current-forecast h1');
const newPercent = document.querySelector('.current-forecast p');
const forecastsList = document.querySelector('.forecasts');
const cardTemplate = document.querySelector('#forecast-item');




magicButton.addEventListener("click", createPrediction);

function createPrediction() {

    switch (randomInteger(0, 3)) {
        case 0:
            newPrediction.textContent = firstPrediction;

            break;
        case 1:
            newPrediction.textContent = secondPrediction;

            break;
        case 2:
            newPrediction.textContent = thirdPrediction;

            break;
        default:
            newPrediction.textContent = fourthPrediction;

    }
    newPercent.textContent = `Вероятность: ${randomInteger(0, 100)}%`;

    return forecastsList.prepend(makeCardByTemplate(newPrediction.textContent, newPercent.textContent));
}



function makeCardByTemplate(prd, prc) {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h3').textContent = prd;
    myCard.querySelector('p').textContent = prc;

    return myCard;
}

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const firstPrediction = 'Сегодня вечером тебя ожидает приятный сюрприз';
const secondPrediction = 'Скоро будет прибавка в зарплате';
const thirdPrediction = 'Все будет хорошо';
const fourthPrediction = 'Ты найдешь то, что искала';