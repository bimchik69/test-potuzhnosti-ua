document.addEventListener('DOMContentLoaded', () => {
    const finalScore = parseInt(localStorage.getItem('finalScore') || '0');
    const maxPossibleScore = parseInt(localStorage.getItem('maxPossibleScore') || '1');
    const percentage = (finalScore / maxPossibleScore) * 100;
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const percentageDisplay = document.getElementById('percentageDisplay');
    const powerBar = document.getElementById('powerBar');
    const powerLevelTitle = document.getElementById('powerLevelTitle');
    const powerLevelDescription = document.getElementById('powerLevelDescription');

    finalScoreDisplay.textContent = finalScore;
    percentageDisplay.textContent = percentage.toFixed(0);

    powerBar.style.width = `${percentage}%`;
    document.documentElement.style.setProperty('--progress-width', `${percentage}%`);

    let levelTitle = '';
    let levelDescription = '';

    if (percentage >= 100) {
        levelTitle = 'Рівень: Абсолютна Потужність!';
        levelDescription = 'Огого, Ви настільки потужні, що потужнометр рознесло вщент!';
    } else if (percentage >= 95) {
        levelTitle = 'Рівень: Майже сотка, йоу!';
        levelDescription = 'Вітаємо! Ви досягли майже максимуму! Ваша енергія, впевненість і готовність діяти безмежні.';
    } else if (percentage >= 75) {
        levelTitle = 'Рівень: Генератор Енергії';
        levelDescription = 'Ви майже на вершині! Ваша потужність вражає, і ви здатні на великі звершення. Зберігайте цей темп і надихайте інших.';
    } else if (percentage >= 50) {
        levelTitle = 'Рівень: Бадьорий Воїн';
        levelDescription = 'Ваша енергія вже відчувається! Ви на правильному шляху до розкриття свого потенціалу. Зосередьтеся на своїх сильних сторонах і продовжуйте вдосконалюватись.';
    } else if (percentage >= 25) {
        levelTitle = 'Рівень: Сплячий Тигр';
        levelDescription = 'Ви маєте приховану силу, яка чекає на свій час! Все ще попереду!';
    } else if (percentage === 0) {
        levelTitle = 'Рівень: Русня';
        levelDescription = 'Тобі тут не раді.';
    } else {
        levelTitle = 'Рівень: Заряджений Пельмень';
        levelDescription = 'Ну що ж, початок є! Ви ще не досягли піку своєї потужності, але перший крок зроблено. Продовжуйте працювати над собою, і ваш потенціал обов\'язково розкриється.';
    }

    powerLevelTitle.textContent = levelTitle;
    powerLevelDescription.textContent = levelDescription;

    localStorage.removeItem('finalScore');
    localStorage.removeItem('maxPossibleScore');
});