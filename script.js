document.addEventListener('DOMContentLoaded', function() {
    // Визначення відповідей магічного шару
    const answers = [
        'Ймовірно', 'Точно так', 'Так', 'Ні', 'Точно ні',
        'Малоймовірно', 'Не зараз', 'Запитайте знову',
        'Дуже ймовірно', 'Без сумніву', 'Не рекомендується', 
		'Спробуй пізніше' , 'Вдача на твоєму боці'
    ];
    // Створення і додавання стилів
    const style = document.createElement('style');
    document.head.appendChild(style);

    // Створення текстового поля
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Введіть своє питання:');
    input.classList.add('input-question');
    input.required = true; // Для валідації

    // Створення кнопки для отримання відповіді
    const answerButton = document.createElement('button');
    answerButton.textContent = 'Відповідь';
    answerButton.classList.add('answer-button');

    // Створення контейнера для магічного шару
    const ballContainer = document.createElement('div');
    ballContainer.classList.add('magic-ball-container');

    // Створення зображення шару та отвору
    const ballImage = document.createElement('img');

    const holeImage = document.createElement('img');

    // Створення елементу для відповіді
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');

    // Додавання елементів до контейнера шару
    ballContainer.appendChild(ballImage);
    ballContainer.appendChild(holeImage);
    ballContainer.appendChild(answerDiv);

    // Додавання елементів до body
    document.body.appendChild(input);
    document.body.appendChild(answerButton);
    document.body.appendChild(ballContainer);
	ballImage.src = 'ball.png';
	ballImage.alt = 'Магічний шар';
	ballImage.classList.add('ball'); // Додано клас для стилізації шару

	holeImage.src = 'ball-hole.png';
	holeImage.alt = 'Отвір магічного шару';
	holeImage.classList.add('hole'); // Додано клас для стилізації отвору
		// Створення контейнера з фоном
	const wrapper = document.createElement('div');
	wrapper.classList.add('magic-ball-wrapper');

	// Додавання елементів до контейнера з фоном
	wrapper.appendChild(input);
	wrapper.appendChild(answerButton);
	wrapper.appendChild(ballContainer);

	// Додавання контейнера з фоном до body
	document.body.appendChild(wrapper);

    // Функція для отримання випадкової відповіді
    function getRandomAnswer() {
        const index = Math.floor(Math.random() * answers.length);
        return answers[index];
    }
	// Обробник події кліка на кнопку
answerButton.addEventListener('click', function() {
    const trimmedQuestion = input.value.trim();

    if (trimmedQuestion === '' || !trimmedQuestion.endsWith('?')) {
        alert('Задай питання'); // Виводиться push-повідомлення, якщо питання не задане
    } else if (trimmedQuestion.length < 3) {
        alert('Некоректне питання'); // Виводиться push-повідомлення, якщо питання занадто коротке
    } else {
        // Якщо питання задане коректно, виконується наступний код
        ballContainer.classList.add('shake');
        answerDiv.textContent = getRandomAnswer();
        setTimeout(function() {
            ballContainer.classList.remove('shake');
        }, 1000); // Тривалість анімації 1 секунду

        input.value = ''; // Очищення поля вводу після отримання відповіді
    }
});

});

